import MainNavigation from "./main-navigation";
import { useState, useContext } from "react";
import Link from "next/link";
import AuthenticationContext from "@/context/AuthenticationContext";
import Footer from "./footer";
import axios from "axios";

const DonatePage = () => {
  const [email, setEmail] = useState("");
  const [full_name, setFull_name] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [no_of_books, setNo_of_books] = useState("");
  const [address, setAddress] = useState("");
  const [pin_code, setPin_code] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [inputFields, setInputFields] = useState([
    {
      category: "",
      num: "",
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        category: "",
        num: "",
      },
    ]);
  };
  console.log(inputFields);
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const newInputField = inputFields.map(p =>
    p.value === 'Pre-Primary'
      ? { ...p, desc: 'pre-primary' }
      : p,
  
  );
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };
  // console.log(inputFields);
 
  var json = JSON.stringify(inputFields);
  console.log(json);
  var stringify = JSON.parse(json);
// for (var i = 0; i < stringify.length; i++) {
//   if(stringify[i]['category']=='Pre-Primary'){
//     //     // console.log('yes');
//         pre_primary=stringify[i]['num'];
//         console.log(pre_primary);
//       }
//       else if(stringify[i]['category']=='Primary'){
//         primary=stringify[i]['num'];
//         console.log(primary);
//       }
//       else if(stringify[i]['category']=='Secondary'){
//         secondary=stringify[i]['num'];
//         console.log(secondary);
//       }
//       else if(stringify[i]['category']=='Senior-Secondary'){
//         senior_secondary=stringify[i]['num'];
//         console.log(senior_secondary);
//       }
// }
  const { user } = useContext(AuthenticationContext);
  const a = user;

  // for(let i=0; i<inputFields.length; i++){
  //   if(inputFields[i].category=="Pre-Primary"){
  //     inputFields[i].num=init_cat;
  //     }
  //   }
  console.log(phone_no);
  const inputFieldsArray = JSON.stringify(inputFields);
  const savedInputFields = JSON.parse(inputFieldsArray);
  console.log(savedInputFields);

  const DonationInfo = async () => {

    let formField = new FormData();
    formField.append("email", email);
    formField.append("full_name", full_name);
    formField.append("phone_no", phone_no);
    formField.append("address", address);
    formField.append("pin_code", pin_code);
    formField.append("no_of_books", no_of_books);
    formField.append("username", a.username);
    // formField.append("primary", primary);
    // formField.append("pre_primary", pre_primary);
    // formField.append("secondary", secondary);
    // formField.append("senior_secondary", senior_secondary);


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
        <div className="sm:place-self-center align-self-center">
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
                {/* <div className="container">
                  <div className="row">
                    <div className="col-sm-8">
                      {inputFields.map((data, index) => {
                        const { category, num } = data;
                        return (
                          <div className="row my-3" key={index}>
                            <div className="col">
                              <div className="form-group">
                                <select
                                  alignRight
                                  title="Dropdown right"
                                  id="dropdown-menu-align-right"
                                  onChange={(evnt) => handleChange(index, evnt)}
                                  value={category}
                                  name="category"
                                  className="form-control"
                                >
                                  <option>Pre-Primary</option>
                                  <option>Primary</option>
                                  <option>Secondary</option>
                                  <option>Senior-Secondary</option>
                                </select>
                              </div>
                            </div>
                            <div className="col">
                              <input
                                type="text"
                                onChange={(evnt) => handleChange(index, evnt)}
                                value={num}
                                name="num"
                                className="form-control"
                                placeholder="Number of books"
                              />
                            </div>
                            <div className="col">
                              {inputFields.length !== 1 && (
                                <button
                                  className="btn btn-outline-danger"
                                  onClick={() => removeInputFields(index)}
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}

                      <div className="row">
                        <div className="col-sm-12">
                          <button
                            className="btn btn-outline-success"
                            onClick={addInputField}
                          >
                            Add New
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4"></div>
                  </div>
                </div> */}

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
                      onClick={() => setShowModal(true)}

                    >
                      terms and conditions
                    </a>
                  </label>
                  {showModal ? (
        <>
          <div
            className="justify-self-center items-center place-self-center mt-40 h-[30rem] md:mt-20 md:h-[43rem] overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Terms and conditions
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-1 text-slate-500 text-lg leading-relaxed">
                  <span className="font-bold text-black">Please read these Terms and Conditions carefully before using the book donation form on our website.</span><br/><br/>

<span className="font-semibold ">Acceptance of Terms and Conditions</span><br/>
By accessing or using the book donation form on our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not proceed with the donation process.<br/><br/>

<span className="font-semibold ">Book Donation Eligibility</span><br/>
2.1 The book donation form is intended for individuals or organizations who wish to donate books.<br/>
2.2 By submitting the donation form, you confirm that you are the legal owner of the books or have obtained the necessary permissions to donate them.<br/><br/>

<span className="font-semibold ">Book Donation Process</span><br/>
3.1 Complete and submit the book donation form with accurate and up-to-date information.<br/>
3.2 Once you submit the form, you grant us the right to review the details provided and accept or decline the donation at our discretion.<br/>
3.3 We reserve the right to refuse any book donation without providing a reason for the refusal.<br/><br/>

<span className="font-semibold ">Book Condition</span><br/>
4.1 By donating books, you confirm that the books are in good condition, free from excessive damage, mold, or other issues that may render them unfit for use.<br/>
4.2 We reserve the right to inspect the donated books upon receipt and determine their suitability for our purposes.<br/>
4.3 Books that do not meet our criteria may be declined or disposed of at our discretion.<br/><br/>

<span className="font-semibold ">Ownership and Rights</span><br/>
5.1 By donating books, you transfer ownership of the donated books to us.<br/>
5.2 We reserve the right to retain, sell, or dispose of the donated books as we see fit.<br/>
5.3 We may use the donated books for our own purposes, including but not limited to resale, distribution, or charitable activities.<br/><br/>

<span className="font-semibold ">Personal Information</span><br/>
6.1 By submitting the book donation form, you agree to provide accurate and complete personal information.<br/>
6.2 We will handle your personal information in accordance with our Privacy Policy, which is available on our website.<br/><br/>

<span className="font-semibold ">Liability</span><br/>
7.1 We make no guarantees or warranties regarding the suitability, quality, or condition of the donated books.<br/>
7.2 We shall not be held liable for any loss, damage, or injury arising from the donation, use, or handling of the donated books.<br/>
7.3 You agree to indemnify and hold us harmless from any claims, costs, or damages arising from your donation or breach of these Terms and Conditions.<br/><br/>

<span className="font-semibold ">Modifications and Termination</span><br/>
8.1 We reserve the right to modify or terminate the book donation form or these Terms and Conditions at any time without prior notice.<br/>
8.2 It is your responsibility to review the Terms and Conditions periodically for any changes.<br/>
8.3 Continued use of the book donation form after any modifications indicates your acceptance of the updated Terms and Conditions.<br/><br/>

<span className="font-semibold ">Governing Law</span><br/>
These Terms and Conditions shall be governed by and construed in accordance with the laws of Jurisdiction. Any disputes arising under or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of Jurisdiction.<br/><br/>

By using the book donation form, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-white hover:bg-darksalmon text-darksalmon font-semibold hover:text-white py-2 px-5 border border-darksalmon hover:border-darksalmon rounded  uppercase text-sm mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    

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
