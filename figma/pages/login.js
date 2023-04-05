const Login = () => {
  return (
    <div className="relative bg-white w-full h-[109.31rem] overflow-hidden text-left text-[1.88rem] text-black font-space-grotesk">
      <img
        className="absolute top-[18.75rem] left-[95.69rem] w-[32rem] h-[11.44rem] object-cover"
        alt=""
        src="/your-place-to-readremovebgpreview-11@2x.png"
      />
      <div className="absolute top-[104.69rem] left-[0rem] bg-gray-700 w-[146.38rem] h-[4.69rem] text-center text-[1.38rem] text-white font-open-sans">
        <div className="absolute top-[1.75rem] left-[18.81rem] w-[120rem] h-[1.7rem]">
          <div className="absolute top-[-0.5rem] left-[33.81rem] leading-[1.7rem] flex items-center justify-center w-[35.94rem] h-[2rem]">
            Copyright ©2023 booktownfoundation.org. Designed By
          </div>
          <div className="absolute top-[-0.12rem] left-[69.81rem] leading-[1.7rem] font-semibold text-darksalmon flex items-center justify-center w-[5rem] h-[1.38rem]">
            KT-KS
          </div>
        </div>
      </div>
      <div className="absolute top-[32.94rem] left-[99.38rem] text-[3.5rem] font-extrabold font-manrope inline-block w-[27rem] h-[5.75rem]">{`Welcome back `}</div>
      <div className="absolute top-[43.5rem] left-[100.13rem] inline-block w-[25.06rem] h-[2.88rem]">
        Please enter your details.
      </div>
      <div className="absolute top-[62.5rem] left-[105rem] text-[1.5rem] [text-decoration:underline] inline-block w-[14.19rem] h-[2.38rem]">{`Forgot Password? `}</div>
      <div className="absolute top-[48.56rem] left-[95.19rem] box-border w-[33.88rem] h-[4.5rem] flex flex-row py-[0.69rem] px-[0rem] items-start justify-start text-[1.63rem] border-b-[2px] border-solid border-gainsboro-100">
        <div className="relative">Email / Username</div>
      </div>
      <div className="absolute top-[55.81rem] left-[95.19rem] box-border w-[33.88rem] h-[4.5rem] flex flex-row py-[0.69rem] px-[0rem] items-start justify-start text-[1.63rem] border-b-[1px] border-solid border-gainsboro-100">
        <div className="relative">Password</div>
      </div>
      <div className="absolute top-[80.06rem] left-[95.69rem] w-[32.81rem] h-[2.44rem] flex flex-row items-start justify-start gap-[0.5rem] text-[1.56rem]">
        <div className="relative">Don’t have an account?</div>
        <div className="relative [text-decoration:underline] font-medium">
          Sign up for free
        </div>
      </div>
      <div className="absolute top-[69.5rem] left-[97.5rem] rounded-md bg-gray-500 w-[29.25rem] h-[5.94rem] flex flex-row py-[1.25rem] px-[2.25rem] box-border items-center justify-center text-white">
        <div className="relative">Log in</div>
      </div>
      <div className="absolute top-[0rem] left-[0rem] w-[76.5rem] h-[104.69rem]" />
      <div className="absolute top-[0rem] left-[0rem] bg-darksalmon w-[77.25rem] h-[104.69rem]" />
    </div>
  );
};

export default Login;
