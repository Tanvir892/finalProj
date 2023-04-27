import React from "react";
import { Center, Heading, Stack } from "@chakra-ui/react";

interface HomePageProps {}

export const HomePageContent: React.FC<HomePageProps> = () => {
  return (
    <Center>
      <Stack>
        <Heading>Welcome</Heading>
      </Stack>
    </Center>
  );
};
