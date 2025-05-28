import {
  Box,
  HStack,
  IconButton,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";

interface Props {
  sliderName: string;
}

const SummarySlider = (sliderName: Props) => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignContent={"center"}
        mt={40}
      >
        <HStack margin={"auto"}>
          <Text fontSize={"large"} alignContent={"flex-start"}>
            {" "}
            Set {sliderName.sliderName} Length:{" "}
            <Tooltip label="Controls Mimir’s response length: lower = shorter, higher = longer">
              <IconButton
                aria-label={"Info"}
                icon={<FaRegCircleQuestion />}
                variant={"ghost"}
              />
            </Tooltip>
          </Text>
        </HStack>
      </Box>
      <Slider
        width={"60%"}
        marginTop={"10"}
        variant={"solid"}
        onChange={(val) => setSliderValue(val)}
        step={10}
        min={10}
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
