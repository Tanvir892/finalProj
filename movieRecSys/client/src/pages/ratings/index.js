import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  useToast,
  Kbd,
  Flex,
  Button,
} from "@chakra-ui/react";
import RatingForm from "../../components/RatingForm/RatingForm";
import { API_URL } from "../../utils/constants";
import { Authenticated } from "../../components/Authenticated";
import { DefaultLayout } from "../../layout/DefaultLayout/DefaultLayout";
import axiosInstance from "../../services/axios";
import Link from "next/link";

const RateMoviePage = () => {
  const toast = useToast();
  const router = useRouter();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [collaborativeRecommendations, setCollaborativeRecommendations] =
    useState([]);
  const [hasRated, setHasRated] = useState(false);

  useEffect(() => {
    const { movieId } = router.query;
    if (!movieId) return; // check if movieId exists
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          `${API_URL}/api/movie/${movieId}/`
        );
        setMovie(response.data);
        setHasRated(response.data.previous_rating !== null);
        setCollaborativeRecommendations([]);
        setLoading(false);
      } catch (error) {
        toast({
          title: "An error occurred.",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };
    fetchMovies();
  }, [router.query, toast]);

  useEffect(() => {
    const fetchRelatedMovies = async () => {
      try {
        const response = await axiosInstance.get(
          `${API_URL}/api/movie/${movie.movie_id}/related/`
        );
        setRelatedMovies(response.data);
      } catch (error) {
        toast({
          title: "An error occurred.",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };
    if (movie) fetchRelatedMovies();
  }, [movie]);

  useEffect(() => {
    const fetchCollaborativeRecommendations = async () => {
      try {
        const response = await axiosInstance.get(
          `${API_URL}/api/movie/${movie.movie_id}/collaborative/`
        );
        setCollaborativeRecommendations(response.data);
      } catch (error) {
        toast({
          title: "An error occurred.",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };
    if (hasRated) fetchCollaborativeRecommendations();
  }, [movie, hasRated]);

  const handleRatingSubmit = (formData) => {
    const data = {
      ...formData,
      movie_id: movie.movie_id,
    };
    axiosInstance
      .post(`${API_URL}/api/movie/rating`, data)
      .then((response) => {
        if (response.status === 201) {
          setHasRated(true);
          toast({
            title: "Success!",
            description: response.success,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "An error occurred.",
          description: error?.response?.data?.error || error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box>
      <Link href="/">
        <Button>Back</Button>
      </Link>
      <Heading>{movie.title}</Heading>
      <Box my={2}>
        {movie.genres?.split("|").map((g) => (
          <Kbd key={g}>{g}</Kbd>
        ))}
      </Box>
      {movie && (
        <RatingForm
          onSubmit={handleRatingSubmit}
          movieId={movie.movie_id}
          previousRating={movie.previous_rating}
        />
      )}
      <Heading as="h2" size="md" my={4}>
        Similar Movies:
      </Heading>
      {relatedMovies.map((m) => (
        <Flex justifyContent={"space-between"} key={m.movie_id}>
          <Box>
            <Heading as="h3" size="sm">
              {m.title}
            </Heading>
            <Box my={2}>
              {m.genres?.map((g) => (
                <Kbd key={g}>{g}</Kbd>
              ))}
            </Box>
          </Box>
          <Button>
            <Link href={`/ratings?movieId=${m.movie_id}`}>Rate</Link>
          </Button>
        </Flex>
      ))}
      <Heading as="h2" size="md" my={4}>
        Other Users like:
      </Heading>
      {hasRated &&
        collaborativeRecommendations.map((m) => (
          <Flex justifyContent={"space-between"} key={m.movie_id}>
            <Box>
              <Heading as="h3" size="sm">
                {m.title}
              </Heading>
              <Box my={2}>
                {m.genres?.map((g) => (
                  <Kbd key={g}>{g}</Kbd>
                ))}
              </Box>
            </Box>
            <Button>
              <Link href={`/ratings?movieId=${m.movie_id}`}>Rate</Link>
            </Button>
          </Flex>
        ))}
    </Box>
  );
};

RateMoviePage.getLayout = (page) => {
  return (
    <Authenticated>
      <DefaultLayout>{page}</DefaultLayout>
    </Authenticated>
  );
};

export default RateMoviePage;
