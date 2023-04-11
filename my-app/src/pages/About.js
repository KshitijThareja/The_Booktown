import MainNavigation from "./main-navigation";
const AboutPage = () => {
  return (

    <div className="relative w-full h-screen">

      <div>
        <MainNavigation />

      
          <div class="grid grid-cols-1 md:grids-cols-3 gap-y-6 gap-x-6">

            <div class=" sm:justify-self-stretch lg:col-span-4">
              <img class="h-40 md:h-70 w-[80.4rem] h-[20.25rem] z-0 " src="/image-4@2x.png" />
              <div class="absolute top-[12.06rem] left-[32.13rem] text-white text-[3.56rem] leading-[4.88rem] flex font-quicksand text-center items-center justify-center w-[22.13rem] h-[6.5rem] ">About</div>
            </div>
            <div class =" grid grid-cols-1  md:gap-x-12 sm:grid-cols-2 sm:gap-x-6  ">
              <div>
                <img
                  className=" sm:justify-self-stretch top-[45.44rem] left-[4rem] rounded-[53px] w-[38.13rem] h-[23.75rem] md:cols-span-2 "
                  alt=""
                  src="/image-5@2x.png"
                />
              </div>
              <div className=" text-center justify-self-center sm:text-center sm:justify-item-center">
                <h1 className=" md:mt-12  text-[2.04rem] text-left font-semibold  text-darksalmon font-quicksand">
                  Welcome to Booktown Foundation
                </h1>
                <p className="justify-self-center">Booktown Foundation is a non-profit organization (run by individuals)
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

        </div>

      </div>







  );
};


export default AboutPage;



