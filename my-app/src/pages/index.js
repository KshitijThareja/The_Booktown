import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Button from './button';
import './button';
import Image from 'next/image';
import Navbar from './Navbar';


// // function Home() {
// //   const [message, setMessage] = useState('');

// //   useEffect(() => {
// //     fetch('http://localhost:8000/api/hello/')
// //       .then(res => {
        
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
export  function Home() {
  return <div>
      <Navbar/>
    </div>
}



const LandingPage = () => {
  return (
    <div className="relative w-full h-screen">
      <div>
      </div>
      <button className="absolute top-10 right-10 px-4 py-2 bg-white text-black font-semibold border border-black rounded cursor-pointer hover:bg-black hover:text-white hover:border-black rounded-lg shadow">
        Sign up
      </button>
      <button className="absolute top-10 right-32 px-4 py-2 bg-black text-white font-semibold border border-black rounded cursor-pointer hover:bg-white hover:text-black hover:border-black  rounded-lg shadow">
        Login
      </button>
      <div class="flex-container" >
      <div class="flex-item-left">
      <p className="[border:none] bg-[transparent] block font-montserrat text-[2.19rem] absolute top-[10.9rem] left-[12.25rem] w-[47.94rem] h-[26.56rem]">
        A world of books at <br/> your fingertips. 
      </p>
      <p className="[border:none] bg-[transparent] block font-montserrat-thin text-[1.19rem]  absolute leading-[1.2] top-[19.69rem] left-[12.25rem] w-[47.94rem] h-[26.56rem]">
      Welcome to our website, where you <br/> can give your gently used books a <br/> new life and help spread the joy of <br/>reading to others
     </p>
      </div>
      <div class="flex-item-right">
      <Image
                    src="/b8163268619025e9e0b33c10b504850b-1@2x.png"
                    alt="Image"
                    height="408"
                    width="580"
                
                />
      </div>
      </div>
      
     
     </div>
     
    
  );
};
export default LandingPage