import { ListItem, UnorderedList, Flex, useMediaQuery } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ linkColor }) => {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

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
      >
        <ListItem>
          <NavLink
            className="link-item p-2 border-[1px] border-transparent hover:border-[1px] hover:border-black hover:bg-[yellow] hover:text-black transition-all duration-300"
            exact
            to="/"
          >
            ALL USERS
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            className="link-item p-2 border-[1px] border-transparent hover:border-[1px] hover:border-black hover:bg-[yellow] hover:text-black transition-all duration-300"
            to="/u1/places"
          >
            MY PLACES
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            className="link-item p-2 border-[1px] border-transparent hover:border-[1px] hover:border-black hover:bg-[yellow] hover:text-black transition-all duration-300"
            to="/places/new"
          >
            ADD PLACE
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            className="link-item p-2 border-[1px] border-transparent hover:border-[1px] hover:border-black hover:bg-[yellow] hover:text-black transition-all duration-300"
            to="/auth"
          >
            AUTHENTICATE
          </NavLink>
        </ListItem>
      </Flex>
    </UnorderedList>
  );
};

export default NavLinks;
