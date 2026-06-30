import { useState } from "react";
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

  const [isDisplay, setIsDisplay] = useState(false);
  const handleShow = () => {
    setIsDisplay(true);
  };
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center">
        {/* <span>{count}</span>
        <button onClick={handleAdd} className="bg-blue-500">
          Add
        </button> */}
        <div className="flex gap-4">
          <button onClick={handleShow} className="bg-blue-500">
            {/* {isDisplay ? "ON" : "OFF"} */}
          </button>
          <Button text="Show" color="red" />
          <Button text="Show" color="yellow" />
          {/* <button onClick={() => setIsDisplay(false)} className="bg-red-500">
            Hide
          </button> */}
        </div>
        {isDisplay && (
          <div
            className={`${isDisplay ? "bg-white" : "bg-black"} h-[80vh] w-full`}
          ></div>
        )}
      </div>
    </>
  );
};
export default App;
