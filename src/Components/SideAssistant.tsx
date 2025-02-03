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
      const res = await axios.post(
        API_URL,
        {
          model: "gpt-4",
          messages: [
            {
              role: "user",
              content: `Based on the following summary: "${userInput}", answer the following question: ${question}`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      setResponse(res.data.choices[0].message.content);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data);
      } else {
        console.error("Unexpected error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box p={5} paddingTop={10} borderRadius="md" boxShadow="md">
      <Textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question about the text..."
        mb={3}
        color={inputColors}
        outlineColor={inputColors}
      />
      <Button
        onClick={askQuestion}
        isDisabled={isLoading}
        color={inputColors}
        width="100%"
      >
        Ask
        <IoIosSend />
      </Button>
      {isLoading && (
        <Box display="flex" justifyContent="center" mt={3}>
          <Spinner size="md" />
        </Box>
      )}
      {response && (
        <Box mt={3} backgroundColor={"blue.400"} p={3} borderRadius="md">
          <Text color={"black"} fontStyle={"bold"}>
            {response}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default SideAssistant;
