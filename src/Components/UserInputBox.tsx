import {
  Box,
  Textarea,
  Button,
  Text,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import Logo from "./Logo";
import { BsLightning } from "react-icons/bs";
import "../Styles/UserInputBox.css";
import "../Styles/fonts.css";
import SecondaryAssistant from "./SecondaryAssistant";
import { useSlider } from "./Context/SliderContext";

const UserInputBox = () => {
  const [userMessage, setUserMessage] = useState("");
  const [summary, setSummary] = useState("");
const {sliderValue} = useSlider();
  const [isLoading, setIsLoading] = useState(false);
  const [menuIsOpen] = useState(false);
  const { colorMode } = useColorMode();
  const promptCounter = useRef(0);

  const inputColors = colorMode == "light" ? "blue" : "whiteAlpha.800";

  const summarizeText = async () => {
    if (promptCounter.current >= 3) return;
    setIsLoading(true);
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://getairesponse-uah4h66gpq-uc.a.run.app",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage, lengthValue: sliderValue }),
        }
      );
      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      promptCounter.current += 1;
    }
  };

  return (
    /* Title box */

    <Box className={`user-input-box ${menuIsOpen ? "menu-open" : ""}`}>
      <Text className="title cinzel">Mimir</Text>

      <Logo />

      {promptCounter.current == 3 ? (
        <Box marginBottom={5} marginTop={5}>
          <Text
            color={"red"}
            textAlign={"center"}
            fontSize={"2xl"}
            className="cinzel"
          >
            Free limit reached. Upgrade in your profile to contine.
          </Text>
        </Box>
      ) : (
        ""
      )}
      {/* main text box */}
      <Box className="textarea-container">
        <Textarea
          width={"70%"}
          height={"150px"}
          placeholder="Enter material here..."
          outlineColor={inputColors}
          whiteSpace={"pre-wrap"}
          value={userMessage}
          onChange={(e) => {
            setUserMessage(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              summarizeText();
            }
          }}
        />
      </Box>
      {/* button */}
      <Box className="button-container">
        {/* summarize button*/}
        <Button
          color={inputColors}
          onClick={summarizeText}
          isDisabled={userMessage.length <= 2 || promptCounter.current == 3}
        >
          Summarize <BsLightning style={{ marginLeft: "8px" }} />
        </Button>
      </Box>
      {/**loading spinner */}
      {isLoading && (
        <Box className="loading-spinner">
          <Spinner
            size={"xl"}
            color="blue"
            position={"fixed"}
            transform="translate(-50%, -50%)"
          />
        </Box>
      )}
      {/** ai response box */}
      {summary && (
        <Box>
          <Box className="summary-container">
            <Text
              width={"70%"}
              p={4}
              bg={"gray.100"}
              borderRadius={"10"}
              color={"white.200"}
              backgroundColor={"blue.400"}
            >
              {summary}
            </Text>
          </Box>

          <SecondaryAssistant userInput={userMessage}  />
        </Box>
      )}
    </Box>
  );
};

export default UserInputBox;
