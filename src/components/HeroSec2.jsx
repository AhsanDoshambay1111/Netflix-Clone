import React from "react";
import Mobileimg from "../Assets/images/mobile-img1.png";

function HeroSec1() {
  return (
    <div className="min-h-[50vh] flex items-center pt-10 bg-[black]">
      <div className="sm:flex m-auto justify-between items-center">
        <div className="sm:w-[50%] sm:my-10 flex justify-center mx-auto">
          <img src={Mobileimg} />
        </div>

        <div className="sm:w-[50%] p-4 mx-auto">
          <h1 className="text-white text-2xl pt-10 sm:pt-0 lg:text-5xl font-bold">
            Download your shows to watch offline
          </h1>
          <p className="text-white pt-4 lg:text-xl">
            Save your favorites easily and always have something to watch.
          </p>
        </div>


        <hr className='h-[10px] border-none bg-[#232323]'></hr>
        
      </div>
      
    </div>
  );
}

export default HeroSec1;
