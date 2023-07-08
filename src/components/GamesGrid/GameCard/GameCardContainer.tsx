import { Box } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box overflow={"hidden"} maxWidth={"350px"} borderRadius={10}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
