import { Karla } from "next/font/google";
import localFont from "next/font/local";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

const Fino = localFont({
  weight: "400",
  src: "../assets/fonts/Fino.otf",
  display: "swap",
});

const typography = {
  fonts: {
    body: karla.style.fontFamily,
    heading: Fino.style.fontFamily,
  },
  textStyle: {
    body: {
      fontFamily: karla.style.fontFamily,
    },
  },
};

export { typography };
