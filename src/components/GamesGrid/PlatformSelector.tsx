import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useFetchPlatforms from "../../hooks/useFetchPlatforms";

const PlatformSelector = () => {
  const { platforms, errors } = useFetchPlatforms();

  if (errors) return null;

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
