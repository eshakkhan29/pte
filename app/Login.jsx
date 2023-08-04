"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  // react hook form
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4 space-y-2 bg-[#FFF4EB] rounded-[32px] w-full">
        <div className="w-full">
          <input
            className={`bg-white w-full text-[#616161] placeholder:text-[#B9B9B9] py-3 px-4 border border-[#B9B9B9] rounded-[16px] outline-none`}
            {...register("email", {
              required: "Password is required",
            })}
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="relative w-full">
          <input
            className={`bg-white w-full text-[#616161] placeholder:text-[#B9B9B9] py-3 px-4 border border-[#B9B9B9] rounded-[16px] outline-none`}
            {...register("password", {
              required: "Password is required",
            })}
            type={showPass === true ? "text" : "password"}
            placeholder="Password"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            {showPass === true ? (
              <FiEye
                className="text-xl cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <FiEyeOff
                className="text-xl cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              />
            )}
          </div>
        </div>
      </div>
      {/* login button */}
      <button
        type="submit"
        className="py-5 w-full mt-2 font-semibold text-3xl text-center text-white bg-[#4399FF] rounded-[22px]"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
