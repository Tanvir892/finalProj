import { Authenticated } from "../../components/Authenticated";
import MovieList from "../../components/GetMovies/GetMovies";
import { DefaultLayout } from "../../layout/DefaultLayout/DefaultLayout";

const Movies = () => {
  return (
    <>
      <MovieList />
    </>
  );
};

Movies.getLayout = (page) => {
  return (
    <Authenticated>
      <DefaultLayout>{page}</DefaultLayout>
    </Authenticated>
  );
};

export default Movies;
