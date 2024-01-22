import { Box, Divider, Flex, Image, Stack } from "@chakra-ui/react";

const GalleryOnePhoto = () => {
  return (
    <Stack
      h={{ base: "1300px", xl: "100vh" }}
      bgColor={"#EEECE6"}
      position={"relative"}
    >
      <Divider
        borderColor={"black"}
        w={{ base: "100%", xl: "80%" }}
        mx={"auto"}
        mb={32}
      />
      <Flex h={"full"} px={{ base: 5, xl: 100 }} direction={"column"}>
        <Flex
          direction={{ base: "column", xl: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack position={"relative"}>
            <Box
              h={{ base: 250, xl: 350 }}
              w={{ base: 200, xl: 250 }}
              bgColor={"white"}
              position={"absolute"}
              zIndex={10}
              left={{ base: -130, xl: 0 }}
            >
              <Image src="" alt="" />
            </Box>
            <Box
              h={{ base: 200, xl: 300 }}
              w={{ base: 200, xl: 300 }}
              bgColor={"#C9BDAC"}
              position={"absolute"}
              top={{ base: "-40px", xl: "-60px" }}
              left={{ base: "-170px", xl: "-60px" }}
            />
          </Stack>

          <Stack position={"relative"}>
            <Box
              h={{ base: 250, xl: 350 }}
              w={{ base: 200, xl: 250 }}
              bgColor={"white"}
              top={{ base: "400px", xl: "70px" }}
              position={"absolute"}
              zIndex={10}
              left={{ base: "-50px", xl: "-150px" }}
            >
              <Image src="" alt="" />
            </Box>
            <Box
              h={{ base: 300, xl: 450 }}
              w={{ base: 150, xl: 250 }}
              bgColor={"#909675"}
              position={"absolute"}
              top={{ base: "375px", xl: "20px" }}
              right={{ base: "-180px", xl: "-150px" }}
            />
          </Stack>

          <Stack position={"relative"}>
            <Box
              h={{ base: 200, xl: 300 }}
              w={{ base: 250, xl: 350 }}
              bgColor={"white"}
              top={{ base: "800px", xl: "250px" }}
              position={"absolute"}
              zIndex={10}
              right={{ base: "-90px", xl: "0" }}
            >
              <Image src="" alt="" />
            </Box>
            <Box
              h={{ base: 200, xl: 300 }}
              w={{ base: 200, xl: 300 }}
              bgColor={"#8C5B40"}
              position={"absolute"}
              top={{ base: "770px", xl: "200px" }}
              right={{ base: "-10px", xl: "-50px" }}
            />
          </Stack>
          <Stack position={"absolute"} left={"-20px"} top={"30px"} zIndex={11}>
            <Image
              src="https://koendang.com/assets/images/flower-left.template6.webp"
              alt=""
            />
          </Stack>
          <Stack
            position={"absolute"}
            right={"-10px"}
            bottom={"-30px"}
            zIndex={11}
          >
            <Image
              src="https://koendang.com/assets/images/flower-right.template6.webp"
              alt=""
            />
          </Stack>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default GalleryOnePhoto;
