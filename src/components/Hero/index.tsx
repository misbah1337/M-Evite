"use client";

import { Heading, Stack, Text, VStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Stack h={"100vh"} bgColor={"#ADADAD"} color={"#FFF"}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url('https://i.ibb.co/7WndRF1/3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "70% 100%",
        }}
      >
        <VStack
          h={"full"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={20}
        >
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
      </div>
    </Stack>
  );
};

export default Hero;
