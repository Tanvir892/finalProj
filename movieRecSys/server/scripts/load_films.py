import csv
from users.models import Movie, Rating


def run():
    Movie.objects.all().delete()
    Rating.objects.all().delete()
    
    with open("static/movies.csv", "r", encoding="utf-8") as f:
        reader = csv.reader(f)
        next(reader)  # Skip header row
        records = []
        for row in reader:
            movie_id, title, genres = row
            record = Movie(movie_id=int(movie_id), title=title, genres=genres)
            records.append(record)
        print("Loading movies...")
        Movie.objects.bulk_create(records, batch_size=1000)
        print("Done!")
        
    # Read ratings data from CSV file
    with open("static/ratings.csv", "r", encoding="utf-8") as f:
        reader = csv.reader(f)
        next(reader)  # Skip header row
        rating_records = []
        for row in reader:
            _, movie_id, rating, timestamp = row
            record = Rating(
                user_id="Anonymous",
                movie=Movie.objects.get(movie_id=int(movie_id)),
                rating=float(rating),
                timestamp=int(timestamp),
            )
            rating_records.append(record)
        print("Loading ratings...")
        Rating.objects.bulk_create(rating_records, batch_size=5000)
        print("Done!")
