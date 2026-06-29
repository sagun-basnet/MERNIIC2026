import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  const name = "Jhon";

  const handleClick = (id) => {};

  return (
    <>
      <Navbar userName={name} />
      <Navbar userName={name} />

      <Form text={"Register"}/>
      {/* <button
        style={{ backgroundColor: "red" }}
        onClick={() => {
          alert("Button Clicked: ", 12);
        }}
        className="bg-blue-500 hover:bg-blue-600 hover:text-[1rem]"
      >
        Click
      </button>
      <h1 className="underline">Hello</h1>
      <span></span>
      <p></p> */}
      {/* <HomePage /> */}
    </>
  );
  ``;
};
export default App;
