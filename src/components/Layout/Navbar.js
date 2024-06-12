import React from "react";
import logo from "../../assets/logo.png";
// import Login from "../pages/Login";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="Navbar max-w-[1170px] text-white mx-auto flex justify-between py-8 font-bold bg-zinc-900">
        <div className="flex gap-10 items-center">
          <div className="px-1">
            <img src={logo} className="w-[200px]" alt="logo" />
          </div>
          <h1 className="hidden md:block">Find Freelancer</h1>
          <h2 className="hidden md:block">Find Jobs</h2>
          <Link to="/about" className="hidden md:block">About </Link>
        </div>
        <div className="flex gap-6 items-center mx-4">
          <button className="border border-white rounded-md p-2 px-3 ">
            post job
          </button>
          <Link to="/login"
            className="border  border-red-600 bg-red-600 rounded-md p-2 px-3 hidden md:block "
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
