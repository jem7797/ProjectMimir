import {  Center, Icon, Image } from "@chakra-ui/react";
import { SiTheodinproject } from "react-icons/si";
import { useSignedIn } from "../../Components/Context/SignedInContext";

const MainProfilePicture = () => {
  const {signedInUser} = useSignedIn();
  return (
    <Center>
      <Icon boxSize={200}>
        {signedInUser && signedInUser[2] ? <Image src={signedInUser[2]} boxSize={200} borderRadius="full" /> : <SiTheodinproject />}
        
      </Icon>
    </Center>
  );
};

export default MainProfilePicture;
