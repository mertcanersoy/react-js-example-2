import React, { useState } from "react";

import Card from "../UI/Card";
import style from "./UsersList.module.css";

const UsersList = (props) => {
  if (props.users.length === 0) {
    return null; //if there is no user hide card
  }
  return (
    <Card className={style.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old.)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
