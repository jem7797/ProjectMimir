import { Box, IconButton } from "@chakra-ui/react";
import Draggable from "react-draggable";
import { useSettings } from "./Context/SettingContext";
import { RiCloseLine } from "react-icons/ri";
import ColorModeSwitch from "./ColorModeSwitch";

const SettingsMenu = () => {
  const { settingsIsOpen, setSettingsIsOpen } = useSettings();
  
  return (
    <>
      <Draggable>
        <Box
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="250px"
          height="150px"
          bg="grey"
          opacity={"95%"}
          boxShadow="lg"
          p={4}
          borderRadius="10"
          zIndex="1000"
        >
          <IconButton
            aria-label={""}
            onClick={() => setSettingsIsOpen(!settingsIsOpen)}
            icon={<RiCloseLine />}
            bg={"transparent"}
          />
<Box display={"flex"} justifyContent={"flex-end"} marginTop={-8} marginRight={-1}>
        <ColorModeSwitch/>
        </Box>
        </Box>
      </Draggable>
    </>
  );
};

export default SettingsMenu;
