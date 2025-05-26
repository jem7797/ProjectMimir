import {
  Box,
  IconButton,
  Image,
  Slide,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

import "../Styles/OverheadNavMenu.css";
import "..//Styles/fonts.css";
import { Link } from "react-router-dom";
import { useSignedIn } from "./Context/SignedInContext";

const OverheadNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { signedInUser } = useSignedIn();

  console.log(signedInUser[2]);

  const colors = colorMode === "light" ? "blue" : "white";

  return (
    <Box overflow={"hidden"}>
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

      <Slide
        direction="top"
        in={isOpen}
        style={{ zIndex: 10, position: "relative" }}
        unmountOnExit
      >
        <Box overflow={"hidden"}>
          <VStack alignItems="start">
            {/* Close Menu Icon */}
            <IconButton
              aria-label="close menu"
              icon={<RiCloseLine />}
              fontSize={"x-large"}
              variant={"ghost"}
              onClick={() => setIsOpen(false)}
              className="close-button"
            />
            {/* Items in top Menu */}

            {/* Profile Button */}
            <Box className="menu-items">
              <Box display={"flex"} justifyContent={"center"} marginBottom={3}>
                <Link to={"/profile"}>
                  <IconButton
                    fontSize={"x-large"}
                    variant={"ghost"}
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

            {/* whats new button */}
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

            {/* Color Mode Switch */}
            <Box
              className="menu-items cinzel"
              color={colors}
              overflow={"hidden"}
            >
              <IconButton
                aria-label={"Color Mode Switch"}
                variant={"ghost"}
                fontSize={"x-large"}
                marginTop={"10px"}
                icon={
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={colorMode}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {colorMode === "light" ? <GoSun /> : <IoMoonOutline />}
                    </motion.div>
                  </AnimatePresence>
                }
                onClick={toggleColorMode}
              />
            </Box>
          </VStack>
        </Box>
      </Slide>
    </Box>
  );
};

export default OverheadNavMenu;
