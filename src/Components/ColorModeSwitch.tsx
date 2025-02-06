import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack mr={4}>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        alignItems={"end"}
        pl={1}
      ></Switch>
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
