import {
  Button,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const Gift = () => {
  return (
    <Stack h={{ base: "60vh", xl: "50vh" }} bgColor={"#EEECE6"}>
      <Divider
        borderColor={"black"}
        w={{ base: "90%", xl: "20%" }}
        margin={"auto"}
      />
      <VStack margin={"auto"} marginTop={{ base: -15, xl: -5 }}>
        <Heading fontWeight={400}>Send Gift</Heading>
        <Text
          fontFamily={"Times new roman"}
          fontStyle={"italic"}
          textTransform={"lowercase"}
        >
          for groom and bride
        </Text>
        <Text>Thank you for your gift</Text>
        <VStack mt={50}>
          <Image
            src="https://cdn.koendang.com/storage/icons/banks/bri.webp"
            alt=""
            w={100}
          />
          <Text whiteSpace={"pre-wrap"} textAlign={"center"} mt={3}>
            Raka Gumilang {"\n"}
            4047239841
          </Text>
          <Button
            rounded={"none"}
            border={"1px solid gray"}
            bgColor={"transparent"}
            textTransform={"uppercase"}
            _hover={{
              backgroundColor: "#E1DFD9",
            }}
          >
            Copy number
          </Button>
        </VStack>
      </VStack>
    </Stack>
  );
};

export default Gift;
