import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const WeddingDetails = () => {
  return (
    <Stack
      h={{ base: "min-content", xl: "70vh" }}
      bgColor={"#EEECE6"}
      px={{ base: 5, xl: 100 }}
    >
      <VStack w={"full"} h={"full"} gap={5}>
        <Text fontSize={{ base: "md", xl: "xl" }}>The Wedding</Text>
        <Divider
          borderColor={"black"}
          w={{ base: "100%", xl: "80%" }}
          mx={"auto"}
        />
        <Flex
          direction={{ base: "column", xl: "row" }}
          w={"full"}
          h={"full"}
          justifyContent={"center"}
          gap={10}
          mt={{ base: 5, xl: 20 }}
          mb={{ base: 20, xl: 0 }}
        >
          <Box w={{ base: "100%", xl: 400 }}>
            <VStack gap={2}>
              <Image
                src="https://cdn.koendang.com/storage/images/ferdianita/holimat.webp  "
                alt=""
                w={250}
              />
              <Heading fontWeight={400}>Akad</Heading>
              <Text
                fontFamily={"Times new roman"}
                fontStyle={"italic"}
                textTransform={"lowercase"}
                fontSize={{ base: "md", xl: "xl" }}
              >
                KUA Kebonjeruk
              </Text>
              <Text
                whiteSpace={"pre-wrap"}
                textAlign={"center"}
                fontSize={{ base: "md", xl: "xl" }}
              >
                Saturday, 08 July 2023 {"\n"}at 12 pm
              </Text>
            </VStack>
          </Box>
          <Box w={{ base: "100%", xl: 400 }}>
            <VStack gap={2}>
              <Image
                src="https://koendang.com/assets/images/reception-icon.template6.webp"
                alt=""
                w={250}
              />
              <Heading fontWeight={400} mt={4} textAlign={"center"}>
                Wedding Reception
              </Heading>
              <Text
                fontFamily={"Times new roman"}
                fontStyle={"italic"}
                textTransform={"lowercase"}
                fontSize={{ base: "md", xl: "xl" }}
              >
                KUA Kebonjeruk
              </Text>
              <Text
                whiteSpace={"pre-wrap"}
                textAlign={"center"}
                fontSize={{ base: "md", xl: "xl" }}
              >
                Saturday, 08 July 2023 {"\n"}at 12 pm
              </Text>
            </VStack>
          </Box>
        </Flex>
      </VStack>
    </Stack>
  );
};

export default WeddingDetails;
