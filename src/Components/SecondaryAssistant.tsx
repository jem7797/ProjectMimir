import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Textarea,
  Text,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";
import { IoIosSend } from "react-icons/io";
import "../Styles/SecondaryAssistant.css";

interface SideAssistantProps {
  userInput: string;
}

const SideAssistant: React.FC<SideAssistantProps> = ({ userInput }) => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { colorMode } = useColorMode();
  const inputColors = colorMode === "dark" ? "white" : "blue";

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = "https://api.openai.com/v1/chat/completions";

  const askQuestion = async () => {
    if (!question.trim()) return; // Prevent empty requests

    setIsLoading(true);
    try {
      const result = await axios.post(
        API_URL,
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Based on this: "${userInput}", answer this: "${question}"
             `,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      setResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("Oops! Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box className="side-assistant">

      <Box className="textarea-container">
        <Textarea
          placeholder="Ask about the text..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          outlineColor={inputColors}
        />
      </Box>
      <Box className="button-container">
        <Button
          onClick={askQuestion}
          isDisabled={isLoading}
          rightIcon={<IoIosSend />}
        >
          Ask
        </Button>
      </Box>
      {isLoading && (
        <Box className="loading-spinner">
          <Spinner size="lg" color={inputColors} />
        </Box>
      )}
      {response && (
        <Box className="response-container">
          <Text
            width={"70%"}
            p={4}
            bg={"gray.100"}
            borderRadius={"10"}
            color={"white.200"}
            backgroundColor={"blue.400"}
          >
            {response}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default SideAssistant;
