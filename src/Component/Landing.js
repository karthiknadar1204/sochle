import React from "react";
import Navbar from "./Navbar";
import heroimg from "../Figma/heroimg.png";

export default function Landing() {
  return (
    <div>
      <Navbar />
      <div className="h-screen bg-[#FFF8FD]">
        <div
          id="Home"
          className="container p-4 grid gap-6 mx-auto text-center lg:grid-cols-2"
        >
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 ">
            <span className="block my-2">Welcome To</span>
            <h1 className="text-5xl font-extrabold">ColdConnect</h1>
            <p className="my-8">
              Designed to revolutionise the way job seekers approach their job
              search, ColdConnect offers a unique blend of resume building and
              cold email assistance, all in one user-friendly platform.
            </p>

            <button
              type="button"
              className="w-full py-4 text-white text-lg font-semibold rounded bg-gradient-to-b from-[#4945F4] to-[#06295E]"
            >
              Get Started !
            </button>
          </div>
          <img
            src={heroimg}
            alt=""
            className="hidden lg:block md:pt-10 w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
