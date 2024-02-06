import { Box, Flex, Stack, Text } from "@chakra-ui/react";

const ShareBanner = () => {
  return (
    <Stack h={"350px"} bgColor={"#ABA99C"} color={"#FFF"}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url('https://i.ibb.co/qNSQwWQ/1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "50% 90%",
        }}
      >
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
      </div>
    </Stack>
  );
};

export default ShareBanner;
