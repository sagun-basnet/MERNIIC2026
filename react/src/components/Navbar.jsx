const Navbar = ({ userName }) => {
  // console.log(props);

  return (
    <nav className="flex justify-between px-4 h-20 w-full bg-amber-400 items-center">
      <h1 className="text-4xl">LOGO</h1>
      <ul className="flex gap-2">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>

      {userName.length === 0 && <p>{userName}</p>}

      {/* {userName.length === 0 ? (
        <div className="flex gap-4">
          <button className="bg-red-500">{text}</button>
          <button className="bg-blue-500">Register</button>
        </div>
      ) : (
        <p>{userName}</p>
      )} */}
    </nav>
  );
};

export default Navbar;
