import React, { useState, useEffect } from "react";
import Head from "next/head";
import Button from "./button";
import "./button";
import Image from "next/image";
import MainNavigation from "./main-navigation";

const LandingPage = () => {
  return (
    < div className="">
      <MainNavigation />
      

      <div className="mt-5 mx-5 grid grid-cols-1 md:grid-cols-2 md:px-0 sm:justify-items-center place-items-center w-[45rem] md:w-[130rem]">
        <div className="justify-self-center sm:justify-self-center md:place-self-start ">
          <img
            className=" rounded-tl-65xl rounded-tr-none rounded-br-none rounded-bl-65xl w-[49.4rem] h-[32.25rem] md:w-[56rem] md:h-[35rem]"
            alt=""
            src="/b8163268619025e9e0b33c10b504850b-1@2x.png"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-self-center md:grid-cols-1 md:gap-x-6 md:ml-7 md:content-start md:mt-12 md:order-first">
          <div className=" md:mr-60 justify-self-center md:place-self-start ">
            <p className="[border:none] bg-[transparent] block font-montserrat text-[2.5rem] text-center">
              A world of books at<br/> your fingertips.
            </p>
            <p className="[border:none] bg-[transparent] font-montserrat-thin mt-3 md:mt-6 text-[1.39rem] text-center mb-4">
              Welcome to our website, where you can<br/> give your gently used books
              a new life and help <br/> spread the joy of reading to others.
            </p>  
          </div>
          <div className="sm:mt-20 md:mt-4 justify-self-center md:place-self-center md:mr-60">
            <button className=" px-7 py-3 bg-black text-white font-semibold border border-black rounded cursor-pointer hover:bg-white hover:text-black hover:border-black mr-4">
              Donate Now
            </button>
            <button className=" px-7 py-3  bg-darksalmon shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] border border-darksalmon  text-white gap-[0.19rem] font-semibold md:mt-4 rounded-md cursor-pointer hover:bg-white hover:text-darksalmon ">
              Read More
            </button>
          </div>
        </div>
      
      {/* <div className="absolute top-[43.06rem] left-[74.5rem] text-[2.04rem] font-semibold inline-block w-[10.81rem] h-[4.31rem]">
        ABOUT US
      </div> */}
       

      <div className="grid grid-cols-1 gap-y-7 place-content-center justify-items-center sm:grid-cols-1 md:grid-cols-2">
      <div className="mt-5">
        <img
          className="rounded-[41px]  w-[50.25rem] h-[36.25rem] object-cover"
          alt=""
          src="/aa23d4bca20b4f568e95eb777e5529ad-1@2x.png"
        />
        </div>
        <div className="justify-self-center mt-5 ">
        <h2 className="text-[2.04rem] justify-self-center font-semibold inline-block mb-4">ABOUT US           </h2>
        <p className="m-0 font-light text-[1.38rem] leading-[2rem] text-center inline-block  text-gray-800">
          A dedicated team of volunteers who want to do their bit of good
          towards the society.
          It all started when we wanted to donate our old books.
           We wanted them to be of good use to someone,
          someone who really needs it. And thus popped the idea,
          of collecting books and giving it to the needy.
          We realized there are many kids who aren't so privileged
          and can't afford to purchase even the textbooks. This
          thought made us work passionately towards this cause
          and we started this journey to make sure that the extra 
          books lying on your shelves reach those who can't
          afford them.
        </p>
        </div>
       
        
        <div className="place-self-center">
        <p className="m-0 text-[1.85rem] font-semibold text-center ">
        Our motto: Har haath kitaab
        </p>
        <br />
        <div className="space-y-[5px] text-[1.38rem]">
          <ul className="space-y-3">
            <li>
              To be accessible to every individual who needs books.
            </li>
            <li>
              To collect books from as many people as possible and
              <br /> give them a chance to be a part of this initiative.
            </li>
            <li>
              To make people aware how important and valuable is
              <br /> their contribution towards the society.
            </li>
            <li>
              Since it is a donation (monetary) free NGO, we aim to <br />
              encourage people to lend a helping hand to the needy.
            </li>
          </ul>
        </div>
        </div>
        
      </div>
      {/* <div className="absolute top-[97.69rem]  bg-mistyrose shadow-[0px_20px_44px_1px_rgba(0,_0,_0,_0.1)] w-[119rem] h-[31.13rem]" />
            <div className="absolute top-[99.25rem] left-[37.81rem] text-[3rem] font-semibold text-darksalmon inline-block w-[56.69rem] h-[2.31rem]">
              OUR OPERATIONAL MODEL
            </div>     */}
    </div>
    </div>
  );
};

export default LandingPage;
