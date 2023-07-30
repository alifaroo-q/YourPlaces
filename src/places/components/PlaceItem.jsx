import {
  Box,
  ListItem,
  VStack,
  Stack,
  Image,
  Heading,
  Text,
  Card,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  StackDivider,
} from "@chakra-ui/react";

import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";

const PlaceItem = ({
  id,
  image,
  title,
  description,
  address,
  coordinates,
  creatorId,
}) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => {
    setShowMap(true);
  };

  const closeMapHandler = () => {
    setShowMap(false);
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        headerText={address}
        contentClass={"p-0"}
        footerClass={"text-right"}
        footerContent={
          <Button colorScheme="red" onClick={closeMapHandler}>
            CLOSE
          </Button>
        }
      >
        <Map center={coordinates} zoom={16} />
      </Modal>
      <ListItem maxWidth={"3xl"}>
        <Card>
          <VStack>
            <Box>
              <Image src={image} alt={title}></Image>
            </Box>
            <CardBody>
              <Stack textAlign={"center"}>
                <Heading as={"h2"}>{title}</Heading>
                <Text fontSize={"2xl"} fontWeight={"bold"} as={"h3"}>
                  {address}
                </Text>
                <Text fontSize={"xl"} fontWeight={"400"} as={"p"}>
                  {description}
                </Text>
              </Stack>
            </CardBody>
            <StackDivider height={"1px"} bgColor={"lightgray"} />
            <CardFooter>
              <ButtonGroup>
                <Button
                  onClick={openMapHandler}
                  variant={"outline"}
                  colorScheme="linkedin"
                >
                  VIEW ON MAP
                </Button>
                <Link to={`/places/${id}`}>
                  <Button colorScheme="telegram">EDIT</Button>
                </Link>
                <Button colorScheme="red">DELETE</Button>
              </ButtonGroup>
            </CardFooter>
          </VStack>
        </Card>
      </ListItem>
    </>
  );
};

export default PlaceItem;
