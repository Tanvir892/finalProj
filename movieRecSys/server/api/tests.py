from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from users.models import Movie, Rating
from users.serializers import MovieSerializer
import datetime
from users.models import User, Movie, Rating
from users.serializers import MovieSerializer, MovieDetailSerializer
from rest_framework.request import Request
from django.http import HttpRequest
from django.core.exceptions import ObjectDoesNotExist


class MovieAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

        self.user1 = User.objects.create_user(
            username="user1", email="user1@example.com", password="testpassword123")
        self.user2 = User.objects.create_user(
            username="user2", email="user2@example.com", password="testpassword123")

        self.movie1 = Movie.objects.create(
            movie_id=1,
            title="Sample Movie 1",
            genres="Action|Adventure"
        )

        self.movie2 = Movie.objects.create(
            movie_id=2,
            title="Sample Movie 2",
            genres="Adventure|Sci-Fi"
        )

        self.rating1 = Rating.objects.create(
            user_id=self.user1.id,
            movie=self.movie1,
            rating=4,
            timestamp=datetime.datetime.now(
            ).timestamp().as_integer_ratio()[0],
        )

        self.rating2 = Rating.objects.create(
            user_id=self.user2.id,
            movie=self.movie2,
            rating=3,
            timestamp=datetime.datetime.now(
            ).timestamp().as_integer_ratio()[0],
        )

    def test_get_movies(self):
        self.client.force_authenticate(user=self.user1)
        url = reverse('get_movies')
        response = self.client.get(url)
        movies = Movie.objects.all().order_by('movie_id')
        serializer = MovieSerializer(movies, many=True)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['results'], serializer.data)

    def test_get_movie_by_id(self):
        self.client.force_authenticate(user=self.user1)

        # Test case for a movie that exists
        url = reverse('get_movie_by_id', kwargs={'movie_id': 1})
        response = self.client.get(url)
        movie = Movie.objects.get(movie_id=1)

        # Create a dummy request object and set the user
        dummy_request = Request(HttpRequest())
        dummy_request.user = self.user1

        serializer = MovieDetailSerializer(
            instance=movie, context={'request': dummy_request})

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

        # Test case for a movie that does not exist
        url = reverse('get_movie_by_id', kwargs={'movie_id': 100})
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
    # Add more test cases for the other views
    # ...

    def test_create_rating(self):
        self.client.force_authenticate(user=self.user1)
        url = reverse('create_rating')
        data = {
            'movie_id': self.movie2.movie_id,  # Change the movie to movie2
            'rating': 5
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_top_related_movies(self):
        self.client.force_authenticate(user=self.user1)
        url = reverse('get_top_related_movies', kwargs={
                      'movie_id': self.movie1.movie_id})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_collaborative_filtered_movies(self):
        self.client.force_authenticate(user=self.user1)
        url = reverse('get_collaborative_filtered_movies',
                      kwargs={'movie_id': self.movie1.movie_id})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_search_movies(self):
        self.client.force_authenticate(user=self.user1)
        url = reverse('search_movies') + '?query=Sample'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


if __name__ == '__main__':
    TestCase.main()
