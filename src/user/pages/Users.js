import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max",
      image:
        "https://www.libertytravel.com/sites/default/files/styles/full_size/public/tanzania-a.jpg?itok=dtEeVuDm",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
