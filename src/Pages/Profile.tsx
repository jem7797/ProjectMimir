import { Box, IconButton } from "@chakra-ui/react";
import MainProfilePicture from "./Profile Components/MainProfilePicture";
import ProfileInfo from "./Profile Components/ProfileInfo";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ProfileContent = () => {
  return (
    <Box >
{/* back button */}
      <Link to={"/"} >
        <IconButton
          aria-label={"back button"}
          icon={<IoMdArrowRoundBack />}
          variant={"ghost"}
          fontSize={"xx-large"}
          marginTop={"5px"}
          marginLeft={"5px"}
          height={"20px"}
          overflow={"hidden"}
        />
      </Link>

      {/* Main Content */}
      <Box flex="1" justifyContent={"center"} alignContent={""}>
        {/* Profile Picture */}
        <MainProfilePicture />

        {/* Profile Info */}
        <ProfileInfo />
      </Box>
    </Box>
  );
};
export default ProfileContent;
