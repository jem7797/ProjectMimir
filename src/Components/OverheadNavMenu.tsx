import { Box, IconButton, Image, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import "../Styles/OverheadNavMenu.css";
import "..//Styles/fonts.css";
import { Link } from "react-router-dom";
import { useSignedIn } from "./Context/SignedInContext";

const OverheadNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode } = useColorMode();
  const { signedInUser } = useSignedIn();

  console.log(signedInUser[2]);

  const colors = colorMode === "light" ? "blue" : "white";

  return (
    <Box>
      {/* hamburger menu icon */}
      {!isOpen && (
        <IconButton
          aria-label={"hambuger menu"}
          icon={<GiHamburgerMenu />}
          onClick={() => setIsOpen(!isOpen)}
          bg={"transparent"}
          fontSize={"x-large"}
        />
      )}
      {isOpen && (
        <Box className="overhead-nav-menu">
          {/* Close Menu Icon */}
          <IconButton
            aria-label="close menu"
            icon={<RiCloseLine />}
            onClick={() => setIsOpen(false)}
            className="close-button"
          />
          {/* Items in top Menu */}
          <Box as="ul" className={"menu-items cinzel"} color={colors}>
            <Link to={"/"}>
            <IconButton
              aria-label={"Whats New"}
              icon={<IoIosNotifications />}
              variant={"ghost"}
              fontSize={"x-large"}
            />
            </Link>
          </Box>

          {/* footer of top menu */}

          <Box>
            <Box display={"flex"} justifyContent={"center"} marginBottom={3}>
              <Link to={"/profile"}>
                <IconButton
                  icon={
                    signedInUser && signedInUser[2] ? (
                      <Image
                        src={signedInUser[2]?.toString()}
                        borderRadius={"50%"}
                        height={"35"}
                      />
                    ) : (
                      <CgProfile />
                    )
                  }
                  aria-label={"profile"}
                  className="profile-button"
                />
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default OverheadNavMenu;
