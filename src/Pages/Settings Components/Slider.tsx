import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  sliderName: string;
}

const SummarySlider = (sliderName: Props) => {
  const [sliderValue, setSliderValue] = useState(50);
  return (
    <Box marginTop={"40"}>
      <Text fontSize={"large"} alignContent={"flex-start"}>
        {" "}
        {sliderName.sliderName} Response Length:{" "}
      </Text>
      <Slider
        width={"60%"}
        marginTop={"10"}
        variant={"solid"}
        onChange={(val) => setSliderValue(val)}
      >
        <SliderTrack backgroundColor={"darkgrey"}>
          <SliderFilledTrack />
        </SliderTrack>

        <SliderMark
          value={sliderValue}
          textAlign={"center"}
          color={"white"}
          bg={"blue.800"}
          m={"-35px 0 0 -50px"}
          width={"5%"}
        >
          {sliderValue}
        </SliderMark>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export default SummarySlider;
