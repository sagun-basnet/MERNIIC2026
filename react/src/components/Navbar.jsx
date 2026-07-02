import { Link } from "react-router-dom";

const Navbar = () => {
  // console.log(props);

  return (
    <nav className="flex justify-between px-4 h-20 w-full bg-amber-400 items-center">
      <h1 className="text-4xl">LOGO</h1>
      <ul className="flex gap-2">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/service">
          <li>Service</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>

      {/* {userName.length === 0 && <p>{userName}</p>} */}

      <div className="flex gap-4">
        <button className="bg-red-500">Login</button>
        <button className="bg-blue-500">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
