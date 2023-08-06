import ReactDOM from "react-dom";

import { Box, Stack, Text } from "@chakra-ui/react";
import Backdrop from "../UIElements/Backdrop";
import { CSSTransition } from "react-transition-group";

const ModalOverlay = ({
  className,
  headerClass,
  headerText,
  onSubmit,
  contentClass,
  footerContent,
  footerClass,
  children,
}) => {
  const content = (
    <Stack
      className={`${className} z-[100] fixed top-[15vh] left-[10%] w-4/5 bg-white shadow-lg rounded-lg`}
    >
      <Box
        as={"header"}
        className={`${headerClass} w-full font-semibold p-3 bg-[#2a006e] text-white`}
      >
        <Text as={"h2"} fontSize={"xl"} margin={3}>
          {headerText}
        </Text>
      </Box>
      <form onSubmit={onSubmit ? onSubmit : (e) => e.preventDefault()}>
        <Box className={`${contentClass} p-3`}>{children}</Box>
        <Box as={"footer"} className={`${footerClass} p-3`}>
          {footerContent}
        </Box>
      </form>
    </Stack>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  const { show, onCancel } = props;

  return (
    <>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames={"modal"}
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
