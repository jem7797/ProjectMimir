import { Box, IconButton } from "@chakra-ui/react";
import { useSettings } from "../Components/Context/SettingContext";
import { RiCloseLine } from "react-icons/ri";
import ColorModeSwitch from "./ColorModeSwitch";
import Draggable from 'react-draggable';
import "../Styles/SettingsMenu.css";

const SettingsMenu = () => {
  const { settingsIsOpen, setSettingsIsOpen } = useSettings();
  
  return (
    <>
      <Draggable>
        <Box className="settings-menu">
          <IconButton
            aria-label="Close settings"
            onClick={() => setSettingsIsOpen(!settingsIsOpen)}
            icon={<RiCloseLine />}
            className="close-button"
          />
          <Box className="color-mode-switch">
            <ColorModeSwitch />
          </Box>
        </Box>
      </Draggable>
    </>
  );
};

export default SettingsMenu;