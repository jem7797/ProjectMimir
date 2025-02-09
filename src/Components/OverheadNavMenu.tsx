import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { useSettings } from "../Components/Context/SettingContext";
import "../Styles/OverheadNavMenu.css";
import "..//Styles/fonts.css"

const OverheadNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { settingsIsOpen, setSettingsIsOpen } = useSettings();
  const { colorMode } = useColorMode();

  const handleSettingsClick = () => {
    setSettingsIsOpen(!settingsIsOpen);
  };

  const colors = colorMode === "light" ? "blue" : "white";

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
        <Box className="overhead-nav-menu">
          {/* Close Menu Icon */}
          <IconButton
            aria-label="close menu"
            icon={<RiCloseLine />}
            onClick={() => setIsOpen(false)}
            className="close-button"
          />
          {/* Items in top Menu */}
          <Box as="ul" className={"menu-items cinzel" } color={colors}>
            <li >Coming Soon</li>
            
          </Box>

          {/* footer of top menu */}
          <Box display={"flex"} justifyContent={"center"} marginBottom={3}>
            <IconButton
              onClick={handleSettingsClick}
              icon={<CiSettings />}
              aria-label={"settings"}
              className="settings-button"
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default OverheadNavMenu;