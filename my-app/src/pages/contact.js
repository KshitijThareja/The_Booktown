import MainNavigation from "./main-navigation";
import Footer from "./footer";
import Map from "../components";
import { useState, useContext , useRef} from "react";
import * as React from 'react';
import axios from "axios";
import { Dropdown } from "@nextui-org/react";
import {SSRProvider, useIsSSR} from '@react-aria/ssr';
// import { NextUIProvider } from '@nextui-org/react';
// import { useSSR } from '@nextui-org/react';

const Contact = () => {
  // const { isBrowser, isServer } = useSSR()
  const [email, setEmail] = useState("");
  const [full_name, setFull_name] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [address, setAddress] = useState("");
  const [selected, setSelected] = React.useState(new Set(["Select type"]));
  const [ngo, setNgo] = useState("");
  const [org, setOrg] = useState("");
  const [query, setQuery] = useState("");
  const [website, setWebsite] = useState("");
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", "),
    [selected]
  );
  console.log(selectedValue);
  
  const DonationInfo = async () => {
   
    let formField = new FormData();
    formField.append("email", email);
    formField.append("name", full_name);
    formField.append("phone_no", phone_no);
    formField.append("address", address);
    formField.append("ngo", ngo);
    formField.append("org", org);
    formField.append("type", selectedValue);
    formField.append("website", website);
    formField.append("query", query);
  

    await axios({
      method: "post",
      url: "http://localhost:8000/api/contact",
      data: formField,
    }).then((response) => {
      console.log(response.data);
    });
  };
  return (
   
    <div className="">
    <MainNavigation />
    <div>
    <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:place-items-center justify-items-center py-6 md:justify-self-end md:mt-20 ">
              <div className="text-center h-[3rem] md:mb-10 justify-self-center sm:justify-self-center md:text-center md:ml-3 ">
                {/* <h2 className="text-black text-[1.5rem] md:text-[2rem]">
                    Donate a book to Booktown Foundation
                  </h2> */}
              </div>
              <div className="text-center h-[3rem] justify-self-center sm:justify-self-center md:text-center md:ml-3">
                <h3 className="text-black text-[1.8rem]">
                  Reach Out to us
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
                <div>
              <div className="w-[20rem] md:w-[20rem]">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 mt-1 dark:text-white"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Enter full name "
                  onChange={(e) => setFull_name(e.target.value)}
                  value={full_name}
                />
              </div>

              <div className="w-[20rem] md:w-[20rem]">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Enter your phone number"
                  required
                  onChange={(e) => setPhone_no(e.target.value)}
                  value={phone_no}
                />
              </div>

              <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 mb-8 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Email address"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              
              <div className="w-[20rem] md:w-[20rem]">
                <Dropdown>
                  <Dropdown.Button flat css={{ tt: "capitalize"}}>
                    {selectedValue}
                  </Dropdown.Button>
                  <Dropdown.Menu
                  
                    aria-label="Single selection actions"
                    color="secondary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selected}
                    onSelectionChange={setSelected}
                  >
                    <Dropdown.Item key="select type" >Select type</Dropdown.Item>
                    <Dropdown.Item key="individual" withDivider>Individual</Dropdown.Item>
                    <Dropdown.Item key="business">Business</Dropdown.Item>
                    <Dropdown.Item key="NGO">NGO</Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
              </div>
              </div>
              <div>
                {selectedValue=="NGO" ? (
                
                <div>
                  <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="ngo"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Registered name
                </label>
                <input
                  type="text"
                  id="ngo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Name registered with the Government"
                  required
                  onChange={(e) => setNgo(e.target.value)}
                  value={ngo}
                />

              </div>
                  <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Official address"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />

              </div>
              <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="website"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Website url (optional)"
                  onChange={(e) => setWebsite(e.target.value)}
                  value={website}
                />

              </div>
              <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="query"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  Enter your query:
                </label>
                <textarea
                  type="text"
                  id="query"
                  maxLength={500}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block h-[8rem] w-full p-2.5 "
                  placeholder="Ask anything you want to know!"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                />

              </div>
              </div>
              ): null}
              {selectedValue=="business" ? (
                
                <div>
                  <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="org"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name of business
                </label>
                <input
                  type="text"
                  id="org"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Officially registered name"
                  required
                  onChange={(e) => setOrg(e.target.value)}
                  value={org}
                />

              </div>
                  <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Official address"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />

              </div>
              <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="website"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Website url (optional)"
                  onChange={(e) => setWebsite(e.target.value)}
                  value={website}
                />

              </div>
              <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="query"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  Enter your query:
                </label>
                <textarea
                  type="text"
                  id="query"
                  maxLength={500}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block h-[8rem] w-full p-2.5 "
                  placeholder="Ask anything you want to know!"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                />

              </div>
              </div>
              ): null}
              {selectedValue=="individual" ? (
                
                <div>
              <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="query"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter your query:
                </label>
                <textarea
                  type="text"
                  id="query"
                  maxLength={500}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block h-[8rem] w-full p-2.5 "
                  placeholder="Ask anything you want to know!"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                />

              </div>
              </div>
              ): null}
              </div>

              </div>
              <div className="">
                <button
                  type="submit"
                  className="text-white bg-darksalmon hover:bg-white hover:text-darksalmon border-darksalmon font-medium rounded-lg text-sm w-full sm:w-auto px-9 py-2.5 text-center text-[1rem]"
                  onClick={DonationInfo}
                >
                  Submit
                </button>
              </div>
            </div>
            
          </form>
    </div>
      <div className="grid grid-cols-1 mt-20 justify-items-center sm:grid-cols-3 md:grid-cols-3 gap-y-6 ">
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