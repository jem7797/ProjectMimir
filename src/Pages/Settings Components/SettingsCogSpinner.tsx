import { Box } from "@chakra-ui/react";
import "../../Styles/SettingsCogSpinner.css"
import { IoSettingsOutline } from "react-icons/io5";

const SettingsCogSpinner = () => {
  return (
    <Box fontSize={"8xl"} marginTop={5} margin={"auto"}>
      <IoSettingsOutline className="cogOne"/>
    </Box>
  );
};

export default SettingsCogSpinner;
