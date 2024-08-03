import {
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaWindows,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import { IconType } from "react-icons";

interface PlatformIconnListProps {
  platforms: Platform[];
}

const PlatformIconnList = ({ platforms }: PlatformIconnListProps) => {
  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    pc: FaWindows,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.500"
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconnList;
