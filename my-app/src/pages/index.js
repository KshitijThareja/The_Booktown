import React, { useState, useEffect } from "react";
import Head from "next/head";
import Button from "./button";
import "./button";
import Image from "next/image";
import MainNavigation from "./main-navigation";

// // function Home() {
// //   const [message, setMessage] = useState('');

// //   useEffect(() => {
// //     fetch('http://localhost:8000/api/hello/')
// //       .then(res =cdn > {

// //         if (!res.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         return res.json();
// //       })
// //       .then(data => setMessage(data.message))
// //       .catch(error => {

// //         setMessage('An error occurred while fetching the data.');
// //       });
// //   }, [] );


const LandingPage = () => {
  return (
    <>
      <div className="relative w-full h-screen">
      
        <MainNavigation />
      
      {/* <button className="absolute top-10 right-10 px-4 py-2 bg-white text-black font-semibold border border-black rounded cursor-pointer hover:bg-black hover:text-white hover:border-black rounded-lg shadow">
        Sign up
      </button>
      <button className="absolute top-10 right-32 px-4 py-2 bg-black text-white font-semibold border border-black rounded cursor-pointer hover:bg-white hover:text-black hover:border-black  rounded-lg shadow">
        Login
      </button> */}
      <div className="flex-container">
        <div className="flex-item-left">
          <p className="[border:none] bg-[transparent] block font-montserrat text-[2.19rem] absolute top-[10.9rem] left-[12.25rem] w-[47.94rem] h-[26.56rem]">
            A world of books at <br /> your fingertips.
          </p>
          <p className="[border:none] bg-[transparent] block font-montserrat-thin text-[1.19rem]  absolute leading-[1.2] top-[19.69rem] left-[12.25rem] w-[47.94rem] h-[26.56rem]">
            Welcome to our website, where you <br /> can give your gently used
            books a <br /> new life and help spread the joy of <br />
            reading to others
          </p>
        </div>
        <img
          className="absolute top-[7.00rem] left-[73.78rem] rounded-tl-65xl rounded-tr-none rounded-br-none rounded-bl-65xl w-[46.25rem] h-[32.25rem] object-cover"
          alt=""
          src="/b8163268619025e9e0b33c10b504850b-1@2x.png"
        />
      </div>
    </div>

    </>
    
  );
};
export default LandingPage;
