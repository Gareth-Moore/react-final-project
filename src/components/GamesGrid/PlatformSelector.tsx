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
import { Platform } from "../../types/interfaces";

interface Props {
  updateSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({
  updateSelectedPlatform,
  selectedPlatform,
}: Props) => {
  const { platforms, errors } = useFetchPlatforms();

  if (errors) return null;

  return (
    <Flex justifyContent={{ base: "center", lg: "start" }} mb={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform ? selectedPlatform.name : "Platforms"}
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => {
            return (
              <MenuItem
                key={platform.id}
                onClick={() => updateSelectedPlatform(platform)}
              >
                {platform.name}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default PlatformSelector;
