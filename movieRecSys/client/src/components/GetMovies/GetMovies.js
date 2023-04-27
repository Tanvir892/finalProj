import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Center,
  Heading,
  List,
  ListItem,
  Spinner,
  Stack,
  Text,
  Button,
  useToast,
  Link,
  Container,
} from "@chakra-ui/react";

import axiosInstance from "../../services/axios";
import { API_URL } from "../../utils/constants";

const MovieList = () => {
  const router = useRouter();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [numPages, setNumPages] = useState(1);
  const toast = useToast();

  useEffect(() => {
    if (router.query.page) {
      setCurrentPage(Number(router.query.page));
    } else {
      setCurrentPage(1);
    }
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          `${API_URL}/api/movies/?page=${currentPage}`
        );
        setMovies(response.data.results);
        setHasPreviousPage(response.data.has_previous);
        setHasNextPage(response.data.has_next);
        setNumPages(response.data.num_pages);
        setIsLoading(false);
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
  }, [currentPage, toast]);

  const handlePreviousPage = () => {
    router.push({
      pathname: router.pathname,
      query: { page: currentPage - 1 },
    });
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    router.push({
      pathname: router.pathname,
      query: { page: currentPage + 1 },
    });
    setCurrentPage(currentPage + 1);
  };
  const handleRateClick = (movieId) => {
    router.push({
      pathname: "/ratings",
      query: { movieId: movieId },
    });
  };

  return (
    <Box p={4}>
      <Stack>
        <Heading mb={4}>Search for a movie!</Heading>
        <Link href="/movies/search">
          <Button width={"100%"} my={2}>
            Search🔍
          </Button>
        </Link>
      </Stack>
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Container>
          <List spacing={3}>
            {movies.map((movie) => (
              <ListItem key={movie.movie_id}>
                <Stack direction="row" align="center" justify="space-between">
                  <Box>
                    <Link to={`/ratings/${movie.movie_id}`} fontWeight="bold">
                      {movie.title}
                    </Link>
                    {/* <Text fontWeight="bold">{movie.title}</Text> */}
                    <Text>{movie.genres} </Text>
                    <Text>Rating {movie.avg_rating.toFixed(2)}</Text>
                  </Box>
                  <Button
                    colorScheme="teal"
                    size="sm"
                    onClick={() => handleRateClick(movie.movie_id)}
                  >
                    Rate
                  </Button>
                </Stack>
              </ListItem>
            ))}
          </List>
          <Stack direction="row" mt={4} align="center" justify="flex-end">
            <Button
              isDisabled={!hasPreviousPage}
              onClick={handlePreviousPage}
              variant="outline"
            >
              Previous
            </Button>
            <Text>
              Page {currentPage} of {numPages}
            </Text>
            <Button
              isDisabled={!hasNextPage}
              onClick={handleNextPage}
              variant="outline"
            >
              Next
            </Button>
          </Stack>
        </Container>
      )}
    </Box>
  );
};

export default MovieList;
