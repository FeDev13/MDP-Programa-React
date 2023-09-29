import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Register } from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Users } from "./components/Users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
