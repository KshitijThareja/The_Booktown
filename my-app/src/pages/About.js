import Footer from "./footer";
import MainNavigation from "./main-navigation";

const AboutPage = () => {
  return (
    <div className="">
      <MainNavigation />

      <div className="flex">
        <div
          style={{
            backgroundImage: `url("/image-4@2x.png")`,
            height: "30vh",
            width: "210vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className=" text-white text-[3.56rem] leading-[4.88rem] flex font-quicksand text-center items-center justify-center w-[50.13rem] h-[6.5rem]"
        >
          About
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-x-6 place-items-center mt-5">
        <div className="md:justify-self-center md:mt-5 ">
          <img
            className="rounded md:w-[39.13rem] md:h-[27.13rem] w-[21.13rem] h-[15.75rem] "
            alt=""
            src="/image-5@2x.png"
          />
        </div>

        <div className="justify-self-center w-[22rem] md:ml-30 md:mr-4 md:w-[38rem] ">
          <h1 className="text-[2rem] md:text-[3.3rem] text-center font-semibold  text-darksalmon font-quicksand">
            Welcome to Booktown Foundation
          </h1>
          <p className="text-[1rem] text-gray-700 md:text-[1.3rem] text-center md:mt-3 leading-[2rem]">
            Booktown Foundation is a non-profit organization that provides books
            to the needy in multiple Indian languages. Everyone has the right to
            read and we ensure it. Books help us throughout our lives in shaping
            person our future Money is not a big concern for us and thus, we
            don't accept donations in cash. If you really want to help someone,
            just donate us your old books, books that you don't anymore. As a
            nonprofit organization, our dream is to see a world where no one has
            to worry for these knowledgeable assets.
          </p>
        </div>
        <div className="">
           <Footer/>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
