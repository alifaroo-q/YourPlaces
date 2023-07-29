import { useState } from "react";
import { Link } from "react-router-dom";
import { Flex, HStack, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = () => {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {isDrawerOpen && <Backdrop onClick={closeDrawer} />}
      {isSmallerThan800 && (
        <SideDrawer onClick={closeDrawer} show={isDrawerOpen}>
          <NavLinks linkColor={"black"} />
        </SideDrawer>
      )}
      <MainHeader>
        <Flex
          padding={"3"}
          boxShadow={"md"}
          bgColor={"#ef233c"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <HStack spacing={3}>
            {isSmallerThan800 ? (
              <HamburgerIcon
                onClick={openDrawer}
                cursor={"pointer"}
                boxSize={"8"}
              />
            ) : null}
            <Link to="/">
              <Text
                color={"white"}
                fontSize={"4xl"}
                fontWeight={"bold"}
                as={"h1"}
              >
                YourPlaces
              </Text>
            </Link>
          </HStack>
          {!isSmallerThan800 && (
            <Flex as={"nav"}>
              <NavLinks linkColor={"white"} />
            </Flex>
          )}
        </Flex>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
