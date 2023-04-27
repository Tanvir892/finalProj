import datetime
import operator
from functools import reduce
from django.core.paginator import Paginator
from rest_framework.decorators import (
    api_view,
)
from rest_framework.response import Response
from users.models import Movie, Rating
from users.serializers import (
    MovieSerializer, MovieDetailSerializer, RatingSerializer
)
from django.db.models import Avg, Q, Count
from drf_spectacular.utils import extend_schema, OpenApiParameter
from drf_spectacular.types import OpenApiTypes

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django.core.exceptions import ObjectDoesNotExist
from sklearn.metrics.pairwise import cosine_similarity
from scipy import sparse


@extend_schema(
    parameters=[
        OpenApiParameter(
            "page",
            OpenApiTypes.INT,
            OpenApiParameter.QUERY,
            default=1,
        )
    ],
    responses=OpenApiTypes.OBJECT,
)
@api_view(["GET"])
def get_movies(request):
    queryset = Movie.objects.all().order_by("movie_id")
    paginator = Paginator(queryset, 20)  # paginate with 20 items per page
    page_number = request.GET.get("page")
    page_obj = paginator.get_page(page_number)
    serializer = MovieSerializer(page_obj, many=True)
    response_data = {
        "results": serializer.data,
        "count": paginator.count,
        "num_pages": paginator.num_pages,
        "has_previous": page_obj.has_previous(),
        "has_next": page_obj.has_next(),
        "previous_page_number": page_obj.previous_page_number()
        if page_obj.has_previous()
        else None,
        "next_page_number": page_obj.next_page_number()
        if page_obj.has_next()
        else None,
    }
    return Response(response_data)


@extend_schema(
    responses=OpenApiTypes.OBJECT,
)
@api_view(["GET"])
def get_movie_by_id(request, movie_id):
    try:
        movie = Movie.objects.get(movie_id=movie_id)
    except ObjectDoesNotExist:
        return Response({"error": "Movie not found"}, status=404)

    serializer = MovieDetailSerializer(
        instance=movie, many=False, context={"request": request}
    )
    return Response(serializer.data)


@extend_schema(
    request=RatingSerializer,
    responses=OpenApiTypes.OBJECT,
)
@api_view(["POST"])
def create_rating(request):
    print(request.data)
    user = request.user
    movie_id = request.data.get("movie_id")
    rating = request.data.get("rating")

    movie = Movie.objects.filter(movie_id=movie_id).first()
    if not movie:
        return Response({"error": "Movie not found"}, status=404)
    if Rating.objects.filter(user_id=user.id, movie=movie).exists():
        return Response(
            {"error": "You have already rated this movie"},
            status=400,
        )
    if rating < 1 or rating > 5:
        return Response(
            {"error": "Rating should be between 1 and 5"},
            status=400,
        )
    Rating.objects.create(
        user_id=user.id,
        movie=movie,
        rating=rating,
        timestamp=datetime.datetime.now().timestamp().as_integer_ratio()[0],
    )
    print("Rating added successfully")
    return Response({"success": "Rating added successfully"}, status=201)


@api_view(["GET"])
def get_top_related_movies(request, movie_id):
    movie = Movie.objects.filter(movie_id=movie_id).first()
    if not movie:
        return Response({"error": "Movie not found"}, status=404)
    queryset = Movie.objects.filter(
        Q(title__icontains=movie.title) | Q(genres__icontains=movie.genres)
    ).exclude(
        movie_id=movie_id
    ).annotate(avg_rating=Avg("rating")).order_by("avg_rating")[:5]
    serializer = MovieSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_collaborative_filtered_movies(request, movie_id):
    movie = Movie.objects.filter(movie_id=movie_id).first()
    if not movie:
        return Response({"error": "Movie not found"}, status=404)
    generas = movie.genres.split("|")
    q = reduce(operator.or_, (Q(genres__icontains=genera)
               for genera in generas))
    queryset = Movie.objects.filter(
        Q(title__icontains=movie.title) |
        q
    ).filter(
        Q(rating__user_id__isnull=False) & ~Q(rating__user_id="Anonymous")
    ).exclude(
        Q(movie_id=movie_id) |
        Q(rating__user_id=request.user.id)
    ).annotate(
        avg_rating=Avg("rating"),
    ).order_by(
        "avg_rating"
    )[:5]
    serializer = MovieSerializer(queryset, many=True)
    return Response(serializer.data)


@extend_schema(
    parameters=[
        OpenApiParameter(
            "query",
            OpenApiTypes.STR,
            OpenApiParameter.QUERY,
        )
    ],
    responses=OpenApiTypes.OBJECT,
)
@api_view(["GET"])
@authentication_classes([])
@permission_classes([])
def search_movies(request):
    query = request.GET.get("query")
    if not query:
        return Response({"error": "Please provide a search query"}, status=400)
    queryset = Movie.objects.filter(
        Q(title__icontains=query) | Q(genres__icontains=query)
    ).annotate(avg_rating=Avg("rating")).order_by("-avg_rating")[:30]
    serializer = MovieSerializer(queryset, many=True)
    return Response(serializer.data)
