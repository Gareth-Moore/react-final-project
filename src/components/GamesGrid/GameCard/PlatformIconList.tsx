import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/Md";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../../types/interfaces";
import { HStack, Text } from "@chakra-ui/layout";
import { IconType } from "react-icons";
import { Icon, keyframes } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  //               [key: string] this is called an 'index signature' to get a key without knowing it's name
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation1: FaPlaystation,
    playstation2: FaPlaystation,
    playstation3: FaPlaystation,
    playstation4: FaPlaystation,
    playstation5: FaPlaystation,
    ["xbox-one"]: FaXbox,
    ["xbox-series-x"]: FaXbox,
    xbox360: FaXbox,
    ["xbox-old"]: FaXbox,
    ["nintendo-switch"]: SiNintendo,
    ["nintendo-3ds"]: SiNintendo,
    ["nintendo-ds"]: SiNintendo,
    ["nintendo-dsi"]: SiNintendo,
    ["nintendo-64"]: SiNintendo,
    macos: FaApple,
    macintosh: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack py={2} wrap={"wrap"}>
      {platforms.map((platform) => (
        <Icon
          key={platform.slug}
          as={iconMap[platform.slug]}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
