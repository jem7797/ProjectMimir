import {
  Box,
  Textarea,
  Button,
  Text,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import Logo from "./Logo";
import { BsLightning } from "react-icons/bs";
import "../Styles/UserInputBox.css";
import "../Styles/fonts.css";
import SecondaryAssistant from "./SecondaryAssistant";

const UserInputBox = () => {
  const [userMessage, setUserMessage] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [menuIsOpen] = useState(false);
  const { colorMode } = useColorMode();

  const inputColors = colorMode == "light" ? "blue" : "whiteAlpha.800";

  const summarizeText = async () => {
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
          body: JSON.stringify({ message: userMessage }),
        }
      );
      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    /* Title box */

    <Box className={`user-input-box ${menuIsOpen ? "menu-open" : ""}`}>
      <Text className="title cinzel">Mimir</Text>

      <Logo />
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
          isDisabled={userMessage.length <= 2}
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

          <SecondaryAssistant userInput={userMessage} />
        </Box>
      )}
    </Box>
  );
};

export default UserInputBox;
