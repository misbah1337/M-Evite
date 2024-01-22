import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

type ModalOpeningProps = {
  isOpen: any;
  onClose: any;
};

const ModalOpening = ({ isOpen, onClose }: ModalOpeningProps) => {
  return (
    <>
      <Modal size={"lg"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Wedding Invitation</ModalHeader>
          <ModalBody fontSize={"md"} textAlign={"center"}>
            <Box
              w={200}
              h={280}
              bgColor={"#EEECE6"}
              m={"auto"}
              mb={5}
              rounded={"lg"}
              overflow={"hidden"}
            >
              <Image src="" alt="" objectFit={"cover"} />
            </Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            exercitationem.
          </ModalBody>

          <ModalFooter>
            <Button
              rounded={"none"}
              colorScheme="gray"
              bgColor={"#ABA99C"}
              mr={3}
              onClick={onClose}
              m={"auto"}
              textTransform={"uppercase"}
              color={"white"}
              outline={"none"}
              border={"transparent"}
              _hover={{
                backgroundColor: "#ABA99C",
              }}
            >
              Open Invitation
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalOpening;
