import {  Flex, IconButton} from "@chakra-ui/react";
import MainProfilePicture from "./Profile Components/MainProfilePicture";
import ProfileInfo from "./Profile Components/ProfileInfo";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";


const ProfileContent = () => {
  return (
    <Flex height="100vh">
      {/* Sidebar */}

      <Link to={"/"}>
        <IconButton
          aria-label={"back button"}
          icon={<IoMdArrowRoundBack />}
          variant={"ghost"}
          fontSize={"xx-large"}
          marginTop={"5px"}
          marginLeft={"5px"}
          overflow={"hidden"}
        />
      </Link>

      {/* Main Content */}
      <Flex
        flex="1"
        direction="column"
        justify="center"
        marginTop={"-320px"}
        marginLeft={"-50"}
      >
        {/* Profile Picture */}
        <MainProfilePicture />

        {/* Profile Info */}
        <ProfileInfo />
      </Flex>
    </Flex>
  );
};
export default ProfileContent;
