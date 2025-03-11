import { Box, Button, Flex, Spacer } from "@chakra-ui/react";

const ProfileInfo = () => {
  return (
    <Flex justify={"center"} align={"center"} marginTop={"50px"}>
      <Box>
        <p style={{ fontSize: "large" }}>
          Name: <Spacer /> Jordan Molina{" "}
          <Button background={"Inactive"}>Edit</Button>
        </p>
        <p style={{ marginTop: "30px", fontSize: "large" }}>
          Username: <Spacer /> Blaster7797{" "}
          <Button background={"Inactive"}>Edit</Button>
        </p>
        <Button marginTop={"50px"} >
          Save Changes
        </Button>
      </Box>
    </Flex>
  );
};

export default ProfileInfo;
