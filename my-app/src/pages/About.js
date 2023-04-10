import MainNavigation from "./main-navigation";
const AboutPage = () => {
    return (
    
      <div className="relative w-full h-screen">
    
      <div>
        <MainNavigation />
       
        <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       
            <div class=" sm:justify-self-stretch lg:col-span-4">
              <img class="h-40 md:h-70 w-[80.4rem] h-[20.25rem] z-0 " src="/image-4@2x.png"/>
              <div class="absolute top-[12.06rem] left-[32.13rem] text-white text-[5.56rem] leading-[4.88rem] flex font-quicksand text-center items-center justify-center w-[22.13rem] h-[6.5rem] ">About</div>
            </div>
           
          
          
        </div>
        
        
        <div className="md:col-span-1 lg:col-span-3 left-[12rem]"> Booktown Foundation is a non-profit organization (run by individuals)
          that provides books to the needy in multiple Indian languages.
          Everyone has the right to read and we ensure it. Books help us
          throughout our lives in shaping person our future Money is not a big
          concern for us and thus, we don't accept donations in cash. If you
          really want to help someone, just donate us your old books, books that
          you don't anymore. As a nonprofit organization, our dream is to see a
          world where no one has to worry for these knowledgeable assets.
              < h1 className="top-[42.38rem] left-[3.25rem] leading-[3rem] flex items-center w-[59.13rem] h-[4.44rem]text-left text-[3.5rem] text-darksalmon font-quicksand">
                Welcome to Booktown Foundation
              </h1>
        </div>
          
      </div>
      <img
        className="top-[45.44rem] left-[4rem] rounded-[53px] w-[56.13rem] h-[34.75rem] object-cover "
        alt=""
        src="/image-5@2x.png"
      />
         
        </div>


                 
      </div>
     

   
    
      
   
    );
  };

  
  export default AboutPage;



    