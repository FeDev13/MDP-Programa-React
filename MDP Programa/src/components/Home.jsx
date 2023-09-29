import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const developers = [
    { nombre: "Pablo", ubicacion: "Argentina", id: "1" },
    { nombre: "Paul", ubicacion: "EEUU", id: "2" },
  ];

  const [contador, setContador] = useState(0); //[estadoInicial, funcionSeteadora] = useState (valor inicial del estado)
  const [color, setColor] = useState(false);
  const [word, setWord] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [h2Text, setH2Text] = useState("");
  const [planet, setPlanet] = useState("");

  const incrementador = () => {
    //funcion que invoca a la seteadora del estado
    setContador(contador + 1);
  };

  const decrementador = () => {
    setContador(contador - 1);
  };

  const handleColor = () => {
    setColor(!color);
  };

  const wordInInput = (e) => {
    console.log(e.target.value); //valor del input al disparar el evento
    setWord(e.target.value); //la funcion captura el atributo value del target que disparo el evento
  };

  const handleFname = (e) => {
    setFname(e.target.value);
  };
  const handleLname = (e) => {
    setLname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    //funcion que maneja la logica del form, sincrona
    e.preventDefault();
    console.log(fname, lname, email);
    setH2Text(`${fname} ${lname} ${email}`); //renderiza los estados que salen de los inputs y los maneja con una funcion especifica para eso
    setFname(""); //limpia los inputs luego de enviarse la informacion a traves del boton
    setLname("");
    setEmail("");
  };

  /*  useEffect(() => {
    console.log("la suma es", contador);
    return () => {
      console.log("se desmonta");
    };
  }, [contador]); */

  /* useEffect(() => {
    fetch("https://swapi.dev/api/planets/1/")
      .then((response) => response.json())
      .then((data) => setPlanet(data.name));
  }, []); */
  useEffect(() => {
    const url = "https://swapi.dev/api/planets/1/";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setPlanet(json.name);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mt-20 w-1/2 mx-auto flex flex-col">
      {planet}
      <Link to="users">Ver usuarios</Link>
      <div className="flex flex-col justify-center">
        <p>{contador}</p> {/* render dinamico del estado */}
        <button onClick={incrementador} className=" w-[30%] mx-auto my-10">
          {" "}
          {/* handler onClick dispara la funcion */}+
        </button>
        <button onClick={decrementador} className="w-[30%] mx-auto">
          -
        </button>
        <button
          onClick={handleColor}
          className={`rounded-xl my-5 w-[30%] mx-auto ${
            color === true
              ? "bg-blue-400"
              : "bg-red-400" /* rederizado condicional */
          }`}
        >
          Cambiar color
        </button>
        <input
          type="text"
          placeholder="ingresar palabra"
          onChange={wordInInput}
          value={word}
          className=" w-[40%] mx-auto rounded-lg p-5"
        />
        <p>{word}</p>
      </div>
      <div className=" flex flex-col mt-10">
        <form
          action=""
          onSubmit={handleSubmit}
          className=" flex flex-col bg-slate-800 w-1/2 p-10 mx-auto items-center rounded-xl"
        >
          <input
            type="text"
            name="fname"
            onInput={handleFname}
            value={fname}
            className=" m-4 rounded-md"
          />
          <input
            type="text"
            name="lname"
            onInput={handleLname}
            value={lname}
            className=" m-4  rounded-md"
          />
          <input
            type="text"
            name="email"
            onInput={handleEmail}
            value={email}
            className=" m-4  rounded-md"
          />
          <button className=" bg-green-950 p-4" type="submit">
            Enviar
          </button>
          <button onClick={() => h2Text} className=" bg-red-700 mt-4">
            Limpiar
          </button>
        </form>
        <h2>{h2Text}</h2>
      </div>
      {developers.map((developer) => {
        return (
          <li key={developer.id}>
            {developer.nombre} {developer.ubicacion}
          </li>
        );
      })}
      <div>{planet}</div>
    </div>
  );
};
export default Home;
