from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from .models import User, Movie, Rating
from django.db.models import Avg


class UserPublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = (
            "password",
            "is_superuser",
            "date_joined",
            "groups",
            "user_permissions",
        )


class UserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=45, write_only=True)

    class Meta:
        model = User
        fields = ("username", "email", "password")

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)


class MovieSerializer(serializers.ModelSerializer):
    avg_rating = serializers.SerializerMethodField()
    genres = serializers.SerializerMethodField()

    class Meta:
        model = Movie
        fields = "__all__"

    def get_avg_rating(self, obj):
        r = Rating.objects.filter(movie=obj).aggregate(avg=Avg("rating"))
        return r["avg"]

    def get_genres(self, obj):
        return obj.genres.split("|")


class MovieDetailSerializer(serializers.ModelSerializer):
    previous_rating = serializers.SerializerMethodField()
    
    class Meta:
        model = Movie
        fields = "__all__"

    def get_previous_rating(self, obj):
        if self.context["request"].user.is_authenticated:
            r = Rating.objects.filter(
                user_id=self.context["request"].user.id,
                movie__movie_id=obj.movie_id
            ).first()
            if r:
                return r.rating
        return None


class RatingSerializer(serializers.Serializer):
    movie_id = serializers.IntegerField(write_only=True)
    rating = serializers.IntegerField(write_only=True)
