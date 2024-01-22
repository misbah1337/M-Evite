import { Box, Flex, Stack, Text } from "@chakra-ui/react";

const ShareBanner = () => {
  return (
    <Stack h={"350px"} bgColor={"#ABA99C"}>
      <Flex
        h={"full"}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text fontSize={"xl"}>#VINAandRAKA</Text>
        <Text
          fontFamily={"Times new roman"}
          fontStyle={"italic"}
          textTransform={"lowercase"}
        >
          share the day on instagram
        </Text>
      </Flex>
    </Stack>
  );
};

export default ShareBanner;
