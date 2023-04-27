from uuid import uuid4
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models import Avg


def default_uuid():
    return str(uuid4())


class User(AbstractUser):
    id = models.CharField(
        primary_key=True, default=default_uuid, max_length=36, editable=False
    )
    email = models.EmailField(unique=True)

    EMAIL_FIELD: str = "email"
    USERNAME_FIELD: str = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self) -> str:
        return self.email + " | " + self.id

    class Meta:
        unique_together = ("username", "email")
        db_table = "users"


class Movie(models.Model):
    movie_id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=255)
    genres = models.CharField(max_length=255)
    


class Rating(models.Model):
    user_id = models.CharField(null=True, blank=True, max_length=255)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    rating = models.FloatField(choices=[(float(i), float(i)) for i in range(1, 6)])
    timestamp = models.IntegerField()
