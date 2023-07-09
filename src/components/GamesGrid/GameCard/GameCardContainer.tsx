import { Box } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      overflow={"hidden"}
      maxWidth={"350px"}
      borderRadius={10}
      boxShadow={`0 0 10px ${
        colorMode === "light" ? "lightgray" : "transparent"
      }`}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
