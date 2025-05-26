import { Box, HStack } from "@chakra-ui/react";
import OverheadNavMenu from "./OverheadNavMenu";

const NavBar = () => {
  return (
    <Box position="fixed" top={0} width="100%" zIndex={1000}>
    <HStack >
      <OverheadNavMenu />
    </HStack>
    </Box>
  );
};

export default NavBar;
