import React from "react";

import { ChakraProvider } from "@chakra-ui/react"

import customTheme from "../../styles/theme"

const ThemeContainer: React.FC = ({ children }) => (
  <ChakraProvider resetCSS theme={customTheme}>
    {children}
  </ChakraProvider>
);

export default ThemeContainer;