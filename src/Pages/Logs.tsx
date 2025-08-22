import OverheadNavMenu from "../Components/OverheadNavMenu";
import { Box, Text, VStack, Icon, Flex, useColorMode } from "@chakra-ui/react";
import { useSignedIn } from "../Components/Context/SignedInContext";
import { FaBook, FaSignInAlt, FaHistory } from "react-icons/fa";

const Logs = () => {
  const { signedInUser } = useSignedIn();
  const { colorMode } = useColorMode();
  const isSignedIn = signedInUser && signedInUser[0];
  
  const textColor = colorMode === "light" ? "gray.800" : "white";
  const subTextColor = colorMode === "light" ? "gray.600" : "gray.300";

  return (
    <>
      <Box position={"absolute"}>
        <OverheadNavMenu/>
      </Box>
      <Box 
        position="absolute" 
        top="100px" 
        left="50%" 
        transform="translateX(-50%)" 
        textAlign="center"
        minW="300px"
      >
        {isSignedIn ? (
          <VStack spacing={6}>
            <Box
              p={6}
              borderRadius="xl"
              bg="rgba(255, 255, 255, 0.05)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.1)"
              _hover={{ transform: "translateY(-2px)", transition: "all 0.3s ease" }}
            >
              <Icon as={FaHistory} boxSize={8} color="blue.300" mb={3} />
              <Text fontSize="2xl" fontWeight="bold" color={textColor} mb={2}>
                Chat Logs
              </Text>
              <Text color={subTextColor} fontSize="md">
                Your chat history will appear here
              </Text>
            </Box>
          </VStack>
        ) : (
          <VStack spacing={6}>
            <Box
              p={6}
              borderRadius="xl"
              bg="rgba(255, 255, 255, 0.05)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.1)"
              _hover={{ transform: "translateY(-2px)", transition: "all 0.3s ease" }}
            >
              <Icon as={FaSignInAlt} boxSize={8} color="orange.300" mb={3} />
              <Text fontSize="2xl" fontWeight="bold" color={textColor} mb={2}>
                Sign In Required
              </Text>
              <Text color={subTextColor} fontSize="md" maxW="280px">
                Please sign in if you would like your chats saved and accessible here
              </Text>
            </Box>
          </VStack>
        )}
      </Box>
    </>
  );
};

export default Logs;


