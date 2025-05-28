import { Box, Button,  Spinner, Text, VStack } from "@chakra-ui/react";
import { signInWithPopup, signOut } from "firebase/auth";
import { useSignedIn } from "../../Components/Context/SignedInContext";
import { auth, provider } from "../../Configs/FirebaseConfig";
import { useState } from "react";

const ProfileInfo = () => {
  const { signedInUser, setSignedInUser } = useSignedIn();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setSignedInUser([user.displayName, user.email, user.photoURL]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      setSignedInUser([null, null, null]);
      signOut;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box marginLeft={"-16"}>
      {isLoading ? (
        <Spinner />
      ) : (
        <Box textAlign={"center"}>
          <VStack>
          {signedInUser[0] && signedInUser[1] ? (
            <>
              <Text marginTop={"5"} fontSize={"lg"}>
                Name:  {signedInUser[0]}
              </Text>
              <Text marginTop={"5"} fontSize={"lg"}>
                Email:  {signedInUser[1]}
              </Text>
              <Button
                marginTop={"10"}
                color={"red.400"}
                onClick={handleSignOut}
              >
                Sign Out
              </Button>{" "}
            </>
          ) : (
            <>
              <Button color={"blue.500"} onClick={handleGoogleSignIn}>
                Sign In
              </Button>
            </>
          )}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default ProfileInfo;
