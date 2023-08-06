import { Button, Flex, Stack } from "@chakra-ui/react";
import Input from "../../shared/components/FormElements/Input";
import useForm from "../../shared/hooks/useForm";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <Stack py={5} alignItems={"center"} className="w-screen">
      <Stack
        onSubmit={placeSubmitHandler}
        spacing={5}
        paddingX={5}
        paddingY={8}
        as={"form"}
        bg={"white"}
        rounded={"lg"}
        shadow={"base"}
        width={{ lg: "2xl", md: "xl", sm: "md" }}
      >
        <Input
          id={"title"}
          type={"text"}
          element={"input"}
          onInput={inputHandler}
          label={"Title"}
          validators={[VALIDATOR_REQUIRE()]}
          errorText={"please enter a valid title"}
        />
        <Input
          id={"description"}
          element={"textarea"}
          onInput={inputHandler}
          label={"Description"}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText={"please enter a valid description (at least 5 characters)"}
        />
        <Input
          id={"address"}
          element={"input"}
          onInput={inputHandler}
          label={"Address"}
          validators={[VALIDATOR_REQUIRE()]}
          errorText={"please enter a valid address"}
        />
        <Flex justifyContent={"flex-start"}>
          <Button
            isDisabled={!formState.isValid}
            type="submit"
            colorScheme="red"
          >
            Add Place
          </Button>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default NewPlace;
