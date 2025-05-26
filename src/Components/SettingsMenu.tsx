import { Box, IconButton, Slider } from "@chakra-ui/react";
import { useSettings } from "../Components/Context/SettingContext";
import { RiCloseLine } from "react-icons/ri";
import ColorModeSwitch from "./ColorModeSwitch";

import "../Styles/SettingsMenu.css";

const SettingsMenu = () => {
  const { settingsIsOpen, setSettingsIsOpen } = useSettings();

  return (
    <>
      <Box>
        <Box className="settings-menu">
          <IconButton
            fontSize={"x-large"}
            aria-label="Close settings"
            onClick={() => setSettingsIsOpen(!settingsIsOpen)}
            icon={<RiCloseLine />}
            className="close-button"
          />
          <Slider color={"red"}></Slider>
        </Box>
      </Box>
    </>
  );
};

export default SettingsMenu;
