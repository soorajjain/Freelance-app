import React from "react";
import signup from "../../../assets/signup.jpg";
import e2 from "../../../assets/e2.jpg";
import e3 from "../../../assets/e3.jpg";
import e4 from "../../../assets/e4.jpg";
import { Link } from "react-router-dom";

function Employers() {
  return (
    <div className="">
      <div className="Hero-sec max-w-[870px] h-[400px] grid grid-row-2 text-white sm:mx-12  md:mx-12 lg:mx-auto mx-10 md:grid-cols-2 items-center justify-center sm:flex-row">
        <div className="flex mx-auto items-center md:items-start flex-col justify-center order-2 md:order-1">
          <div className="font-serif font-bold text-[40px] md:text-left">
            Sign Up
          </div>
          <div className="text-l pt-4 w-[300px] text-center md:text-left ">
            It's easy to get started! Simply join for free, post your job, and
            start receiving Quotes. Use the Find Freelancers tool to get Quotes
            from quality Freelancers.
          </div>
          <Link
            to="/redirect"
            className="border flex items-start border-red-900 bg-red-700 hover:bg-red-500 rounded-md p-2 px-5 md:block my-7 text-l"
          >
            Get Started
          </Link>
        </div>
        <div className="order-1 md:order-2 mt-5 mb-5 md:mt-0 md:mb-5 mx-5">
          <img className="w-[390px] " src={signup} alt="logo" />
        </div>
      </div>

      {/* 2 */}

      <div className="Hero-sec max-w-[870px] h-[400px] grid grid-row-2 text-white sm:mx-12  md:mx-12 lg:mx-auto mx-6 md:grid-cols-2 items-center justify-center sm:flex-row mt-56 md:mt-0 ">
        <div className="flex mx-auto items-center md:items-start flex-col justify-center  order-2 ">
          <div className="font-serif font-bold text-[40px] md:text-left mt-3">
            Hire
          </div>
          <div className="text-l pt-4 w-[300px] text-center md:text-left">
            We make it easy to identify and apply for the jobs that match your
            skills and services.
          </div>
        </div>
        <div className=" order-1 mt-5 mb-5 md:mt-0 md:mb-5 mx-5">
          <img className="w-[390px]" src={e2} alt="logo" />
        </div>
      </div>

      {/* 3 */}

      <div className="Hero-sec max-w-[870px] h-[400px] grid grid-row-2 text-white sm:mx-12  md:mx-12 lg:mx-auto mx-6 md:grid-cols-2 items-center justify-center sm:flex-row mt-40 md:mt-0 ">
        <div className="flex mx-auto items-center md:items-start flex-col justify-center  order-2 md:order-1">
          <div className="font-serif font-bold text-[40px] md:text-left mt-3">
            Manage
          </div>
          <div className="text-l pt-4 w-[300px] text-center md:text-left">
            Use WorkRooms to manage Freelancers and keep track of progress.
          </div>
        </div>
        <div className="order-1 md:order-2 mt-5 mb-5 md:mt-0 md:mb-5 mx-5">
          <img className="w-[390px]" src={e3} alt="logo" />
        </div>
      </div>

      {/* 4 */}

      <div className="Hero-sec max-w-[870px] h-[400px] grid grid-row-2 text-white sm:mx-12  md:mx-12 lg:mx-auto mx-6 md:grid-cols-2 items-center justify-center sm:flex-row mt-40 md:mt-0">
        <div className="flex mx-auto items-center md:items-start flex-col justify-center order-2 ">
          <div className="font-serif font-bold text-[40px] md:text-left mt-3">
            Pay
          </div>
          <div className="text-l pt-4 w-[300px] text-center md:text-left">
            Pay a Freelancer for a job well done through our secure payment
            system.
          </div>
        </div>
        <div className="order-1 order-1mt-5 mb-5 md:mt-0 md:mb-5 mx-5 ">
          <img className="w-[390px]" src={e4} alt="logo" />
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Employers;
