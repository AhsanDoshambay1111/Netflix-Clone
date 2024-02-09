import React from "react";
import kidsimg from '../images/Kids-img.png';

function HeroSec1() {
  return (
    <div className="min-h-[50vh] flex items-center pt-10 bg-[black]">
      <div className="md:flex m-auto justify-between items-center">
        <div className="w-[100%] md:w-[50%] flex justify-center mx-auto  ">
          <img src={kidsimg} className="w-[300px] sm:w-[100%]"/>
        </div>

        <div className="md:w-[50%] px-4 py-8 mx-auto">
          <h1 className="text-white xl:w-[500px] text-3xl sm:text-5xl font-bold">
          Create profiles for kids
          </h1>
          <p className="text-white pt-4 sm:text-xl xl:w-[500px]">
          Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
          </p>
        </div>


        <hr className='h-[10px] relative border-none bg-[#232323]'></hr>
        
      </div>
      
    </div>
  );
}

export default HeroSec1;
