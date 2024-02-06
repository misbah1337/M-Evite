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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Rsvp = () => {
  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const toast = useToast();
  const attendance = watch("attendance");

  const onSubmit = () => {
    // Lakukan proses RSVP di sini

    // Menampilkan pesan toast
    toast({
      title: "RSVP Sent",
      description: "Your RSVP has been successfully sent.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Mengosongkan nilai input form
    reset();
  };

  // Set default value to "I'll be there" when component mounts
  useEffect(() => {
    setValue("attendance", "I'll be there");
  }, [setValue]);

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
        onSubmit={handleSubmit(onSubmit)}
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
              placeholder="Type your full name"
              textTransform={"uppercase"}
              {...register("fullName", { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Phone number</FormLabel>
            <Input
              type="number"
              placeholder="Type your phone number"
              textTransform={"uppercase"}
              {...register("phoneNumber", { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Confirmation of attendance</FormLabel>
            <Flex gap={5}>
              <Button
                flex={1}
                rounded={"none"}
                border={"1px solid gray"}
                bgColor={
                  attendance === "I'll be there" ? "#E1DFD9" : "transparent"
                }
                textTransform={"uppercase"}
                onClick={() => setValue("attendance", "I'll be there")}
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
                bgColor={
                  attendance === "Can't come" ? "#E1DFD9" : "transparent"
                }
                textTransform={"uppercase"}
                onClick={() => setValue("attendance", "Can't come")}
                _hover={{
                  backgroundColor: "#E1DFD9",
                }}
              >
                Can`t come
              </Button>
            </Flex>
          </FormControl>
          {attendance === "I'll be there" && (
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
          )}
          <Button
            type="submit"
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
