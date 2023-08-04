"use client";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiEyeOff, FiEye } from "react-icons/fi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Login from "./Login";
const Home = () => {
  const [authForm, setAuthForm] = useState("signUp");
  const [country, setCountry] = useState([]);
  const [showPass, setShowPass] = useState(false);

  // react hook form
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirm_password) {
      setError("confirm_password", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }
    console.log(data);
  };

  // swiper pagination
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  // get all country
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  // Custom validation function to check for uppercase, lowercase, and symbol
  const validatePassword = (value) => {
    const caseRegex = /^(?=.*?[A-Z])(?=.*?[a-z]).*$/;
    const symbolRegex = /^(?=.*[!@#$%^&*])/;
    if (value.length < 8) {
      return "8 characters minimum";
    } else if (!caseRegex.test(value)) {
      return "Upper & lower case letters";
    } else if (!symbolRegex.test(value)) {
      return "A symbol";
    }
    return true;
  };

  return (
    <div className="flex h-screen">
      {/* left side of auth page */}
      <div className="w-1/2 bg-[#FFF4EB] px-16 pt-16 relative">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            {/* star icon */}
            <div className="flex items-center gap-x-1">
              <BsStarFill className="text-xl" />
              <BsStarFill className="text-xl" />
              <BsStarFill className="text-xl" />
              <BsStarFill className="text-xl" />
              <BsStarFill className="text-xl" />
            </div>
            {/* text */}
            <p className="text-3xl mt-3">
              As an international student planning to pursue higher education, I
              knew I had to take the PTE exam to prove my English language
              proficiency. To prepare for this crucial test, I decided to try
              out "Peter's PTE" mock test software, and I can confidently say it
              has been an invaluable asset in my preparation journey.
            </p>
            <p className="text-base font-medium mt-7">
              - Tia Giamory, Scored 82 in PTE Exam
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 w-[500px] h-[650px]">
              <div className="w-full h-full relative">
                <Image
                  className="object-cover"
                  src="/auth-image.png"
                  fill
                  alt="auth image"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* star icon */}
            <div className="flex items-center gap-x-1">
              <BsStarFill className="text-xl" />
              <BsStarFill className="text-xl" />
              <BsStarFill className="text-xl" />
              <BsStarFill className="text-xl" />
              <BsStarFill className="text-xl" />
            </div>
            {/* text */}
            <p className="text-3xl mt-3">
              As an international student planning to pursue higher education, I
              knew I had to take the PTE exam to prove my English language
              proficiency. To prepare for this crucial test, I decided to try
              out "Peter's PTE" mock test software, and I can confidently say it
              has been an invaluable asset in my preparation journey.
            </p>
            <p className="text-base font-medium mt-7">
              - Tia Giamory, Scored 82 in PTE Exam
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 w-[500px] h-[650px]">
              <div className="w-full h-full relative">
                <Image
                  className="object-cover"
                  src="/auth-image.png"
                  fill
                  alt="auth image"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* star icon */}
            <div className="flex items-center gap-x-1">
              <BsStarFill className="text-xl" />
              <BsStarFill className="text-xl" />
              <BsStarFill className="text-xl" />
              <BsStarFill className="text-xl" />
              <BsStarFill className="text-xl" />
            </div>
            {/* text */}
            <p className="text-3xl mt-3">
              As an international student planning to pursue higher education, I
              knew I had to take the PTE exam to prove my English language
              proficiency. To prepare for this crucial test, I decided to try
              out "Peter's PTE" mock test software, and I can confidently say it
              has been an invaluable asset in my preparation journey.
            </p>
            <p className="text-base font-medium mt-7">
              - Tia Giamory, Scored 82 in PTE Exam
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 w-[500px] h-[650px]">
              <div className="w-full h-full relative">
                <Image
                  className="object-cover"
                  src="/auth-image.png"
                  fill
                  alt="auth image"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* login page bg shape */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-full h-[391px]">
          <div className="w-full h-full relative">
            <Image
              className="object-cover"
              src="/bg-shape.png"
              fill
              alt="auth image"
            />
          </div>
        </div>
      </div>

      {/* right side auth forms */}
      <div className="w-1/2 flex flex-col items-center px-[150px] justify-center">
        {/* site logo */}
        <div className="w-[305px] h-[107px]">
          <div className="w-full h-full relative">
            <Image
              className="object-cover"
              src="/logo.png"
              fill
              alt="auth image"
            />
          </div>
        </div>
        {/* login heading */}
        <h1 className="text-6xl font-semibold uppercase mt-4">
          THE MOST ACCURATE
        </h1>
        <h2 className="text-4xl font-semibold mt-2">
          PTE Mock Test & Practice{" "}
        </h2>
        {/* login and signup toggle button */}
        <div className="w-full bg-[#FFF4EB] rounded-[32px] flex items-center justify-between py-2 px-4 my-4">
          <button
            onClick={() => setAuthForm("login")}
            className={`${
              authForm === "login"
                ? "py-6 px-14 rounded-[22px] text-white bg-[#4399FF]"
                : "py-6 px-14 rounded-[22px] text-black bg-transparent"
            } duration-300`}
          >
            I am already a USER
          </button>
          <button
            onClick={() => setAuthForm("signUp")}
            className={`${
              authForm === "signUp"
                ? "py-6 px-14 rounded-[22px] text-white bg-[#4399FF]"
                : "py-6 px-14 rounded-[22px] text-black bg-transparent"
            } duration-300`}
          >
            I am NEW to PETER’S PTE
          </button>
        </div>

        {/* Login Form */}
        {authForm === "login" ? (
          <Login />
        ) : (
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4 space-y-2 bg-[#FFF4EB] rounded-[32px] w-full">
              <div className="flex items-center gap-x-3">
                <input
                  className={`bg-white w-full text-[#616161] placeholder:text-[#B9B9B9] py-3 px-4 border ${
                    errors?.first_name && "border-red-700"
                  } border-[#B9B9B9] rounded-[16px] outline-none`}
                  {...register("first_name", {
                    required: "First name is required",
                  })}
                  type="text"
                  placeholder="Name"
                />
                <input
                  className={`bg-white w-full text-[#616161] placeholder:text-[#B9B9B9] py-3 px-4 border ${
                    errors?.email && "border-red-700"
                  } border-[#B9B9B9] rounded-[16px] outline-none`}
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  placeholder="myiosio@gmail.com"
                />
              </div>
              <div className="flex items-center gap-x-3">
                <select
                  className={`bg-white w-2/5 text-[#616161] placeholder:text-[#B9B9B9] py-3 px-4 border ${
                    errors?.country && "border-red-700"
                  } border-[#B9B9B9] rounded-[16px] outline-none`}
                  {...register("country", {
                    required: "Country is required",
                  })}
                >
                  <option value="">Country</option>
                  {country?.map((country, i) => (
                    <option key={i} value={country?.name?.common}>
                      {country?.name?.common}
                    </option>
                  ))}
                </select>

                <input
                  className={`bg-white w-full text-[#616161] placeholder:text-[#B9B9B9] py-3 px-4 border ${
                    errors?.phone && "border-red-700"
                  } border-[#B9B9B9] rounded-[16px] outline-none`}
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  type="number"
                  placeholder="01739398952"
                />
              </div>
              <div className="flex items-center gap-x-3">
                <div className="relative w-full">
                  <input
                    className={`bg-white w-full text-[#616161] placeholder:text-[#B9B9B9] py-3 px-4 border ${
                      errors?.password && "border-red-700"
                    } border-[#B9B9B9] rounded-[16px] outline-none`}
                    {...register("password", {
                      required: "Password is required",
                      validate: validatePassword,
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
                <div className="relative w-full">
                  <input
                    className={`bg-white w-full text-[#616161] placeholder:text-[#B9B9B9] py-3 px-4 border ${
                      errors?.confirm_password && "border-red-700"
                    } border-[#B9B9B9] rounded-[16px] outline-none`}
                    {...register("confirm_password", {
                      required: "Password is required",
                    })}
                    type={showPass === true ? "text" : "password"}
                    placeholder="Confirm Password"
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
              <ul>
                {errors.password &&
                  errors?.password?.message === "8 characters minimum" && (
                    <li className={`list-disc ml-5 text-sm text-[#849900]`}>
                      {errors?.password?.message}
                    </li>
                  )}
                {errors.password &&
                  errors?.password?.message ===
                    "Upper & lower case letters" && (
                    <li className={`list-disc ml-5 text-sm text-[#849900]`}>
                      {errors?.password?.message}
                    </li>
                  )}
                {errors.password &&
                  errors?.password?.message === "A symbol" && (
                    <li className={`list-disc ml-5 text-sm text-[#849900]`}>
                      {errors?.password?.message}
                    </li>
                  )}
                {errors.confirm_password &&
                  errors?.confirm_password?.message && (
                    <li className={`list-disc ml-5 text-sm text-[#849900]`}>
                      {errors?.confirm_password?.message}
                    </li>
                  )}
              </ul>
            </div>
            {/* login button */}
            <button
              type="submit"
              className="py-5 w-full mt-2 font-semibold text-3xl text-center text-white bg-[#4399FF] rounded-[22px]"
            >
              Join Now
            </button>
          </form>
        )}

        <p className="text-sm text-[#616161] mt-2 text-center">
          By clicking JOIN NOW, you are agreeing to the T&C sand Privacy Policy
        </p>
        <p className="text-base text-[#616161] mt-5 text-center">
          Or continue with
        </p>
        <div className="flex items-center justify-center gap-x-3 mt-3">
          <button className="py-3 px-10 rounded-[22px] bg-[#4399ff]">
            <FaFacebookF className="text-white text-[40px]" />
          </button>
          <button className="py-3 px-10 rounded-[22px] border border-[#B9B9B9]">
            <FcGoogle className="text-[40px]" />
          </button>
          <button className="py-3 px-10 rounded-[22px] bg-black">
            <AiFillApple className="text-white text-[40px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
