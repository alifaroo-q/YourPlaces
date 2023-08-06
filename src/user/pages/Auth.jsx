import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Input from "../../shared/components/FormElements/Input";
import useForm from "../../shared/hooks/useForm";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useContext, useState } from "react";
import { AuthContext } from "../../shared/context/authContext";

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const { login } = useContext(AuthContext);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authHandler = (e) => {
    e.preventDefault();
    login();
    console.log(formState);
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <Stack py={10} alignItems={"center"} className="w-screen">
      <Card>
        <CardHeader pb={0}>
          <Stack spacing={3}>
            <Text
              as={"h2"}
              fontSize={"3xl"}
              color={"blackAlpha.800"}
              fontWeight={"semibold"}
              textAlign={"center"}
            >
              Login Required
            </Text>
            <StackDivider
              width={"sm"}
              marginX={"auto"}
              height={"1px"}
              grad
              bgColor={"lightgray"}
            />
          </Stack>
        </CardHeader>
        <CardBody pb={0}>
          <Stack
            onSubmit={authHandler}
            spacing={5}
            paddingX={5}
            paddingY={4}
            as={"form"}
            bg={"white"}
            rounded={"lg"}
            width={{ lg: "2xl", md: "xl", sm: "md" }}
          >
            {!isLoginMode && (
              <Input
                id={"name"}
                type={"text"}
                element={"input"}
                onInput={inputHandler}
                label={"You Name"}
                validators={[VALIDATOR_REQUIRE()]}
                errorText={"please enter a valid name"}
              />
            )}
            <Input
              id={"email"}
              type={"email"}
              element={"input"}
              onInput={inputHandler}
              label={"Email"}
              validators={[VALIDATOR_EMAIL()]}
              errorText={"please enter a valid email address"}
            />
            <Input
              id={"password"}
              type="password"
              element={"input"}
              onInput={inputHandler}
              label={"Password"}
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText={
                "please enter a valid password (at least 5 characters)"
              }
            />
            <Flex justifyContent={"center"}>
              <Button
                isDisabled={!formState.isValid}
                type="submit"
                size={"lg"}
                colorScheme="red"
              >
                {isLoginMode ? "LOGIN" : "SIGNUP"}
              </Button>
            </Flex>
          </Stack>
        </CardBody>
        <CardFooter pt={1} justifyContent={"center"}>
          <Button
            onClick={switchModeHandler}
            colorScheme="red"
            variant={"outline"}
            size={"lg"}
          >
            SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
          </Button>
        </CardFooter>
      </Card>
    </Stack>
  );
};

export default Auth;
