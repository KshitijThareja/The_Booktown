import MainNavigation from "./main-navigation";
const AboutPage = () => {
    return (
    
      <div className="relative w-full h-screen">
    
      <div>
        <MainNavigation />
       
        <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="md:flex">
            <div class="md:shrink-0 lg:col-span-4">
              <img class="h-48 w-full  md:h-48  md:w-full " src="/image-4@2x.png" alt="Modern building architecture"/>
            </div>
        
        <div className="top-[22.38rem] left-[0rem]">         Booktown Foundation is a non-profit organization (run by individuals)
          that provides books to the needy in multiple Indian languages.
          Everyone has the right to read and we ensure it. Books help us
          throughout our lives in shaping person our future Money is not a big
          concern for us and thus, we don't accept donations in cash. If you
          really want to help someone, just donate us your old books, books that
          you don't anymore. As a nonprofit organization, our dream is to see a
          world where no one has to worry for these knowledgeable assets.
          </div>
         
        </div>


                 
      </div>
      </div>
      </div>
      </div>
    
      
   
    );
  };

  
  export default AboutPage;



    