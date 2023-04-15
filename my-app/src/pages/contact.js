import MainNavigation from "./main-navigation";
import Footer from "./footer";
import Map from "../components";
const Contact = () => {
  return (
    <div className="">
      <MainNavigation />
      <div className="grid grid-cols-1 mt-20 justify-items-center sm:grid-cols-3 md:grid-cols-3 md:gap-0">
        <div className="grid grid-cols-2 justify-items-center sm:grid-cols-1">
          <div className="w-[3rem] place-self-center">
            <img
              className="rounded-2xl w-[4.25rem] align-self-center h-[6rem]"
              alt=""
              src="/frame10.svg"
            />
          </div>
          <div className="w-[8rem] text-center place-self-center">
            <p>+91 R-Z-G 554, Raj Nagar - II,Palam Colony, New Delhi 10077</p>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-center sm:grid-cols-1">
          <div className="w-[3rem] place-self-center">
            <img
              className="rounded-2xl w-[4.25rem] align-self-center h-[6rem]"
              alt=""
              src="/frame11.svg"
            />
          </div>
          <div className="w-[8rem] text-center place-self-center">
            <p>+91 95464XXXXX</p>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-center sm:grid-cols-1">
          <div className="w-[3rem] place-self-center">
            <img
              className="rounded-2xl w-[4.25rem] align-self-center h-[6rem]"
              alt=""
              src="/frame12.svg"
            />
          </div>
          <div className="w-[8.5rem] text-center place-self-center">
            <p>
              info@booktown
              <br />
              foundation.org
            </p>
          </div>
        </div>
      </div>  
      <Map/>
        <Footer/>
    </div>
    
  );
};

export default Contact;