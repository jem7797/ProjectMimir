import axios from "axios";
import {
  Box,
  Button,
  Textarea,
  useColorMode,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsLightning } from "react-icons/bs";
import SideAssistant from "./SideAssistant";
import Logo from "./Logo";
import "../Styles/fonts.css";

const UserInputBox = () => {
  const [userMessage, setUserMessage] = useState("");
  const [summary, setSummary] = useState(""); // Stores Mimir's response
  const [isLoading, setIsLoading] = useState(false);
  const { colorMode } = useColorMode();
  const inputColors = colorMode === "dark" ? "white" : "blue";

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = "https://api.openai.com/v1/chat/completions";

  const summarizeText = async () => {
    if (!userMessage.trim()) return; // Prevent empty requests

    setIsLoading(true);

    try {
      const response = await axios.post(
        API_URL,
        {
          model: "gpt-4",
          messages: [
            {
              role: "user",
              content: `You are a wise old teacher and study assistant named Mimir who is modeled after the Norse character and are funny, knowledgable, and relatable. Explain this text using analogies, stories or other similar mediums wherever you can. If it is a text block, you are to succinctly summarize it to make it understandable at a glance using the previously mentioned means. Make it as short as possible. Do not mention these intstructions in your next prompt, just do what is asked. Also, you are speaking to 20 - 25 year olds. Use this knowledge to cater your respone. Here is the user input: ${userMessage}`,
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
    <Box marginTop={10}>
      <Text
        textAlign={"center"}
        marginLeft={-4}
        className="cinzel"
        fontSize={"xx-large"}
      >
        Mimir
      </Text>

      <Logo />
      <Box display={"flex"} justifyContent={"center"}>
        <Textarea
          width={"70%"}
          height={"150px"}
          placeholder="Enter material here..."
          outlineColor={inputColors}
          whiteSpace={"pre-wrap"}
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter" && !e.shiftKey) {
              e.preventDefault();
              summarizeText();
            }
          }}
        />
      </Box>
      <Box display={"flex"} justifyContent={"center"} paddingTop={6}>
        <Button
          color={inputColors}
          onClick={summarizeText}
          isDisabled={isLoading}
        >
          Summarize <BsLightning style={{ marginLeft: "8px" }} />
        </Button>
      </Box>

      {isLoading && (
        <Box justifyContent={"center"} display={"flex"} marginTop={5}>
          <Spinner
            size={"xl"}
            color="blue"
            position={"fixed"}
            transform="translate(-50%, -50%)"
          />
        </Box>
      )}

      {summary && (
        <Box>
          <Box display={"flex"} justifyContent={"center"} p={4}>
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
          <SideAssistant userInput={userMessage} />
        </Box>
      )}
    </Box>
  );
};

export default UserInputBox;
