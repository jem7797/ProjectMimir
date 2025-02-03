import { Box, Image, useColorMode } from "@chakra-ui/react";
import lightModeMimir from "../assets/lightModeMimir.png";
import darkModeMimir from "../assets/darkModeMimir.png";

const Logo = () => {
  const { colorMode } = useColorMode();

  return (
    <Box justifyContent={"center"} display={"flex"}>
      {colorMode == "light" ? (
        <Image src={lightModeMimir} boxSize={"190px"} />
      ) : (
        <Image src={darkModeMimir} boxSize={"190px"} />
      )}
    </Box>
  );
};

export default Logo;
