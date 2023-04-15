const Footer = () => {
    return (
    <footer className="p-6 bg-black text-white  ">
	<div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-3 ">
		<div className="flex flex-col space-y-5 mx-auto ">
			<h2 className="font-medium">About Us</h2>
			<div className="flex flex-col space-y-4 text-sm text-white-400">
              
            <div className="font-open-sans flex items-center  leading-[1.75rem]">
              This organization is set up by people <br/> who want to come out of
              their comfort<br/> zone and utilize their resources for the<br/> betterment
              of the nation.
            </div>
			</div>
		</div>
		<div className="flex flex-col space-y-4 mx-auto">
			<h2 className="font-medium">Quick Links</h2>
			<div className="flex flex-col space-y-4 text-sm text-white-400">
				<a  href="#">About</a>
                <div className="border-2 border-solid w-38 border-gray-700 inline-block mb-2"></div>
				<a  href="#">Blog</a>
                <div className="border-2 border-solid w-38 border-gray-700 inline-block mb-2"></div>
				<a  href="#">Donation</a>
                <div className="border-2 border-solid w-38 border-gray-700 inline-block mb-2"></div>
				
			</div>
		</div>
		<div className="flex flex-col space-y-5 mx-auto">
			<h2 className="font-medium">Contact info</h2>
			<div className="flex flex-col space-y-4 text-sm text-white-400">
				<div >   R-Z-G 554, Raj Nagar - II,</div>
          
				<div >Palam Colony, New Delhi 10077</div>

				<div >91+ 9868XXXXX</div>
                <div > info@booktownfoundation.org</div>
				
			</div>
		</div>
	
	</div>
	<div className="flex items-center justify-center px-6 pt-12 text-sm  ">
        <div className="flex flex-col space-y-2 text-sm text-white-400">
        {/* <div className=" border md:w-[145.31rem] h-[1.19rem] border-t-[0px] border-solid border-gray-700"></div> */}
		<div className="text-white-400 text-center ">© Copyright 1986. All Rights Reserved.</div>
        </div>
	</div>
</footer>
        
     
     

        
   
    
    );
}
export default Footer;