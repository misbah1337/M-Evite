import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const Rsvp = () => {
  return (
    <Stack bgColor={"#EEECE6"}>
      <Flex
        direction={"column"}
        h={200}
        bgColor={"#C9BDAC"}
        mt={20}
        justifyContent={"center"}
        px={{ base: 5, xl: 100 }}
        position={"relative"}
      >
        <Heading fontWeight={400} fontSize={"5xl"}>
          RSVP
        </Heading>
        <Text fontSize={{ base: "sm", xl: "md" }} whiteSpace={"pre-wrap"}>
          Please RSVP if you are available to witness our {"\n"}special day
        </Text>
        <Image
          src="https://koendang.com/assets/images/rose.template6.webp"
          alt=""
          w={250}
          position={"absolute"}
          right={0}
        />
      </Flex>

      <form
        onSubmit={() => {}}
        style={{
          width: "350px",
          margin: "auto",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <VStack gap={10}>
          <FormControl>
            <FormLabel>Full name</FormLabel>
            <Input
              type="text"
              placeholder="type your full name"
              textTransform={"uppercase"}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Phone number</FormLabel>
            <Input
              type="number"
              placeholder="type your phone number"
              textTransform={"uppercase"}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Confirmation of attendance</FormLabel>
            <Flex gap={5}>
              <Button
                flex={1}
                rounded={"none"}
                border={"1px solid gray"}
                bgColor={"transparent"}
                textTransform={"uppercase"}
                _hover={{
                  backgroundColor: "#E1DFD9",
                }}
              >
                I`ll be there
              </Button>
              <Button
                flex={1}
                rounded={"none"}
                border={"1px solid gray"}
                bgColor={"transparent"}
                textTransform={"uppercase"}
                _hover={{
                  backgroundColor: "#E1DFD9",
                }}
              >
                Can`t come
              </Button>
            </Flex>
          </FormControl>
          <FormControl>
            <FormLabel>Number of pax</FormLabel>
            <Flex gap={5}>
              <Button
                flex={1}
                rounded={"none"}
                border={"1px solid gray"}
                bgColor={"transparent"}
                textTransform={"uppercase"}
                _hover={{
                  backgroundColor: "#E1DFD9",
                }}
              >
                1 pax
              </Button>
              <Button
                flex={1}
                rounded={"none"}
                border={"1px solid gray"}
                bgColor={"transparent"}
                textTransform={"uppercase"}
                _hover={{
                  backgroundColor: "#E1DFD9",
                }}
              >
                2 pax
              </Button>
            </Flex>
          </FormControl>
          <Button
            rounded={"none"}
            border={"1px solid gray"}
            bgColor={"transparent"}
            _hover={{
              backgroundColor: "#E1DFD9",
            }}
          >
            RSVP
          </Button>
        </VStack>
      </form>
    </Stack>
  );
};

export default Rsvp;
