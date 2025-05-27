import { Box } from "@chakra-ui/react";
import "../../Styles/SettingsCogSpinner.css"
import { IoSettingsOutline } from "react-icons/io5";

const SettingsCogSpinner = () => {
  return (
    <Box fontSize={"9xl"} marginTop={5}>
      <IoSettingsOutline className="cogOne"/>
    </Box>
  );
};

export default SettingsCogSpinner;
