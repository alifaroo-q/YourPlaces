import {
  FormControl,
  FormLabel,
  Input as InputChakra,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { useEffect, useReducer } from "react";
import { validate } from "../../util/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.payload,
        isValid: validate(action.payload, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const Input = ({
  id,
  initialValue,
  initialValid,
  onInput,
  type,
  rows,
  placeholder,
  label,
  element,
  errorText,
  validators,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    isValid: initialValid || false,
    isTouched: false,
    value: initialValue || "",
  });

  console.log(inputState);

  const changeHandler = (e) => {
    dispatch({ type: "CHANGE", payload: e.target.value, validators });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  useEffect(() => {
    onInput(id, inputState.value, inputState.isValid);
  }, [id, inputState.value, inputState.isValid, onInput]);

  const inputElement =
    element === "input" ? (
      <FormControl
        isInvalid={!inputState.isValid && inputState.isTouched}
        bg={!inputState.isValid && inputState.isTouched && "red.100"}
      >
        <InputChakra
          display={"block"}
          id={id}
          type={type}
          value={inputState.value}
          onChange={changeHandler}
          onBlur={touchHandler}
          placeholder={placeholder}
        />
      </FormControl>
    ) : (
      <FormControl
        isInvalid={!inputState.isValid && inputState.isTouched}
        bg={!inputState.isValid && inputState.isTouched && "red.100"}
      >
        <Textarea
          display={"block"}
          id={id}
          value={inputState.value}
          onBlur={touchHandler}
          onChange={changeHandler}
          rows={rows || 3}
        />
      </FormControl>
    );

  return (
    <Stack width={"full"}>
      <FormLabel
        color={!inputState.isValid && inputState.isTouched && "red"}
        fontWeight={"bold"}
        fontSize={"lg"}
        display={"block"}
        htmlFor={id}
      >
        {label}
      </FormLabel>
      {inputElement}
      {!inputState.isValid && inputState.isTouched && (
        <Text color={"red"} as={"p"}>
          {errorText}
        </Text>
      )}
    </Stack>
  );
};

export default Input;
