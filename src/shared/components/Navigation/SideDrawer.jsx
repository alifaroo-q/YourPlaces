import { Flex } from "@chakra-ui/react";
import { CSSTransition } from "react-transition-group";

import ReactDOM from "react-dom";

const SideDrawer = ({ children, show, onClick }) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames={"slide-in-left"}
      mountOnEnter
      unmountOnExit
    >
      <Flex
        as="aside"
        onClick={onClick}
        className="fixed h-screen bg-white text-black z-50 w-2/4 top-0 left-0"
      >
        <Flex className="flex flex-col justify-center items-center w-full">
          {children}
        </Flex>
      </Flex>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
