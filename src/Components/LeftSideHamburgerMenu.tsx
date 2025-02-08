import { Box, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { useSettings } from "../Components/Context/SettingContext";

const LeftSideHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { settingsIsOpen, setSettingsIsOpen } = useSettings();

  const handleSettingsClick = () => {
    setSettingsIsOpen(!settingsIsOpen);
  };

  return (
    <Box>
      {/* hamburger menu icon */}
      {!isOpen && (
        <IconButton
          aria-label={"hambuger menu"}
          icon={<GiHamburgerMenu />}
          onClick={() => setIsOpen(!isOpen)}
          bg={"transparent"}
          fontSize={"x-large"}
        />
      )}
      {isOpen && (
        <Box
          width={"100%"}
          height={"50px"}
          alignContent={"start"}
          backgroundColor={"whiteAlpha.200"}
          borderRadius={3}
          position={"fixed"}
          top={0}
          left={0}
          display={"flex"}
          flexDirection={"row"}
        >
          {/* Close Menu Icon */}
          <IconButton
            aria-label="close menu"
            icon={<RiCloseLine />}
            onClick={() => setIsOpen(false)}
            bg={"transparent"}
            fontSize={"x-large"}
            alignSelf={"flex-end"}
            margin={2}
          />
          {/* Items in top Menu */}
          <Box
            as="ul"
            display={"flex"}
            flexDirection={"row"}
            width={"100%"}
            fontSize={"x-large"}
            listStyleType={"none"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            padding={4}
          >
            <li>Flash Cards</li>
            <li>Mimir Lore</li>
            <li>About Me</li>
          </Box>

          {/* footer of top menu */}
          <Box display={"flex"} justifyContent={"center"} marginBottom={3} margin={5}>
            <IconButton
              onClick={handleSettingsClick}
              icon={<CiSettings />}
              aria-label={"settings"}
              bg={"transparent"}
              fontSize={"xx-large"}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default LeftSideHamburgerMenu;