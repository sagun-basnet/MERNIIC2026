import { useEffect, useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Button from "./components/Button";

const App = () => {
  // const [count, setCount] = useState(0);
  // const handleAdd = () => {
  //   setCount((prev) => prev + 1);
  //   setCount((prev) => prev + 1);
  //   // setCount(() => count + 1);
  //   // setCount(() => {
  //   //   count + 1;
  //   // });
  //   console.log(count);
  // };

  // const [isDisplay, setIsDisplay] = useState(false);
  // const handleShow = () => {
  //   setIsDisplay(true);
  // };
  const [status, setStatus] = useState(false);
  // const handleClick = () => {
  //   // if (status) {
  //   //   setStatus(false);
  //   // } else {
  //   //   setStatus(true);
  //   // }
  //   setStatus(!status);
  // };
  useEffect(() => {
    console.log("From UseEffect");
  }, []);

  return (
    <>
      <div
        className={`md:p-2 lg: xl: flex justify-center items-center h-screen w-full ${status ? "bg-white" : "bg-black"}`}
      >
        <button onClick={() => setStatus(!status)} className="bg-blue-500">
          {status ? "OFF" : "ON"}
        </button>
      </div>
    </>
  );
};
export default App;
