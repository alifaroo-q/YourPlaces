import {
  Box,
  ListItem,
  Text,
  Flex,
  Stack,
  Avatar,
  Card,
  CardBody,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const UserItem = (props) => {
  const { image, name, placeCount, id } = props;

  return (
    <ListItem className="group">
      <Card
        backgroundColor={"blackAlpha.800"}
        className="group-hover:bg-yellow-400 transition-all duration-300"
      >
        <Link to={`/${id}/places`}>
          <CardBody>
            <Flex gap={5} alignItems={"center"}>
              <Box>
                <Avatar size={"xl"} src={image} />
              </Box>
              <Box>
                <Stack spacing={0}>
                  <Text
                    className="group-hover:text-zinc-800 transition-all duration-300"
                    color={"yellow.300"}
                    fontSize={"3xl"}
                    fontWeight={"semibold"}
                    as="h2"
                  >
                    {name}
                  </Text>
                  <Text
                    className="group-hover:text-zinc-800 transition-all duration-300"
                    color={"white"}
                    fontSize={"xl"}
                    fontWeight={"bold"}
                    as="h5"
                  >
                    {placeCount} {placeCount > 1 ? "Places" : "Place"}
                  </Text>
                </Stack>
              </Box>
            </Flex>
          </CardBody>
        </Link>
      </Card>
    </ListItem>
  );
};

export default UserItem;
