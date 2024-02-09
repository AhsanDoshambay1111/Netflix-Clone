import React from "react";
import Logo from "../Assets/images/N-logo.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="Hero-main h-[100vh]">
      <div className="Hero">
        <div className="flex justify-between px-4 lg:px-32 items-center h-[80px]">
          <div className=" flex items-center w-[150px] md:w-[200px] my-auto">
            <a href="/"><img src={Logo} className="" /></a>
          </div>

          <div>
            <Link className="bg-[red] text-[white] px-8 py-2 rounded-md font-semibold" to="/Login">
              Login
            </Link>
          </div>
        </div>

        <div className="hero-content flex h-[85vh] mt-auto items-center justify-center">
          <div>
            <h1 className="lg:text-[40px] text-2xl text-center text-white font-extrabold">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-white text-center pt-4 text-sm sm:text-xl">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="text-white text-center pt-4 text-sm sm:text-xl">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="sm:flex justify-center items-center gap-4 mt-20">
              <form className="flex px-4 flex-wrap gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="text-[white] hero-input w-[100%] bg-transparent border border-white px-4 sm:w-[350px] py-2"
                ></input>
                <button className="bg-[red] sm:w-[auto] w-[100%] text-white px-8 py-2">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
