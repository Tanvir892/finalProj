import { useState } from "react";
import {
  Box,
  Text,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

const RatingForm = ({ onSubmit, previousRating }) => {
  const [rating, setRating] = useState(previousRating || 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ rating: rating });
  };

  return (
    <Box mt="4">
      <Text mb="2">Rating</Text>
      <form onSubmit={handleSubmit}>
        <Box d="flex" alignItems="center">
          <Slider
            aria-label="slider-ex-2"
            colorScheme="pink"
            min={1}
            max={5}
            step={1}
            value={rating}
            isDisabled={previousRating !== null}
            onChange={(value) => setRating(value)}
          >
            <SliderMark value={1}>1</SliderMark>
            <SliderMark value={2}>2</SliderMark>
            <SliderMark value={3}>3</SliderMark>
            <SliderMark value={4}>4</SliderMark>
            <SliderMark value={5}>5</SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        <Button mt="4" type="submit" disabled={previousRating !== null}>
          Submit Rating
        </Button>
      </form>
    </Box>
  );
};

export default RatingForm;
