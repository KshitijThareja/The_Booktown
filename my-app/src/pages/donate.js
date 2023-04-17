import MainNavigation from "./main-navigation";
import { useState, useContext } from "react";
import Link from "next/link";
import AuthenticationContext from "@/context/AuthenticationContext";
import Footer from "./footer";
import axios from "axios";

const DonatePage=()=> {
  const [email, setEmail] = useState(" ");
  const [full_name, setFull_name] = useState(" ");
  const [phone_no, setPhone_no] = useState(" ");
  const [city, setCity] = useState(" ");
  const [no_of_books, setNo_of_books] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [pin_code, setPin_code] = useState(" ");
//   const [submit, setSubmit] = useState(false);
  const { user } = useContext(AuthenticationContext);
  const DonationInfo= async()=>{
    let formField= new FormData()
    formField.append("email",email)
    formField.append("full_name",full_name)
    formField.append("phone_no",phone_no)
    formField.append("city",city)
    formField.append("address",address)
    formField.append("pin_code",pin_code)
    formField.append("no_of_books",no_of_books)
 
    await axios({
      method: "post",
      url: "http://localhost:8000/api/book",
      data: formField,
    }).then(response=>{
      console.log(response.data);
    })

  }
  


  return (
    <div className="">
      <MainNavigation />
      <div className="flex">
        <div
          style={{
            backgroundColor: "white",
            height: "10vh",
            width: "210vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-items-center md:place-items-center">
        <div className="sm:place-self-center">
          <img
            className="rounded-2xl w-[21rem] h-[27rem] md:w-[38.25rem] md:h-[44.25rem]"
            alt=""
            src="/dab20razorpay20lead20photo-koznvw5y6htr2qjpeg@2x.png"
          />
        </div>
        {user ? (
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
                      placeholder="Enter your phone number XXX-XXX-XXXX"
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
                  </div>
                  <div className=" items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                    <label
                      for="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      I agree with the{" "}
                      <a
                        href="#"
                        className="text-darksalmon hover:underline dark:text-darksalmon hover:scale-50 ease-in duration-300 "
                      >
                        terms and conditions
                      </a>
                      .
                    </label>
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="text-white bg-darksalmon hover:bg-white hover:text-darksalmon border-darksalmon font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                      onClick={DonationInfo}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 h-[20rem] object-center place-items-center bg-mistyrose">
              <div className="text-center justify-self-center sm:justify-self-center md:text-center md:ml-3">
                <h2 className="text-black text-[1.5rem] md:text-[2rem]">
                  Donate a book to Bookown Foundation
                </h2>
              </div>
              <div className=" text-center h-[2rem] justify-self-center sm:justify-self-center md:text-center md:ml-3">
                <h3 className="text-darksalmon md:text-[1.4rem]">
                  #NewChapterForOldBooks.
                </h3>
              </div>
              <div className="text-[1.3rem] text-black font-quicksand">
                Please login to fill the donation form
              </div>
              <div className="justify-self-center">
                <Link href="/login" passHref>
                  <button className="px-6 py-2 block bg-darksalmon text-white font-semibold border border-darksalmon cursor-pointer hover:bg-white hover:text-darksalmon rounded-lg shadow hover:scale-110 ease-in duration-300">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        
      </div>
      <Footer />
      
    </div>
  );
}
export default DonatePage;