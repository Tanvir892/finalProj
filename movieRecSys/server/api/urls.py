# from django.urls import path
# from . import views

# urlpatterns = [
#     path('movies/', views.get_movies),
#     path('movie/<int:movie_id>/', views.get_movie_by_id),
#     path('movie/rating', views.create_rating),
#     path('movie/<int:movie_id>/related/', views.get_top_related_movies),
#     path('movie/<int:movie_id>/collaborative/',
#          views.get_collaborative_filtered_movies),
#     path('movie/search/', views.search_movies)
# ]

from django.urls import path
from . import views

urlpatterns = [
    path('movies/', views.get_movies, name='get_movies'),
    path('movie/<int:movie_id>/', views.get_movie_by_id, name='get_movie_by_id'),
    path('movie/rating', views.create_rating, name='create_rating'),
    path('movie/<int:movie_id>/related/',
         views.get_top_related_movies, name='get_top_related_movies'),
    path('movie/<int:movie_id>/collaborative/', views.get_collaborative_filtered_movies,
         name='get_collaborative_filtered_movies'),
    path('movie/search/', views.search_movies, name='search_movies')
]
