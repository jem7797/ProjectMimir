import SettingsCogSpinner from "./Settings Components/SettingsCogSpinner";
import "../Styles/SettingsCogSpinner.css"
import OverheadNavMenu from "../Components/OverheadNavMenu";
import { Box } from "@chakra-ui/react";
import Slider from "./Settings Components/Slider";


const Settings = () => {

  return (
    <>
 <Box position={"absolute"}>
    <OverheadNavMenu/>
    </Box>
    <Box  textAlign={"center"}>
      <SettingsCogSpinner  />

    
      <Slider sliderName={"Summary "}/>
     <Slider sliderName={"Answer "}/>

      </Box>
    </>
  );
};

export default Settings;
