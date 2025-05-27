import { Box, IconButton,  Slider } from "@chakra-ui/react";
import { useSettings } from "../Components/Context/SettingContext";
import { RiCloseLine } from "react-icons/ri";

import "../Styles/SettingsMenu.css";

const SettingsMenu = () => {
  const { settingsIsOpen, setSettingsIsOpen } = useSettings();

  return (
    <>
      <Box className="settings-menu">
        <Box >
          <IconButton
            fontSize={"x-large"}
            aria-label="Close settings"
            onClick={() => setSettingsIsOpen(!settingsIsOpen)}
            icon={<RiCloseLine />}
            className="close-button"
          />
          <Box>
<Slider size="lg" min={0} max={100} defaultValue={50} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SettingsMenu;
