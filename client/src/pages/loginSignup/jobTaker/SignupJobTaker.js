import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import showToast from "../showToast";

function SignupJobTaker() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // console.log(name, phone, email, password);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/api/auth/jobTakerRegister", {
        name,
        phone,
        email,
        password,
      })
      .then((result) => {
        showToast(result.data.code);
        if (result.data.code === "400") {
          setTimeout(() => {
            navigate("/loginJobTaker");
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
        showToast("500");
      });
  };

  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-zinc-900">
      <form
        onSubmit={handleSubmit}
        className="flex sm:gap-8 gap-5 flex-col text-white sm:h-[650px] h-[400px] w-[300px] sm:w-[400px] border border-red-500 rounded-xl items-center justify-center hover:border-white"
      >
        <Link to="/" className="px-1 mt-3">
          <img src={logo} className="w-[200px]" alt="logo" />
        </Link>
        <div className="Header sm:text-[40px] text-[30px] font-bold">
          SignUp
        </div>
        <div className="container flex items-center justify-center flex-col sm:gap-7 gap-4 ">
          <input
            className="outline-none border border-red-500 sm:p-3 p-2 sm:text-l text-sm px-7 bg-gray-400 placeholder-white sm:w-[350px] w-[250px]"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className="outline-none border border-red-500 sm:p-3 p-2 sm:text-l text-sm px-7 bg-gray-400 placeholder-white sm:w-[350px] w-[250px]"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="outline-none border border-red-500 sm:p-3 p-2 sm:text-l text-sm px-7 bg-gray-400 placeholder-white sm:w-[350px] w-[250px]"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <input
            type="password"
            className="outline-none border border-red-500 sm:p-3 p-2 sm:text-l text-sm px-7 bg-gray-400 placeholder-white sm:w-[350px] w-[250px]"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="flex sm:gap-6 gap-4">
          <button
            type="submit"
            className="border border-red-500 bg-red-700 sm:p-4  md:rounded-3xl rounded-sm sm:pt-3 sm:px-10 px-3 h-[40px] hover:bg-red-400 text-l flex items-center justify-center"
          >
            <h1>SignUp</h1>
          </button>
        </div>
        <div className="text-center">
          Already have an account? <br />
          <Link to="/loginJobTaker" className="text-red-500">
            Login
          </Link>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default SignupJobTaker;
