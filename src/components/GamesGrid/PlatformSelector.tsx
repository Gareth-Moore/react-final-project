import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import useFetchPlatforms from "../../hooks/useFetchPlatforms";

const PlatformSelector = () => {
  const { platforms, isLoading, errors } = useFetchPlatforms();
  return (
    <Flex justifyContent={{ base: "center", lg: "start" }} mb={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platform
        </MenuButton>
        <MenuList>
          {platforms &&
            platforms.map((value) => (
              <MenuItem key={value.id}>{value.name}</MenuItem>
            ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default PlatformSelector;
