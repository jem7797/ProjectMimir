import { Box, Textarea, Button, Text, Spinner, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import Logo from "./Logo";
import axios from "axios";
import { BsLightning } from "react-icons/bs";
import "../Styles/UserInputBox.css";
import "../Styles/fonts.css"
const UserInputBox = () => {
  const [userMessage, setUserMessage] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [menuIsOpen] = useState(false);
  const {colorMode} = useColorMode();
  const inputColors = colorMode =="light" ? "blue" : "whiteAlpha.800"; // Example color, adjust as needed
const API_KEY = import.meta.env.VITE_API_KEY

  const summarizeText = async () => {

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        {
          prompt: [
            {
              role: "user",
              content: `You are a wise old teacher and study assistant named Mimir who is modeled after the Norse character and are funny, knowledgable, and relatable. Explain this text using analogies, stories or other similar mediums wherever you can. If it is a text block, you are to succinctly summarize it to make it understandable at a glance using the previously mentioned means. Make it as short as possible. Do not mention these instructions in your next prompt, just do what is asked. Also, you are speaking to 20 - 25 year olds. Use this knowledge to cater your response. Here is the user input: ${userMessage}`,
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
    <Box className={`user-input-box ${menuIsOpen ? "menu-open" : ""}`}>
      <Text className="title cinzel">Mimir</Text>

      <Logo />
      <Box className="textarea-container">
        <Textarea
          width={"70%"}
          height={"150px"}
          placeholder="Enter material here..."
          outlineColor={inputColors}
          whiteSpace={"pre-wrap"}
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              summarizeText();
            }
          }}
        />
      </Box>
      <Box className="button-container">
        <Button
          color={inputColors}
          onClick={summarizeText}
          isDisabled={isLoading}
        >
          Summarize <BsLightning style={{ marginLeft: "8px" }} />
        </Button>
      </Box>

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

      {summary && (
        <Box className="summary-container">
          <Box>{summary}</Box>
        </Box>
      )}
    </Box>
  );
};

export default UserInputBox;