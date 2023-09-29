import axios from "axios";
import { Post } from "./Post";
import { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Lista de usuarios</h2>
      <p>
        {users.map((user, i) => {
          return <li key={i}>{user.name}</li>;
        })}
      </p>
      <Post />
    </div>
  );
};
