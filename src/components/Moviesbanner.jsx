import React from "react";
import logo from "../Assets/images/N-logo.png";

function Moviesbanner() {
  return (
    <div className="Movies-banner min-h-[100vh] lg:min-h-[90vh]  items-center ">
      <div className="Movies-Nav flex items-center px-16 justify-between">
        <div className=" w-[150px]  py-4">
          <a href="/">
            {" "}
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <div>
          <a href="#" className="mr-8 text-gray-300">
            Home
          </a>
          <a href="#" className="mr-8 text-gray-300">
            Movies
          </a>
          <a href="#" className="mr-8 text-gray-300">
            TV Shows
          </a>
          <input type="search" placeholder="Search Anything" className="search-input outline-none border border-gray-500 rounded-xl py-1 px-2 text-white"></input>
        </div>
      </div>

      <div className="px-16  min-h-[70vh] flex items-center">
        <div>
        <h1 className="text-white font-extrabold text-4xl">Money Heist</h1>
        <button className="text-white my-4 py-1 px-4 font-bold border border-white w-28 rounded-sm">
          Play
        </button>
        <button className="text-white my-4 py-1 px-4 font-bold border border-white w-28 rounded-sm ml-2">
          My List
        </button>
        <p className="text-white font-semibold pt-4 w-[60%]">
          "Money Heist" is a Spanish TV series about a group of robbers led by
          "The Professor" who plan and execute heists on the Royal Mint of Spain
          and the Bank of Spain, while dealing with personal conflicts and
          manipulating the police.
        </p>
      </div>
      </div>
    </div>
  );
}

export default Moviesbanner;
