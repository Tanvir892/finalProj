from django.contrib import admin
from .models import User, Movie, Rating

# Register your models here.
admin.site.register(User)


@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = ("title", "genres")
    list_filter = ("genres",)
    search_fields = ("title", "genres", "movie_id")


@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    list_display = ("user_id", "rating", "id")
    list_filter = ("user_id", "rating")
    search_fields = ("user_id", "rating", "id")
