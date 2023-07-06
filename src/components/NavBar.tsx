import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ToggleTheme from "./NavBar/ToggleTheme";

const NavBar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      width={{ lg: "900px" }}
      marginInline={"auto"}
    >
      <Image src={logo} boxSize="60px" />
      <Text>Navigation Bar</Text>
      <Show above="sm">
        <ToggleTheme />
      </Show>
    </HStack>
  );
};

export default NavBar;
