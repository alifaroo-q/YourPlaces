import UsersList from "../components/UsersList";

import { Stack } from "@chakra-ui/react";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "John Doe",
      image:
        "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=400",
      places: 3,
    },
  ];

  return (
    <Stack justifyContent={"center"} alignItems={"center"} padding={5}>
      <UsersList items={USERS} />
    </Stack>
  );
};

export default Users;
