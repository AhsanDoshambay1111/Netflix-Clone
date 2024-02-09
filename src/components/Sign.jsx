import React from "react";
import logo from "../Assets/images/N-logo.png";
import Footer from "./Footer";

function Sign() {
  return (
    <div className="sign-in-main min-h-[100vh]">
      <div className="md:w-[200px] w-[150px] mx-12 lg:mx-32 py-4">
       <a href="/"> <img src={logo} /></a>
      </div>

      <div className="min-h-[100vh] mx-4 flex justify-center items-center">
        <form className="bg-[black] sign-in-form rounded-md py-12 px-8">
          <h1 className="text-[white] text-3xl mb-8 font-bold">Login</h1>

          <input
            type="email"
            placeholder="Enter Your Email"
            className="sign-input outline-none border border-gray-400 my-2 py-2 px-4 w-[100%] rounded-md"
          ></input>
          <br></br>
          <input
            type="email"
            placeholder="Enter Your Password"
            className="sign-input  outline-none border border-gray-400 my-2 py-2 px-4 w-[100%] rounded-md"
          ></input>
          <br></br>
          <button className="bg-[red] text-white w-[100%] mt-2 py-2 rounded-md font-semibold">
            Login
          </button>

          <button className="bg-[white] text-gray-600 w-[100%] mt-16 py-2 rounded-md text-sm">
            Login With Google
          </button>
          <button className="bg-[#0068fe] text-white w-[100%] mt-2 py-2 rounded-md text-sm">
            Login With Facebook
          </button>
        </form>
      </div>

      <Footer/>
    </div>
  );
}

export default Sign;
