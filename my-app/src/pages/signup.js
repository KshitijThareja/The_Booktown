import Head from "next/head";
import AuthenticationContext from '../context/AuthenticationContext'
import { useState, useContext } from "react";
import { FaFacebookF, FaEnvelope, FaRegEnvelope } from 'react-icons/fa';
import axios from "axios";
import { useRouter } from "next/router";
function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const router = useRouter()
    const { register } = useContext(AuthenticationContext)
    // const {login} = useContext(AuthenticationContext)
    const submitHandler = e => {
        e.preventDefault();

        console.log({username, email, password})
        register({ username, email, password })
    }


    return (

        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-mistyrose">
               
           
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="grid grid-cols-1 ">
                <div>
                <div className="bg-white rounded-2xl shadow-2xl flex max-w-4xl">
                    <div className="p-5">
                        <div className="hidden sm:block">
                            <img src="/your-place-to-readremovebgpreview-1@2x.png" width={210} height={65} />
                        </div>
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-darksalmon mb-2">Create a new account</h2>
                            <div className="border-2 border-solid w-10 border-darksalmon inline-block mb-2"></div>
                        </div>
                        <div className="flex flex-col items-center ">
                            <form onSubmit={submitHandler}>
                                <div className="bg-gray-50 w-64 p-2 flex items-center">
                                    <input type="text" id="email" className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon block w-full p-2.5  flex-1" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} required />

                                </div>
                                <div className="bg-gray-50 w-64 p-2 flex items-center">
                                    <input type="text" id="username " className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon block w-full p-2.5  flex-1" placeholder="Username" onChange={e => setUsername(e.target.value)} value={username} required />

                                </div>
                                <div className="bg-gray-50 w-64 p-2 flex items-center">
                                    <input type="text" id="password" className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon block w-full p-2.5 flex-1" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} required />

                                </div>
                                <div className="flex w-64 mb-5 mt-7">
                                    <label className="flex items-center text-[0.9rem]"><input type="checkbox" name="remember" className="mr-1"></input>Remember me</label>
                                </div>
                                <button className=" border border-darksalmon text-darksalmon bg-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-darksalmon hover:text-white" type="submit">Sign up</button>
                            </form>
                            </div>
                        </div>

                    </div>
                    <div>
                    <div className="  bg-darksalmon text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                        <h2 className="text-3xl font-bold mb-2">Register</h2>
                        <div className="border-2 border-solid w-10 border-white inline-block mb-2"></div>
                        <p className="mb-2 mt-2 font-semibold ">Be a part of the change we are trying to bring!</p>
                        <p className="mt-4 text-[0.9rem]">Already have an account?<span className="hover:scale-10 ease-in duration-300"><a href="/login" className="underline font-semibold ml-2 hover:scale-90 ease-in duration-300">Login</a></span> </p>
                    </div>
                    </div>

                </div>
            </div>
            </main>

        </div>

    )
}


export default Signup;