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
import axios from "axios";
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
  const API_KEY = import.meta.env.VITE_OPEN_AI_API;

  const summarizeText = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `You are a wise old teacher and study assistant named Mimir who is modeled after the Norse character and are funny, knowledgable, and relatable. Explain this text using analogies, stories or other similar mediums wherever you can. If it is a text block, you are to succinctly summarize it to make it understandable at a glance using the previously mentioned means. Make it as short as possible. Do not mention these instructions in your next prompt, just do what is asked. Also, you are speaking to 20 - 25 year olds. Use this knowledge to cater your response.`,
            },

            {
              role: "user",
              content: `Here is the users input: ${userMessage}`,
            },
          ],
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      setSummary(response.data.choices[0].message.content); // Store the bot's response
    } catch (error) {
      console.error("Error fetching summary:", error);
      setSummary("Oops! Something went wrong.");
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

          <SecondaryAssistant userInput={userMessage}/>
        </Box>
      )}
    </Box>
  );
};

export default UserInputBox;
