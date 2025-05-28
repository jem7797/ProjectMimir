import { Center, Icon, Image } from "@chakra-ui/react";
import { SiTheodinproject } from "react-icons/si";
import { useSignedIn } from "../../Components/Context/SignedInContext";

const MainProfilePicture = () => {
  const { signedInUser } = useSignedIn();
  return (
    <Center>
      {signedInUser && signedInUser[2] ? (
        <Image
        
          src={signedInUser[2]}
          boxSize={200}
          borderRadius="full"
          objectFit={"cover"}
        />
      ) : (
        <Icon boxSize={200}>
           <SiTheodinproject />
        </Icon>
      )}
      
    </Center>
  );
};

export default MainProfilePicture;
