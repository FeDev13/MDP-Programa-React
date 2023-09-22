import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" mx-auto bg-cyan-900">
      <nav className="flex justify-around">
        <Link to="/register">Register</Link>
        <a href="">link2</a>
        <a href="">link3</a>
      </nav>
    </header>
  );
};
export default Navbar;
