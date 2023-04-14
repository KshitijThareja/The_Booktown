import React, { useState, useEffect } from "react";
import Head from "next/head";
import Button from "./button";
import "./button";
import Image from "next/image";
import MainNavigation from "./main-navigation";

const LandingPage = () => {
  return (
    <div div className="">
      <MainNavigation />

      <div className="flex"></div>
      <div className="mt-5 mx-5 grid grid-cols-1 md:grid-cols-2 md:px-0 sm:justify-items-center place-items-center w-[45rem] md:w-[130rem]">
        <div className="justify-self-center sm:justify-self-center md:place-self-start ">
          <img
            className=" rounded-tl-65xl rounded-tr-65xl rounded-br-65xl rounded-bl-65xl w-[49.4rem] h-[32.25rem] md:w-[56rem] md:h-[35rem]"
            alt=""
            src="/b8163268619025e9e0b33c10b504850b-1@2x.png"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-self-center md:grid-cols-1 md:gap-x-6 md:ml-7 md:content-start md:mt-12 md:order-first">
          <div className=" md:mr-60 justify-self-center md:place-self-start ">
            <p className="[border:none] bg-[transparent] block font-montserrat text-[2.5rem] text-center md:text-start">
              A world of books at
              <br /> your fingertips.
            </p>
            <p className="[border:none] bg-[transparent] font-montserrat-thin mt-3 md:mt-6 text-[1.39rem] text-center md:text-start mb-4">
              Welcome to our website, where you can
              <br /> give your gently used books a new life and help <br />{" "}
              spread the joy of reading to others.
            </p>
          </div>
          <div className="sm:mt-20 md:mt-4 justify-self-center place-self-center md:place-self-start ">
            <button className=" px-7 py-3 bg-black text-white font-semibold border border-black rounded cursor-pointer hover:bg-white hover:text-black hover:border-black mr-4">
              Donate Now
            </button>
            <button className=" px-7 py-3  bg-darksalmon shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] border border-darksalmon  text-white gap-[0.19rem] font-semibold md:mt-4 rounded-md cursor-pointer hover:bg-white hover:text-darksalmon ">
              Read More
            </button>
          </div>
        </div>

    

        <div className="grid grid-cols-1 gap-y-7 place-content-center justify-items-center sm:grid-cols-1 md:grid-cols-3 md:w-[150rem]">
          <div className="mt-5 md:justify-self-end md:col-span-2">
            <img
              className="rounded-[41px]x w-[50.25rem] h-[36.25rem]"
              alt=""
              src="/aa23d4bca20b4f568e95eb777e5529ad-1@2x.png"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 md:w-[40rem] md:justify-self-end">
            <div className="justify-self-center mt-3">
              <h2 className="text-[2.04rem] justify-self-center text-center font-semibold mb-4 md:text-start">
                ABOUT US
              </h2>
              <p className="font-light text-[1.38rem] leading-[2rem] text-center md:text-start text-gray-800">
                A dedicated team of volunteers who want to do their bit of good
                towards the society. It all started when we wanted to donate our
                old books. We wanted them to be of good use to someone, someone
                who really needs it. And thus popped the idea, of collecting
                books and giving it to the needy. We realized there are many
                kids who aren't so privileged and can't afford to purchase even
                the textbooks. This thought made us work passionately towards
                this cause and we started this journey to make sure that the
                extra books lying on your shelves reach those who can't afford
                them.
              </p>
            </div>

            <div className="place-self-center md:place-self-start">
              <p className="m-0 text-[1.85rem] md:mt-6 font-semibold mt-5 text-center md:text-start ">
                Our motto: Har haath kitaab
              </p>
              <br />
              <div className="text-[1.38rem] md:text-start">
                <ul className="space-y-4">
                  <li>To be accessible to every individual who needs books.</li>
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
        </div>
      </div>

      <div className="grid grid-cols-1 mt-14 place-items-center sm:grid-cols-1 w-[43rem] md:w-[132rem]">
        <div className="text-[2.7rem] text-end md:text-start md:text-[3.2rem] justify-self-center font-semibold text-darksalmon inline-block w-[43rem] md:w-[55rem] ">
          OUR OPERATIONAL MODEL
        </div>
        <div className="grid grid-cols-1 gap-y-7 mt-10 sm:grid-cols-1 md:grid-cols-3 md:w-[120rem]">
          <div className="w-[27.76rem] h-[46rem] text-center font-bold text-[2.7rem] md:text-[2rem]">
            <div className="rounded-xl bg-white shadow-[0px_4px_20px_2px_rgba(0,_0,_0,_0.25)] mt-6 w-[33.88rem] h-[44.63rem] md:w-[26.88rem] md:h-[33.66rem]">
              <img
                className="rounded-t-xl rounded-b-none w-[34rem] h-[32.5rem] md:w-[27rem] md:h-[24.5rem] object-fit"
                alt=""
                src="/image-1@2x.png"
              />
              <div className="inline-block w-[33.13rem] h-[14.69rem] md:w-[26rem] md:h-[11.69rem]">
                <p className="[margin-block-start:0] [margin-block-end:14px] font-medium">
                  Collection
                </p>
                <p className="m-0 text-[1.8rem] md:text-[1.3rem] font-light text-gray-900">
                  We collect used/new books from individuals, schools,
                  corporates, etc who are willing to support the cause.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[27.76rem] h-[46rem] text-center font-bold text-[2.7rem] md:text-[2rem]">
            <div className="rounded-xl bg-white shadow-[0px_4px_20px_2px_rgba(0,_0,_0,_0.25)] mt-6 w-[33.88rem] h-[44.63rem] md:w-[26.88rem] md:h-[33.66rem]">
              <img
                className="rounded-t-xl rounded-b-none w-[34rem] h-[32.5rem] md:w-[27rem] md:h-[24.5rem] object-fit"
                alt=""
                src="/image-3@2x.png"
              />
              <div className="inline-block w-[33.13rem] h-[14.69rem] md:w-[26rem] md:h-[11.69rem]">
                <p className="[margin-block-start:0] [margin-block-end:14px] font-medium">
                  Distribution
                </p>
                <p className="m-0 text-[1.8rem] md:text-[1.3rem] font-light text-gray-900">
                  We distribute books via book stalls at govt. schools. We also
                  provide books to credible NGOs in education domain.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[27.76rem] h-[46rem] text-center font-bold text-[2.7rem] md:text-[2rem]">
            <div className="rounded-xl bg-white shadow-[0px_4px_20px_2px_rgba(0,_0,_0,_0.25)] mt-6 w-[33.88rem] h-[44.63rem] md:w-[26.88rem] md:h-[33.66rem]">
              <img
                className="rounded-t-xl rounded-b-none w-[32.5rem] h-[30.5rem] mt-3 md:w-[25.5rem] md:h-[24.5rem] object-fit"
                alt=""
                src="/image-2@2x.png"
              />
              <div className="inline-block w-[33.13rem] mt-4 h-[14.69rem] md:w-[26rem] md:h-[11.69rem]">
                <p className="[margin-block-start:0] [margin-block-end:14px] font-medium">
                  Sorting
                </p>
                <p className="m-0 text-[1.8rem] md:text-[1.3rem] font-light text-gray-900">
                  Recycling those that are worn out/ torn/ not in good shape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
