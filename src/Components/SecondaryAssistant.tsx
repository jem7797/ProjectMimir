import React, { useRef, useState } from "react";
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
import { useSlider } from "./Context/SliderContext";

interface SideAssistantProps {
  userInput: string;
}

const SideAssistant: React.FC<SideAssistantProps> = ({ userInput }) => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const { sliderValue } = useSlider();
  const [isLoading, setIsLoading] = useState(false);
  const { colorMode } = useColorMode();
  const inputColors = colorMode === "dark" ? "white" : "blue";
  const questionCounter = useRef(0);
  const askQuestion = async () => {
    if (!question.trim() || questionCounter.current >= 3) return;

    setIsLoading(true);
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://getaianswertoquestion-uah4h66gpq-uc.a.run.app",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: question,
            originalUserInput: userInput,
            lengthValue: sliderValue,
          }),
        }
      );
      const data = await response.json();
      setResponse(data.answer);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      questionCounter.current += 1;
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
          isDisabled={question.length <= 2 || questionCounter.current >= 3}
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
