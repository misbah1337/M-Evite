import { Grid, GridItem, Stack } from "@chakra-ui/react";

const GalleryTwoPhotos = () => {
  return (
    <Stack h={{ base: "50vh", xl: "100vh" }}>
      <Grid
        h={"full"}
        templateRows={"repeat(2, 1fr)"}
        templateColumns={"repeat(6, 1fr)"}
      >
        <GridItem colSpan={3} bg="white" />
        <GridItem colSpan={3} bg="gray" />
        <GridItem rowSpan={1} colSpan={6} bg="#ADADAD" />
      </Grid>
    </Stack>
  );
};

export default GalleryTwoPhotos;
