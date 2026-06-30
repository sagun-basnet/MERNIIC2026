import React from "react";

const Form = ({ text }) => {
  return (
    <div className="grid place-items-center h-screen">
      <form className="w-120 shadow-2xl rounded-lg p-8 flex flex-col gap-4">
        <h1 className="text-3xl font-bold ">{text}</h1>

        {text === "Register" && (
          <>
            <input type="text" name="" id="" placeholder="Enter Your Name" />
            <input type="text" name="" id="" placeholder="Enter Your Address" />
            <input type="number" name="" id="" placeholder="Enter Your phone" />
            <input type="text" name="" id="" placeholder="Enter Your Country" />
          </>
        )}
        <input type="email" name="" id="" placeholder="Enter Your Email" />
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter Your Password"
        />
        <button className="bg-blue-500">{text}</button>
      </form>
    </div>
  );
};

export default Form;
