import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ToggleTheme = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack alignItems={"center"}>
      <Switch
        isChecked={colorMode === "light"}
        onChange={toggleColorMode}
        colorScheme={"blue"}
      />
      <Text paddingRight=".5rem" whiteSpace={"nowrap"}>
        {colorMode.slice(0, 1).toUpperCase() + colorMode.slice(1) + " Mode"}
      </Text>
    </HStack>
  );
};

export default ToggleTheme;
