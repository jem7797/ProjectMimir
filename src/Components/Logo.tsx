import { Box, Image, useColorMode } from "@chakra-ui/react";
import lightModeMimir from "../assets/lightModeMimir.png";
import cleaned_darkModeMimir from "../assets/cleaned_darkModeMimir.png"
const Logo = () => {
  const { colorMode } = useColorMode();

  return (
    <Box justifyContent={"center"} display={"flex"}>
      {colorMode == "light" ? (
        <Image src={lightModeMimir} boxSize={"190px"} />
      ) : (
        <Image src={cleaned_darkModeMimir} boxSize={"190px"} />
      )}
    </Box>
  );
};

export default Logo;
