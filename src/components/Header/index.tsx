import { useEffect, useState } from "react";
import { Box, Flex, HStack, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { BsList } from "react-icons/bs";

const NAV_LINK_ITEMS = ["Home", "The Wedding", "Gallery", "Rsvp"];

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Stack
      className={scrolling ? "colored-header" : "transparent-header"}
      h={{ base: "60px", xl: "80px" }}
      w={"full"}
      px={{ base: 5, xl: 100 }}
      bgColor={scrolling ? "#7A7A7A" : "transparent"}
      color={"#fff"}
      position={"fixed"}
      zIndex={100}
      transition="background-color 0.5s ease-in-out"
    >
      <Flex h={"full"} alignItems={"center"} justifyContent={"space-between"}>
        <Heading fontSize={"xl"}></Heading>
        <Box display={{ base: "block", xl: "none" }}>
          <BsList size={20} />
        </Box>
        <HStack
          gap={5}
          fontFamily={"body"}
          display={{ base: "none", xl: "flex" }}
        >
          {NAV_LINK_ITEMS.map((_, idx) => (
            <Link key={idx} href={""}>
              {NAV_LINK_ITEMS[idx]}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Stack>
  );
};

export default Header;
