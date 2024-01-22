"use client";

import { Heading, Stack, Text, VStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Stack h={"100vh"} bgColor={"#ADADAD"} color={"#FFF"}>
      <VStack h={"full"} alignItems={"center"} justifyContent={"center"}>
        <Text fontSize={"2xl"}>The Wedding of</Text>
        <Heading fontSize={"7xl"} fontWeight={400}>
          Raka
        </Heading>
        <Heading
          fontStyle={"italic"}
          fontFamily={"Times new roman"}
          textTransform={"lowercase"}
        >
          and
        </Heading>
        <Heading fontSize={"7xl"} fontWeight={400}>
          Vina
        </Heading>
        <Text fontSize={"2xl"}>18 Januari 2024</Text>
      </VStack>
    </Stack>
  );
};

export default Hero;
