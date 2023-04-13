import { useState, useContext } from "react";
import {FiMenu} from "react-icons/fi";
import Link from 'next/link';
import AuthenticationContext from '../context/AuthenticationContext'
function MainNavigation(){
    const [open, setOpen]= useState(false);
    const {user} = useContext(AuthenticationContext)
    return (
        <header className="border-b border-gray-200 bg-white py-2 block">
            <div className="flex items-center justify-between xl:max-w-8xl  max-w-full px-[8%] flex-wrap w-full">
                <img src="/your-place-to-readremovebgpreview-1@2x.png" width={210} height={65} />
                
            
                <FiMenu className="lg:hidden block h-6 w-6 md:justify-end cursor-pointer" onClick={()=>setOpen(!open)} />
        
                
                <nav className={`w-full lg:flex lg:items-center lg:w-auto bg-white ${open ? "block" : "hidden"}`}>
                    <ul className=" text-base text-gray-500 lg:flex lg:justify-between list-none">
                        <li>
                        <Link className="lg:px-5 py-2 block hover:text-darksalmon font-semibold hover:scale-110 ease-in duration-300" href="/">Home</Link>
                        </li>
                        <li>
                       
                        <Link className="lg:px-5 py-2 block hover:text-darksalmon font-semibold hover:scale-110 ease-in duration-300" href="/About">About</Link>
                        </li>
                        <li>
                        <Link className="lg:px-5 py-2 block hover:text-darksalmon font-semibold hover:scale-110 ease-in duration-300" href="#">Donate</Link>
                        </li>
                        <li>
                        <Link className="lg:px-5 py-2 block hover:text-darksalmon font-semibold hover:scale-110 ease-in duration-300 mr-4" href="#">Contact</Link>
                        </li>
                        {user ? (
                        
                        <li>
                        </li>): (
                        <li>
                        <Link href="/signup" passHref>
                            <button className={`px-4 py-2 block bg-white text-black font-semibold border border-black cursor-pointer hover:bg-black hover:text-white hover:border-black mr-6 ml-6 mt-0 rounded-lg shadow hover:scale-110 ease-in duration-300 ${open ? "my-2 ml-0.5" : ""}`}>Sign up
                        </button>
                        </Link>
                        </li>
                        )}
                        
                        
                        {user ? ( 
                        
                            <li>
                            <Link className="lg:px-5 py-2 block hover:text-darksalmon font-semibold hover:scale-110 ease-in duration-300" href="#">Log out</Link>
                            </li>): (
                            <li> <Link href="/login" passHref>
                            <button className={`px-5 py-2 block bg-black text-white font-semibold border border-black cursor-pointer hover:bg-white hover:text-black hover:border-black mt-0 rounded-lg shadow hover:scale-110 ease-in duration-300 ${open ? "my-2 ml-0.5" : ""}`}>Login</button>
                            </Link>
                            </li>
                            )}
                            
                            {/* (
                            <li>
                            <Link className="lg:px-5 py-2 block hover:text-darksalmon font-semibold hover:scale-110 ease-in duration-300" href="#">Donate</Link>
                            </li>
                            ):
                            (
                            <li>
                            <Link className="lg:px-5 py-2 block hover:text-darksalmon font-semibold hover:scale-110 ease-in duration-300 mr-4" href="#">Contact</Link>
                            </li>
                            )} */}


                        
                    </ul>
                </nav>
            </div>
            
            
        </header>
    );
    
}
export default MainNavigation;