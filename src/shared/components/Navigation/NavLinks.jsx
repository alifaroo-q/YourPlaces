import {
  ListItem,
  UnorderedList,
  Flex,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const NavLinks = ({ linkColor }) => {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <UnorderedList
      styleType={"none"}
      sx={{
        color: linkColor,
        "a.link-item.active": {
          backgroundColor: "yellow",
          padding: "8px",
          color: "black",
          border: "1px solid black",
        },
      }}
    >
      <Flex
        flexDirection={isSmallerThan800 ? "column" : "row"}
        gap={5}
        alignItems={"center"}
      >
        <ListItem>
          <NavLink
            className="link-item p-2 border-[1px] border-transparent hover:border-[1px] hover:border-black hover:bg-[yellow] hover:text-black transition-all duration-300"
            exact="true"
            to="/"
          >
            ALL USERS
          </NavLink>
        </ListItem>
        {isLoggedIn && (
          <ListItem>
            <NavLink
              className="link-item p-2 border-[1px] border-transparent hover:border-[1px] hover:border-black hover:bg-[yellow] hover:text-black transition-all duration-300"
              to="/u1/places"
            >
              MY PLACES
            </NavLink>
          </ListItem>
        )}
        {isLoggedIn && (
          <ListItem>
            <NavLink
              className="link-item p-2 border-[1px] border-transparent hover:border-[1px] hover:border-black hover:bg-[yellow] hover:text-black transition-all duration-300"
              to="/places/new"
            >
              ADD PLACE
            </NavLink>
          </ListItem>
        )}
        {!isLoggedIn && (
          <ListItem>
            <NavLink
              className="link-item p-2 border-[1px] border-transparent hover:border-[1px] hover:border-black hover:bg-[yellow] hover:text-black transition-all duration-300"
              to="/auth"
            >
              AUTHENTICATE
            </NavLink>
          </ListItem>
        )}
        {isLoggedIn && (
          <ListItem>
            <Button
              colorScheme="white"
              rounded={"none"}
              _hover={{ backgroundColor: "yellow", color: "black" }}
              variant={"outline"}
              onClick={logout}
            >
              LOGOUT
            </Button>
          </ListItem>
        )}
      </Flex>
    </UnorderedList>
  );
};

export default NavLinks;
