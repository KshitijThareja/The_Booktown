import React, { useState, useEffect } from "react";
import Head from "next/head";
import Button from "./button";
import "./button";
import Image from "next/image";
import MainNavigation from "./main-navigation";
// function Home() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:8000/api/hello/')
//       .then(res =cdn > {

//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then(data => setMessage(data.message))
//       .catch(error => {

//         setMessage('An error occurred while fetching the data.');
//       });
//   }, [] );

const LandingPage = () => {
  return (
    <div className="">
      <MainNavigation />

      <div className="mt-5 p-8 grid grid-cols-1 md:grid-cols-2 md:px-0 sm:justify-items-center place-items-center">
        <div className=" sm:justify-self-center md:justify-self-end">
          <img
            className=" rounded-tl-65xl rounded-tr-none rounded-br-none rounded-bl-65xl  h-30 md:h-70 w-[49.4rem] h-[32.25rem]"
            alt=""
            src="/b8163268619025e9e0b33c10b504850b-1@2x.png"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-1 md:gap-x-6 md:ml-7 md:content-start md:mt-12 md:order-first">
          <div className=" md:mr-60">
            <p className="[border:none] bg-[transparent] justify-self-center block font-montserrat text-[2.5rem]">
              A world of books at your fingertips.
            </p>
            <p className="[border:none] bg-[transparent] font-montserrat-thin mt-3 md:mt-6 text-[1.39rem] mb-4">
              Welcome to our website, where you can give your gently used books
              a new life and help spread the joy of
              reading to others.
            </p>
          </div>
          <div className="sm:mt-20 md:mt-4">
            <button className=" px-7 py-3 bg-black text-white font-semibold border border-black rounded cursor-pointer hover:bg-white hover:text-black hover:border-black mr-4">
              Donate Now
            </button>
            <button className=" px-7 py-3  bg-darksalmon shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] border border-darksalmon  text-white gap-[0.19rem] font-semibold md:mt-4 rounded-md cursor-pointer hover:bg-white hover:text-darksalmon ">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-[43.06rem] left-[74.5rem] text-[2.04rem] font-semibold inline-block w-[10.81rem] h-[4.31rem]">
        ABOUT US
      </div>
      
      <div className="absolute top-[48.13rem] left-[74.5rem] inline-block w-[39.38rem] h-[73.94rem] text-[1.38rem] text-gray-800">
        <p className="m-0 font-light">
      
            
              A dedicated team of volunteers who want to do their <br/> bit of good
              towards the society.<br/>
              It all started when we wanted to donate our old books.<br/> We wanted
              them to be of good use to someone,<br/> someone who really needs it.
              And thus popped the idea,<br/> of collecting books and giving it to the
              needy.<br/>
              We realized there are many kids who aren't so privileged<br/> and can't
              afford to purchase even the textbooks. This<br/> thought made us work
              passionately towards this cause<br/> and we started this journey to
              make sure that the extra <br/>books lying on your shelves reach those
              who can't <br/>afford them.<br/>
              We know the value of books. Books give exposure to<br/> children. They
              open a whole new world for them to dive<br/> in.
              </p> */}
      {/* <img
        className="absolute top-[1.56rem] right-[60.75rem] rounded-[41px]  w-[50.25rem] h-[36.25rem] object-cover"
        alt=""
        src="/aa23d4bca20b4f568e95eb777e5529ad-1@2x.png"
      /> */}
      {/* <p className="m-0 text-black">
          <span className="font-light">
            <span>&nbsp;</span>
          </span>
        </p>
        
        <p className="m-0 text-[1.85rem] ">
          <span>
            <span className="font-semibold">Our motto: Har haath kitaab</span>
          </span>
        </p><br/>
        <div className="space-y-[5px]">


      <ul className="space-y-3">
        
          <li className="mb-[0rem] ">
              To be accessible to every individual who needs books.
          </li>
          <li className="mb-[0rem]">
            
                To collect books from as many people as possible and<br/> give them a
                chance to be a part of this initiative.
            
          </li>  
          <li className="mb-[0rem]">
            
                To make people aware how important and valuable is<br/> their
                contribution towards the society.
            
          </li>   
          <li className="mb-[0rem]">
          
                Since it is a donation (monetary) free NGO, we aim to <br/>encourage
                people to lend a helping hand to the needy.
            
          </li>  
          </ul>
          </div>
          </div> */}
      {/* <div className="absolute top-[97.69rem]  bg-mistyrose shadow-[0px_20px_44px_1px_rgba(0,_0,_0,_0.1)] w-[119rem] h-[31.13rem]" />
            <div className="absolute top-[99.25rem] left-[37.81rem] text-[3rem] font-semibold text-darksalmon inline-block w-[56.69rem] h-[2.31rem]">
              OUR OPERATIONAL MODEL
            </div>     */}
    </div>
  );
};

export default LandingPage;
