import {
  Button,
  Card,
  CardBody,
  Center,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PlaceItem from "./PlaceItem";

const PlaceList = ({ places }) => {
  if (places.length === 0) {
    return (
      <Center>
        <Card>
          <CardBody>
            <Stack alignItems={"center"}>
              <Text>No places found. Maybe create a one?</Text>
              <Link to="/places/new">
                <Button>Share Place</Button>
              </Link>
            </Stack>
          </CardBody>
        </Card>
      </Center>
    );
  }

  return (
    <UnorderedList styleType={"none"} margin={0} spacing={5}>
      {places.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
          />
        );
      })}
    </UnorderedList>
  );
};

export default PlaceList;
