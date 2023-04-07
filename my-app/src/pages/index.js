const LandingPage = () => {
  return (
    
    <div className="container ">
    <div>
      <nav className="flex justify-end items-center h-16 bg-black-100">
        <button className="absolute top-10 right-10 px-4 py-2 bg-white text-black font-semibold border border-black rounded cursor-pointer hover:bg-black hover:text-white hover:border-black">
          Sign up
        </button>
        <button className="absolute top-10 right-32 px-4 py-2 bg-black text-white font-semibold border border-black rounded cursor-pointer hover:bg-white hover:text-black hover:border-black">
          Login
        </button>
      </nav>
      <div className="flex flex-row items-center justify-center min-w-screen px-2">
      
        <p className="[border:none] bg-[transparent] block font-montserrat text-[2.19rem] absolute top-[10.69rem] left-[7.25rem] w-[47.94rem] h-[26.56rem]">
          A world of books at <br /> your fingertips.
        </p>
        <p className="[border:none] bg-[transparent]  font-montserrat-thin  text-[1.19rem] absolute leading-[1.] top-[19.69rem] left-[7.25rem] w-[47.94rem] h-[26.56rem]">
          Welcome to our website, where you <br /> can give your gently used
          books a <br /> new life and help spread the joy of <br />
          reading to others
        </p>
      
      
        <img
          className="absolute top-[8.00rem] left-[44.5rem] rounded-tl-65xl rounded-tr-none rounded-br-none rounded-bl-65xl w-[46.25rem] h-[32.25rem] object-cover"
          alt=""
          src="/b8163268619025e9e0b33c10b504850b-1@2x.png"
        />
      </div>
      <div>
        <button className="absolute top-[29.56rem] left-[7.25rem] px-7 py-3 bg-black text-white font-semibold border border-black rounded cursor-pointer hover:bg-white hover:text-black hover:border-black">
          Donate Now
        </button>
        <button className="absolute top-[29.56rem] left-[19.75rem] px-7 py-3  bg-darksalmon shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] border border-darksalmon rounded  text-white gap-[0.19rem] font-semibold  rounded-md cursor-pointer hover:bg-white hover:text-darksalmon ">
         Read More
        </button>
        </div>
      
    </div>  
    <div className="absolute top-[43.06rem] left-[49.5rem] text-[2.04rem] font-semibold inline-block w-[20.81rem] h-[4.31rem]">
        ABOUT US
      </div>
      
      <div className="absolute top-[48.13rem] left-[49.5rem] inline-block w-[49.38rem] h-[73.94rem] text-[1.38rem] text-gray-800">
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
              </p>
              <img
        className="absolute top-[1.56rem] right-[54.75rem] rounded-[41px]  w-[42.25rem] h-[28.25rem] object-cover"
        alt=""
        src="/aa23d4bca20b4f568e95eb777e5529ad-1@2x.png"
      />
        <p className="m-0 text-black">
          <span className="font-light">
            <span>&nbsp;</span>
          </span>
        </p>
        
        <p className="m-0 text-[1.85rem] ">
          <span>
            <span className="font-semibold">Our motto: Har haath kitaab</span>
          </span>
        </p>
        <div class="space-y-[5px]">


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
          <div className="absolute top-[16.69rem] left-[0.5rem] bg-mistyrose shadow-[0px_20px_44px_1px_rgba(0,_0,_0,_0.1)] w-[146.25rem] h-[71.13rem]" />
            <div className="absolute top-[16.25rem] left-[48.81rem] text-[3.88rem] font-semibold text-darksalmon inline-block w-[48.69rem] h-[4.31rem]">
              OUR OPERATIONAL MODEL
            </div>    
                  
      </div>
      </div>
            
         




  
  );
};

export default LandingPage;

