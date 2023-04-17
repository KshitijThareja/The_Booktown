import Button from "./button";
import "./button";
import MainNavigation from "./main-navigation";
import Link from "next/link";
import Footer from "./footer";


const LandingPage = () => {
  return (
    <div className="">
      <MainNavigation />

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="justify-self-center sm:justify-self-end md:justify-self-end lg:col-span-2">
          <img
            className="w-[22.4rem] h-[16.25rem] sm:w-[21.4rem] sm:h-[15.25rem]  md:w-[30rem] md:h-[20rem] lg:w-[47em] lg:h-[32rem]"
            alt=""
            src="/b8163268619025e9e0b33c10b504850b-1@2x.png"
          />
        </div>

        <div className="grid grid-cols-1 justify-self-center md:gap-x-6 md:content-start md:mt-12 sm:order-first md:justify-self-start md:ml-10">
          <div className="justify-self-center place-content-center md:place-self-start ">
            <p className="[border:none] bg-[transparent] block font-montserrat text-[1.8rem] sm:ml-2 sm:text-[1.6rem] mt-5 text-center sm:text-start lg:text-[2rem]">
              A world of books at
              <br /> your fingertips.
            </p>
            <p className="[border:none] bg-[transparent] ml-2 mr-2 font-montserrat-thin mt-6 mb-4 text-[1.1rem] sm:text-[0.9rem] text-center md:mt-6 sm:text-start lg:text-[1.3rem]">
              Welcome to our website, where you can
              <br /> give your gently used books a new life and help <br />{" "}
              spread the joy of reading to others.
            </p>
          </div>
          <div className="md:mt-4 justify-self-center place-self-center sm:ml-2 sm:place-self-start">
            <Link href="/donate" passHref>
              <button className=" px-7 py-3 sm:px-4 sm:py-2 lg:px-7 lg:py-3 bg-black text-white font-semibold border border-black rounded cursor-pointer hover:bg-white hover:text-black hover:border-black mr-4">
                Donate Now
              </button>
            </Link>
            <Link href="/About" passHref>
              <button className=" px-7 py-3 sm:px-4 sm:py-2 lg:px-7 lg:py-3  bg-darksalmon shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] border border-darksalmon  text-white gap-[0.19rem] font-semibold md:mt-4 rounded-md cursor-pointer hover:bg-white hover:text-darksalmon ">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 place-content-center justify-items-center lg:grid-cols-2">
        <div className="mt-8 sm:justify-self-center lg:justify-self-start ">
          <img
            className="w-[21.25rem] h-[16.25rem] justify-self-center sm:w-[26.25rem] sm:h-[20.25rem] md:w-[44.25rem] md:h-[31.25rem]"
            alt=""
            src="/aa23d4bca20b4f568e95eb777e5529ad-1@2x.png"
          />
        </div>
        <div className="grid grid-cols-1 lg:justify-self-end">
          <div className="justify-self-center mt-3">
            <h2 className="text-[1.8rem] justify-self-center text-center font-semibold mb-4 lg:text-start">
              ABOUT US
            </h2>
            <p className="font-light text-[1rem] sm:text-[1.1rem] ml-2 mr-2 leading-[2rem] text-center lg:text-start text-gray-700">
              A dedicated team of volunteers who want to do their bit of good
              towards the society. It all started when we wanted to donate our
              old books. We wanted them to be of good use to someone, someone
              who really needs it. And thus popped the idea, of collecting books
              and giving it to the needy. We realized there are many kids who
              aren't so privileged and can't afford to purchase even the
              textbooks. This thought made us work passionately towards this
              cause and we started this journey to make sure that the extra
              books lying on your shelves reach those who can't afford them.
            </p>
          </div>

          <div className="place-self-center lg:place-self-start">
            <p className="m-0 text-[1.55rem] md:mt-6 font-semibold mt-5 text-center lg:text-start ">
              Our motto: Har haath kitaab
            </p>
            <br />
            <div className="text-[1rem] text-center sm:text-[1.1rem] justify-self-center ml-2 mr-2 lg:text-start text-gray-700">
              <ul className="space-y-4">
                <li>To be accessible to every individual who needs books.</li>
                <li>
                  To collect books from as many people as possible and give them
                  a chance to be a part of this initiative.
                </li>
                <li>
                  To make people aware how important and valuable is their
                  contribution towards the society.
                </li>
                <li>
                  Since it is a donation (monetary) free NGO, we aim to
                  encourage people to lend a helping hand to the needy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
            
      <div className="grid grid-cols-1 mt-14 place-items-center sm:grid-cols-1 mb-5">
        <div className="text-[1.8rem] text-center md:text-[3.2rem] justify-self-center font-semibold text-darksalmon inline-block">
          OUR OPERATIONAL MODEL
        </div>
        <div className="grid grid-cols-1 gap-y-7 md:gap-x-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center font-bold text-[1.7rem] md:text-[2rem]">
            <div className="rounded-xl bg-white shadow-[0px_4px_20px_2px_rgba(0,_0,_0,_0.25)] mt-6 w-[20.88rem] h-[26.63rem] md:w-[26.88rem] md:h-[33.66rem]">
              <img
                className="rounded-t-xl rounded-b-none w-[21rem] h-[19.5rem] md:w-[27rem] md:h-[24.5rem] object-fit"
                alt=""
                src="/image-1@2x.png"
              />
              <div className="inline-block">
                <p className="[margin-block-start:0] [margin-block-end:14px] font-medium">
                  Collection
                </p>
                <p className="m-0 text-[1rem] md:text-[1.3rem] font-light text-gray-700">
                  We collect used/new books from individuals, schools,
                  corporates, etc who are willing to support the cause.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center font-bold text-[1.7rem] md:text-[2rem]">
            <div className="rounded-xl bg-white shadow-[0px_4px_20px_2px_rgba(0,_0,_0,_0.25)] mt-6 w-[20.88rem] h-[26.63rem] md:w-[26.88rem] md:h-[33.66rem]">
              <img
                className="rounded-t-xl rounded-b-none mt-2 mb-2 w-[20rem] h-[18.5rem] md:w-[27rem] md:h-[24.5rem] object-fit"
                alt=""
                src="/image-2@2x.png"
              />
              <div className="inline-block">
                <p className="[margin-block-start:0] [margin-block-end:14px] font-medium">
                  Sorting
                </p>
                <p className="m-0 text-[1rem] md:text-[1.3rem] font-light text-gray-700">
                Recycling those that are worn out/torn/not in good shape.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center font-bold text-[1.7rem] md:text-[2rem]">
            <div className="rounded-xl bg-white shadow-[0px_4px_20px_2px_rgba(0,_0,_0,_0.25)] mt-6 w-[20.88rem] h-[26.63rem] md:w-[26.88rem] md:h-[33.66rem]">
              <img
                className="rounded-t-xl rounded-b-none w-[21rem] h-[19.5rem] md:w-[27rem] md:h-[24.5rem] object-fit"
                alt=""
                src="/image-3@2x.png"
              />
              <div className="inline-block">
                <p className="[margin-block-start:0] [margin-block-end:14px] font-medium">
                  Distribution
                </p>
                <p className="m-0 text-[1rem] md:text-[1.3rem] font-light text-gray-700">
                  We distribute books via book stalls at govt. schools. We also
                  provide books to credible NGOs in education domain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default LandingPage;
