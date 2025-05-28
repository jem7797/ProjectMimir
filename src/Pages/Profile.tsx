import { Box, VStack } from "@chakra-ui/react";
import MainProfilePicture from "./Profile Components/MainProfilePicture";
import ProfileInfo from "./Profile Components/ProfileInfo";

import OverheadNavMenu from "../Components/OverheadNavMenu";

const ProfileContent = () => {
  return (
    <>
{/* back button */}
<Box position={"fixed"} top={0} width={"100%"} zIndex={10} >
   <OverheadNavMenu/>
</Box>
      {/* Main Content */}
      
      <VStack marginTop={"30"}  align={"center"}>
        {/* Profile Picture */}
        <MainProfilePicture />

        {/* Profile Info */}
        <ProfileInfo />
      </VStack>
    </>
  );
};
export default ProfileContent;
