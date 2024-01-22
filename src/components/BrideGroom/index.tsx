"use client";

import {
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

const BrideGroom = () => {
  return (
    <Stack
      h={{ base: "min-content", xl: "100vh" }}
      bgColor={"#EEECE6"}
      color={"#000"}
      px={{ base: 5, xl: 100 }}
      py={{ base: 100, xl: 0 }}
    >
      <Flex
        direction={{ base: "column", xl: "row" }}
        h={"full"}
        w={"full"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={{ base: 100, xl: 10 }}
      >
        <VStack w={{ base: "100%", xl: "500px" }} textAlign={"center"} gap={7}>
          <Text fontSize={{ base: "md", xl: "xl" }}>The Groom</Text>
          <Divider borderColor={"black"} size={"2px"} />
          <Box
            w={{ base: 200, xl: 250 }}
            h={{ base: 250, xl: 350 }}
            bgColor={"white"}
            rounded={"xl"}
          >
            <Image src="" alt="" />
          </Box>
          <VStack gap={3}>
            <Heading fontWeight={400}>raka gumilang</Heading>
            <Text
              fontSize={"xl"}
              fontFamily={"Times new roman"}
              textTransform={"lowercase"}
              fontStyle={"italic"}
            >
              The son of
            </Text>
            <Text whiteSpace={"pre-wrap"} fontSize={{ base: "md", xl: "xl" }}>
              Mr. reka agus toro {"\n"}
              Mrs. Lily susi asmoro
            </Text>
          </VStack>
        </VStack>

        <VStack w={{ base: "100%", xl: "500px" }} textAlign={"center"} gap={7}>
          <Text fontSize={{ base: "md", xl: "xl" }}>The Bride</Text>
          <Divider borderColor={"black"} />
          <Box
            w={{ base: 200, xl: 250 }}
            h={{ base: 250, xl: 350 }}
            bgColor={"white"}
            rounded={"xl"}
          >
            <Image src="" alt="" />
          </Box>
          <VStack gap={3}>
            <Heading fontWeight={400}>vina sriayuni</Heading>
            <Text
              fontSize={"xl"}
              fontFamily={"Times new roman"}
              textTransform={"lowercase"}
              fontStyle={"italic"}
            >
              The daughter of
            </Text>
            <Text whiteSpace={"pre-wrap"} fontSize={{ base: "md", xl: "xl" }}>
              Mr. reka agus toro {"\n"}
              Mrs. Lily susi asmoro
            </Text>
          </VStack>
        </VStack>
      </Flex>
    </Stack>
  );
};

export default BrideGroom;
