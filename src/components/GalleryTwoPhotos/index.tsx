import { Grid, GridItem, Image, Stack } from "@chakra-ui/react";

const GalleryTwoPhotos = () => {
  return (
    <Stack h={{ base: "50vh", xl: "100vh" }}>
      <Grid
        h={"full"}
        templateRows={"repeat(2, 1fr)"}
        templateColumns={"repeat(6, 1fr)"}
      >
        <GridItem colSpan={3} bg="white" overflow={"hidden"}>
          <Image
            src="https://i.ibb.co/fqX4S7q/7.jpg"
            alt=""
            width={"100%"}
            height={"100%"}
            objectFit={"cover"}
          />
        </GridItem>
        <GridItem colSpan={3} bg="gray" overflow={"hidden"}>
          <Image
            src="https://i.ibb.co/7WndRF1/3.jpg"
            alt=""
            width={"100%"}
            height={"100%"}
            objectFit={"cover"}
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={6} bg="#ADADAD" overflow={"hidden"}>
          <Image
            src="https://i.ibb.co/qNSQwWQ/1.jpg"
            alt=""
            width={"100%"}
            height={"100%"}
            objectFit={"cover"}
            objectPosition={"50% 100%"}
          />
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default GalleryTwoPhotos;
