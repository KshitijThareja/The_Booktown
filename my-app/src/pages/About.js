import MainNavigation from "./main-navigation";
const AboutPage = () => {
  return (


      <div>
        <MainNavigation />

          <div className="flex">

            <div className="flex-1">
              <img className="md:h-70 w-[120rem] h-[20.25rem] z-0 " src="/image-4@2x.png" />
              </div>
              <div> <p className="absolute top-[12.06rem] left-[32.13rem] text-white text-[3.56rem] leading-[4.88rem] flex font-quicksand text-center items-center justify-center w-[22.13rem] h-[6.5rem] ">About</p></div>
            
            </div>
            <div className =" grid grid-cols-1 md:grid-cols-2 md:gap-x-12 sm:grid-cols-1 sm:justify-items-center sm:gap-x-20 md:mt-6">
              <div className="sm:justify-self-center md:cols-span-2 ">
                <img
                  className="rounded-[53px] w-[38.13rem] h-[23.75rem] "
                  alt=""
                  src="/image-5@2x.png"
                />
              </div>
              <div className=" md:text-center md:justify-self-center sm:text-center md:mr-5">
                <h1 className=" md:mt-12  text-[3.04rem] text-center font-semibold  text-darksalmon font-quicksand">
                  Welcome to Booktown Foundation
                </h1>
                <p className="text-[1.5rem] md:mt-6">Booktown Foundation is a non-profit organization
                that provides books to the needy in multiple Indian languages.
                Everyone has the right to read and we ensure it. Books help us
                throughout our lives in shaping person our future Money is not a big
                concern for us and thus, we don't accept donations in cash. If you
                really want to help someone, just donate us your old books, books that
                you don't anymore. As a nonprofit organization, our dream is to see a
                world where no one has to worry for these knowledgeable assets.</p>

              </div>



            </div>

          

        </div>







  );
};


export default AboutPage;



