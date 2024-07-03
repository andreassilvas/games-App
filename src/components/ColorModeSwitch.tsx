import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  let textColor = colorMode === "dark" ? "Light Mode" : "Dark Mode";
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text>{textColor}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
