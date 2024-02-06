import { useEffect, useState } from "react";
import { Box, Flex, HStack, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { BsList, BsX } from "react-icons/bs";

const NAV_LINK_ITEMS = [
  { name: "Home", link: "#home" },
  { name: "The Wedding", link: "#wedding" },
  { name: "Gallery", link: "#gallery" },
  { name: "Rsvp", link: "#rsvp" },
];

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!scrolling) {
      setScrolling(true);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
        {menuOpen ? (
          <Box
            display={{ base: "block", xl: "none" }}
            onClick={closeMenu}
            zIndex={102}
          >
            <BsX size={20} />
          </Box>
        ) : (
          <Box display={{ base: "block", xl: "none" }} onClick={toggleMenu}>
            <BsList size={20} />
          </Box>
        )}
        <Stack
          display={{
            base: menuOpen ? "flex" : "none",
            xl: "flex",
          }}
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgColor="#7A7A7A"
          color="#fff"
          zIndex={101} // Set z-index for the menu
          p={5}
          spacing={5}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          overflowY="auto"
          transition="transform 0.3s ease"
          transform={menuOpen ? "translateY(0)" : "translateY(-100vh)"}
        >
          {NAV_LINK_ITEMS.map((obj, idx) => (
            <Link key={idx} href={obj.link} onClick={closeMenu}>
              {obj.name}
            </Link>
          ))}
        </Stack>
        <HStack
          gap={5}
          fontFamily={"body"}
          display={{ base: "none", xl: "flex" }}
        >
          {NAV_LINK_ITEMS.map((obj, idx) => (
            <Link key={idx} href={obj.link}>
              {obj.name}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Stack>
  );
};

export default Header;
