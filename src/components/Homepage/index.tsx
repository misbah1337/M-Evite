"use client";

import Header from "@/components/Header";
import Hero from "../Hero";
import BrideGroom from "../BrideGroom";
import ShareBanner from "../ShareBanner";
import GalleryOnePhoto from "../GalleryOnePhotos";
import WeddingDetails from "../WeddingDetails";
import GalleryTwoPhotos from "../GalleryTwoPhotos";
import Rsvp from "../Rsvp";
import Gift from "../Gift";
import Footer from "../Footer";
import ModalOpening from "../Modal";
import { useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";

const HomePageComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, []);

  return (
    <>
      <ModalOpening isOpen={isOpen} onClose={onClose} />
      <Header />
      <section id="home">
        <Hero />
      </section>
      {/* <ShareBanner /> */}
      <section>
        <BrideGroom />
      </section>
      <section>
        <GalleryOnePhoto />
      </section>
      <section id="wedding">
        <WeddingDetails />
      </section>
      <section id="gallery">
        <GalleryTwoPhotos />
      </section>
      <section id="rsvp">
        <Rsvp />
      </section>
      <section>
        <Gift />
      </section>
      <Footer />
    </>
  );
};

export default HomePageComponent;
