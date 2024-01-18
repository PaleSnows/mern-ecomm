import React from "react";

const LoginSignup = () => {
  return (
    <div className="h-[770px] w-[100%] bg-slate-200 pt-[100px] mb-[50px]">
      <div className="w-[580px] h-[600px] bg-zinc-100  px-[60px] py-[40px] mx-[450px]">
        <h1 className="mx-1 font-semibold mb-2 text-3xl">Sign Up</h1>
        <div className="flex flex-col  ">
          <input className="my-3 py-4" type="text" placeholder="Your Name" />
          <input className="my-3 py-4" type="email" placeholder="Email Address" />
          <input className="my-3 py-4" type="password" placeholder="Password" />
        </div>
        <button className="rounded-3xl border p-3 my-2 bg-gray-400 text-white h-[62px] w-[155px]  cursor-pointer">Continue</button>
        <p className='font-normal my-1 '>
          Already have an account? <span className="text-lg font-medium text-red-600">Login here</span>{" "}
        </p>
        <div className="flex mt-3">
          <input className="mr-[10px] " type="checkbox" name="" id="" />
          <p className="ml-[5px]">By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
