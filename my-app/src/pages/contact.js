import MainNavigation from "./main-navigation";
import Footer from "./footer";
import Map from "../components";
import { useState, useContext } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [full_name, setFull_name] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [city, setCity] = useState("");
  const [no_of_books, setNo_of_books] = useState("");
  const [address, setAddress] = useState("");
  const [pin_code, setPin_code] = useState("");
  const [showModal, setShowModal] = useState(false);
  const DonationInfo = async () => {
    // for(i=0;i<json.length; i++){
    //   if(json[i].category=='Pre-Primary'){
    //     // console.log('yes');
    //     setPre_primary(json[i].num);
    //   }
    //   else if(json[i].category=='Primary'){
    //     setPrimary(json[i].num);
    //   }
    // }
    let formField = new FormData();
    formField.append("email", email);
    formField.append("full_name", full_name);
    formField.append("phone_no", phone_no);
    formField.append("city", city);
    formField.append("address", address);
    formField.append("pin_code", pin_code);
    formField.append("no_of_books", no_of_books);
    formField.append("username", a.username);
    formField.append("primary", primary);
    formField.append("pre_primary", pre_primary);
    formField.append("secondary", secondary);
    formField.append("senior_secondary", senior_secondary);
    // for(i=0;i<json.length; i++){
    //   if(json[i].category=='Pre-Primary'){
    //     console.log('yes');
    //     formField.append("primary", json[i].num);
    //   }
    //   else if(json[i].category=='Primary'){
    //     formField.append("pre_primary", json[i].num);
    //   }
    // }
    

    await axios({
      method: "post",
      url: "http://localhost:8000/api/book",
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
              <div className="grid grid-cols-1 gap-6 mt-4 sm:place-items-center justify-items-center py-6 md:justify-self-end md:mt-20 md:ml-20">
                <div className="text-center h-[3rem] md:mb-10 justify-self-center sm:justify-self-center md:text-center md:ml-3 ">
                  <h2 className="text-black text-[1.5rem] md:text-[2rem]">
                    Donate a book to Booktown Foundation
                  </h2>
                </div>
                <div className="text-center h-[3rem] justify-self-center sm:justify-self-center md:text-center md:ml-3">
                  <h3 className="text-darksalmon text-[1.4rem]">
                    #NewChapterForOldBooks.
                  </h3>
                </div>
                <div className="w-[20rem] md:w-[20rem]">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                    placeholder="Email address"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="w-[20rem] md:w-[20rem]">
                  <label
                    for="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                    placeholder="Address"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                  />
                </div>
                <div className="w-[20rem] md:w-[20rem]">
                  <label
                    for="city"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                    placeholder="City"
                    required
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  />
                </div>
                <div className="w-[20rem] md:w-[20rem]">
                  <label
                    for="pincode"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pincode
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                    placeholder="Area pincode"
                    required
                    onChange={(e) => setPin_code(e.target.value)}
                    value={pin_code}
                  />
                </div>
                <div className="w-[20rem] md:w-[20rem]">
                  <label
                    htmlFor="n_books"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Number of books to donate
                  </label>
                  <input
                    type="text"
                    id="n_books"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                    placeholder="Number of books"
                    required
                    onChange={(e) => setNo_of_books(e.target.value)}
                    value={no_of_books}
                  />
                  {/* <input
                      type="hidden"
                      id="username"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                    /> */}
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