import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  List,
  ListItem,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { Authenticated } from "../../components/Authenticated";
import { DefaultLayout } from "../../layout/DefaultLayout/DefaultLayout";
import Link from "next/link";
import axiosInstance from "../../services/axios";
import { API_URL } from "../../utils/constants";

const Search = () => {
  const toast = useToast();
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axiosInstance
      .get(`${API_URL}/api/movie/search/`, {
        params: {
          query: search,
        },
      })
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        toast({
          title: "An error occurred.",
          description: error.response?.data?.error || error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Flex gap={1}>
          <Input
            type="text"
            placeholder="Search for a movie"
            value={search}
            onChange={handleChange}
          />
          <Button type="submit">Search🔍</Button>
        </Flex>
      </form>
      {loading && <Spinner />}
      {movies.length > 0 && (
        <List mt={10} spacing={2}>
          {movies.map((movie) => (
            <ListItem key={movie.id}>
              <Link href={`/ratings?movieId=${movie.movie_id}`}>
                <a>{movie.title}</a>
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

Search.getLayout = (page) => {
  return (
    <Authenticated>
      <DefaultLayout>{page}</DefaultLayout>
    </Authenticated>
  );
};

export default Search;
