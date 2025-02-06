import { Box, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";

const LeftSideHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box overflow={"hidden"}>
      {!isOpen && (
        <IconButton
          aria-label={"hambuger menu"}
          icon={<GiHamburgerMenu />}
          onClick={() => setIsOpen(!isOpen)}
          zIndex="1000"
          bg={"transparent"}
          fontSize={"x-large"}
        />
      )}

      {isOpen && (
        <Box
          width={"180px"}
          height={"100vh"}
          alignContent={"start"}
          backgroundColor={"lightgrey"}
          borderRadius={3}
          position={"absolute"}
          display={"flex"}
          flexDirection={"column"}
        >
          <IconButton
            aria-label="close menu"
            icon={<RiCloseLine />}
            onClick={() => setIsOpen(false)}
            position="absolute"
            right="-2.5rem"
            bg={"transparent"}
            fontSize={"x-large"}
          />
          <Box
            as="ul"
            flexDirection={"column"}
            gap={4}
            p={4}
            display={"flex"}
            fontSize={"x-large"}
            listStyleType={"none"}
          >
            <li>Flash Cards</li>
            <li>Mimir Lore</li>
            <li>About Us</li>
          </Box>

          <Box as="footer" mt={"auto"} p={4} bottom={0} marginLeft={-4}>
            <IconButton
              icon={<CiSettings />}
              aria-label={""}
              bg={"transparent"}
              fontSize={"xx-large"}
            ></IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default LeftSideHamburgerMenu;
