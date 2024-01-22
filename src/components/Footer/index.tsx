import { HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Stack bgColor={"#ABA99C"} h={"30vh"} color={"white"}>
      <VStack margin={"auto"} gap={5}>
        <Text>M-Evite</Text>
        <Text>Copyright &copy; 2024. All right reserved.</Text>
        <HStack>
          <FaInstagram size={20} fill="white" />
          <FaWhatsapp size={20} fill="white" />
        </HStack>
      </VStack>
    </Stack>
  );
};

export default Footer;
