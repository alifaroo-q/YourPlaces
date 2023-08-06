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

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import { AuthContext } from "../../shared/context/authContext";

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
  const [deleteModal, setDeleteModal] = useState(false);

  const { isLoggedIn } = useContext(AuthContext);

  const openMapHandler = () => {
    setShowMap(true);
  };

  const closeMapHandler = () => {
    setShowMap(false);
  };

  const showDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const deletePlaceHandler = () => {
    setDeleteModal(false);
    console.log("DELETING...");
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
      <Modal
        show={deleteModal}
        onCancel={closeDeleteModal}
        headerText={"Are you sure?"}
        contentClass={"text-xl"}
        footerClass={"text-right"}
        footerContent={
          <ButtonGroup>
            <Button onClick={closeDeleteModal} variant={"outline"}>
              CANCEL
            </Button>
            <Button onClick={deletePlaceHandler} colorScheme="red">
              DELETE
            </Button>
          </ButtonGroup>
        }
      >
        <Text>Do you want to proceed with this operation</Text>
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
                {isLoggedIn && (
                  <Link to={`/places/${id}`}>
                    <Button colorScheme="telegram">EDIT</Button>
                  </Link>
                )}
                {isLoggedIn && (
                  <Button onClick={showDeleteModal} colorScheme="red">
                    DELETE
                  </Button>
                )}
              </ButtonGroup>
            </CardFooter>
          </VStack>
        </Card>
      </ListItem>
    </>
  );
};

export default PlaceItem;
