import { useParams } from "react-router-dom";
import useForm from "../../shared/hooks/useForm";
import Input from "../../shared/components/FormElements/Input";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import {
  Center,
  Card,
  CardBody,
  Text,
  Stack,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484445,
      lng: -73.9882393,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://images.unsplash.com/photo-1508094214466-708a7d21c5c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1161&q=80",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484445,
      lng: -73.9882393,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { placeId } = useParams();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const currentPlace = DUMMY_PLACES.find((place) => place.id === placeId);

  useEffect(() => {
    if (currentPlace) {
      setFormData(
        {
          title: {
            value: currentPlace.title,
            isValid: true,
          },
          description: {
            value: currentPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [currentPlace, setFormData]);

  const updatePlaceHandler = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  if (!currentPlace) {
    return (
      <Center py={5}>
        <Card>
          <CardBody>
            <Text fontSize={"lg"}>Could not find the place!</Text>
          </CardBody>
        </Card>
      </Center>
    );
  }

  if (isLoading) {
    return (
      <Center py={5}>
        <Card>
          <CardBody>
            <Text fontSize={"lg"}>Loading...</Text>
          </CardBody>
        </Card>
      </Center>
    );
  }

  return (
    <Stack py={5} alignItems={"center"} className="w-screen">
      <Stack
        as={"form"}
        spacing={5}
        paddingX={5}
        paddingY={8}
        bg={"white"}
        rounded={"lg"}
        onSubmit={updatePlaceHandler}
        shadow={"base"}
        width={{ lg: "2xl", md: "xl", sm: "md" }}
      >
        <Input
          id={"title"}
          element={"input"}
          type={"text"}
          label={"Title"}
          validators={[VALIDATOR_REQUIRE()]}
          errorText={"Please enter valid title"}
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValid={formState.inputs.title.isValid}
        />
        <Input
          id={"description"}
          element={"textarea"}
          label={"Description"}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText={"Please enter valid description (at least 5 characters)"}
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid}
        />
        <Flex justifyContent={"flex-start"}>
          <Button
            type="submit"
            isDisabled={!formState.isValid}
            colorScheme="red"
          >
            Update Place
          </Button>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default UpdatePlace;
