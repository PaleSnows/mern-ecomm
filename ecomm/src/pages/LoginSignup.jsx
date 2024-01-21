import React from "react";
import { useState } from "react";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log(formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "applicaiton/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  };
  const signup = async () => {
    console.log(formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "applicaiton/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  };

  return (
    <div className="h-[770px] w-[100%] bg-slate-200 pt-[100px] mb-[50px]">
      <div className="w-[580px] h-[600px] bg-zinc-100  px-[60px] py-[40px] mx-[450px]">
        <h1 className="mx-1 font-semibold mb-2 text-3xl">{state}</h1>
        <div className="flex flex-col  ">
          {state === "Sign Up" ? (
            <input
              className="my-3 py-4 px-3"
              type="text"
              name="username"
              placeholder="Your Name"
              value={formData.username}
              onChange={changeHandler}
            />
          ) : (
            <></>
          )}
          <input
            className="my-3 px-3 py-4"
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={changeHandler}
          />
          <input
            className="my-3 px-3 py-4"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={changeHandler}
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
          className="rounded-3xl border p-3 my-4 bg-gray-400 text-white h-[62px] w-[155px]"
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="font-normal my-2 ml-2">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
              className="text-lg font-medium text-red-600 cursor-pointer"
            >
              Login here
            </span>{" "}
          </p>
        ) : (
          <p className="font-normal my-1 ml-2">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
              className="text-lg font-medium text-red-600 cursor-pointer"
            >
              Click here
            </span>{" "}
          </p>
        )}
        <div className="flex mt-3">
          <input className="mr-[10px] ml-2 " type="checkbox" name="" id="" />
          <p className="ml-[2px]">
            By continuing, i agree to the terms of use & privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
