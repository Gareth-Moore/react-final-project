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
import { Platform, GameQuery } from "../../types/interfaces";

interface Props {
  updateSelectedPlatform: (platform: Platform) => void;
  gameQuery: GameQuery;
}

const PlatformSelector = ({ updateSelectedPlatform, gameQuery }: Props) => {
  const { platforms, errors } = useFetchPlatforms();

  if (errors) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {gameQuery.platform ? gameQuery.platform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => updateSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
