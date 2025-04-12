import { Box, Flex } from "@chakra-ui/react";
import MainProfilePicture from "./Profile Components/MainProfilePicture";
import ProfileInfo from "./Profile Components/ProfileInfo";
import SideMenu from "./Profile Components/SideMenu";
import { SettingsProvider } from "../Components/Context/SettingContext";

const ProfilePage = () => {
  return (
    <SettingsProvider>
  {ProfileContent()}
  </SettingsProvider>
  );
  
};
const ProfileContent = () => {

  return (
    <Flex height="100vh" overflow="hidden">
      {/* Sidebar */}
      <Box width="50px" height="100vh">
        <SideMenu />
      </Box>

      {/* Main Content */}
      <Flex flex="1" direction="column" align="center" justify="center" marginTop={"-320px"} marginLeft={"-50"}>
        {/* Profile Picture */}
        <MainProfilePicture />

        {/* Profile Info */}
        <ProfileInfo />
      </Flex>
    </Flex>
  );
};
export default ProfilePage;
