import Head from "next/head";
import MainNavigation from "./main-navigation";
import AuthenticationContext from '../context/AuthenticationContext'
import { useState, useContext} from "react";
import {FaFacebookF, FaEnvelope, FaRegEnvelope} from 'react-icons/fa';
import axios from "axios";
import { useRouter } from "next/router";
function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const {login} = useContext(AuthenticationContext)
    const submitHandler = e => {
        e.preventDefault();
        console.log(username)
        console.log(password)
        login({username, password})
    }
  
    return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-mistyrose">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                <div className="w-3/5 p-5">
                    <div className="hidden sm:block">
                    <img src="/your-place-to-readremovebgpreview-1@2x.png" width={210} height={65} />
                    </div>
                    {/* <div className="hidden sm:block text-left font-bold">
                        <span className="text-darksalmon">The</span><span className="text-yellow-400">BookTown</span>
                    </div> */}
                    <div className="py-10">
                        <h2 className="text-3xl font-bold text-darksalmon mb-2">Sign in to your account</h2>
                        <div className="border-2 border-solid w-10 border-darksalmon inline-block mb-2"></div>
                    </div>
                    <div className="flex flex-col items-center ">
                    <form onSubmit={submitHandler}>
                        <div className="bg-gray-50 w-64 p-2 flex items-center">
                        <input type="text" id="username" className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon block w-full p-2.5  flex-1" placeholder="username/Username" onChange={e => setUsername(e.target.value)} value={username} required />

                        </div>
                        <div className="bg-gray-50 w-64 p-2 flex items-center">
                        <input type="text" id="password" className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon block w-full p-2.5 flex-1" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} required />

                        </div>
                        <div className="flex w-64 mb-5 mt-7">
                            <label className="flex items-center text-[0.9rem]"><input type="checkbox" name="remember" className="mr-1"></input>Remember me</label>
                            <a href="#" className="text-[0.8rem] ml-7 mt-0.5">Forgot Password?</a>
                        </div>
                        <button className=" border border-darksalmon text-darksalmon bg-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-darksalmon hover:text-white" type="submit">Sign in</button>
                    </form>
                    </div>
                    
                    
                </div>
                <div className="w-2/5 bg-darksalmon text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                    <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
                    <div className="border-2 border-solid w-10 border-white inline-block mb-2"></div>
                    <p className="mb-2 mt-2 font-semibold ">Please fill up your details to login</p>
                    <p className="mt-4 text-[0.9rem]">Don't have an account?<span className="hover:scale-10 ease-in duration-300"><a href="/signup" className="underline font-semibold ml-2 hover:scale-90 ease-in duration-300">Sign Up</a></span> </p>
                    </div>

            </div>
        </main>

    </div>
    )
}
export default Login;