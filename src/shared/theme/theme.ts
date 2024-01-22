"use client";

import { extendTheme } from "@chakra-ui/react";
import { typography } from "./typografy";

export const theme = extendTheme({
  ...typography,
});
