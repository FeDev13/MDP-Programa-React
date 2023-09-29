import axios from "axios";
import { useState } from "react";

export const Post = () => {
  const [user, setUser] = useState({ name: "" });

  const handleInput = (e) => {
    setUser({ name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((response) => {
        console.log(response);
        console.log(response.data);
      });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Ingrese usuario</label>
        <input type="text" name="user" onChange={handleInput} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
