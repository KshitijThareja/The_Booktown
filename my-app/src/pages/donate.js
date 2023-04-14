import MainNavigation from "./main-navigation";
const DonatePage = () => {
  return (
    <div className="">
      <MainNavigation />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:w-[100rem] md:place-items-center">
          <div className="sm:place-self-center">
            <img
              className="rounded-2xl w-[40.25rem] h-[46.25rem]"
              alt=""
              src="/dab20razorpay20lead20photo-koznvw5y6htr2qjpeg@2x.png"
            />
          </div>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 justify-items-center w-[39rem] py-6 md:justify-self-end md:mt-20 md:ml-20">
          <div className="w-[29.56rem] text-center h-[4rem] md:h-[3rem] justify-self-center sm:justify-self-center md:text-center md:ml-3 md:w-[45rem] ">
            <h2 className="text-black text-[2rem]">
            Donate a book to Booktown Foundation
            </h2>
          </div>
          <div className="w-[29.56rem] text-center h-[3rem] justify-self-center sm:justify-self-center md:text-center md:ml-3 md:w-[45rem] ">
            <h3 className="text-darksalmon text-[1.4rem]">
            #NewChapterForOldBooks.
            </h3>
          </div>
            <div className="w-[20rem] md:w-[30rem]">
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
                  placeholder="Enter full name"
                  required
                />
      
            </div>

            <div className="w-[20rem] md:w-[30rem]">
              <label
                for="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                placeholder="Enter your phone number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>

            <div className="w-[20rem] md:w-[30rem]">
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
              />
            </div>
            <div className="w-[20rem] md:w-[30rem]">
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
              />
            </div>
            <div className="w-[20rem] md:w-[30rem]">
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
              />
            </div>
            <div className="w-[20rem] md:w-[30rem]">
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
              />
            </div>
            <div className="w-[20rem] md:w-[30rem]">
              <label
                for="n_books"
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
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonatePage;
