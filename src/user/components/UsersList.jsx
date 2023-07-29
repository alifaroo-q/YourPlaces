import {
  Box,
  Card,
  CardBody,
  Flex,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import UserItem from "./UserItem";

const UsersList = (props) => {
  const { items } = props;

  if (items.length === 0) {
    return (
      <Flex justifyContent={"center"}>
        <Card>
          <CardBody>
            <Text fontSize={"2xl"} as={"h2"}>
              No users found
            </Text>
          </CardBody>
        </Card>
      </Flex>
    );
  }

  return (
    <UnorderedList styleType={"none"} margin={0}>
      {items.map(({ id, places, name, image }) => {
        return (
          <UserItem
            key={id}
            id={id}
            name={name}
            image={image}
            placeCount={places}
          />
        );
      })}
    </UnorderedList>
  );
};

export default UsersList;
