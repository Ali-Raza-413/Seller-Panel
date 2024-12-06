"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function SignIn() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/auth/otp");
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left Section (Form) */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="space-y-8 bg-white p-8 rounded-xl shadow-lg w-[60%]">
          <h1 className="text-lg text-center font-bold">Sign In</h1>
          <form onSubmit={handleClick}>
            <div className="flex flex-col space-y-20">
              <PhoneInput
                defaultCountry="SA"
                value={phone}
                onChange={setPhone}
                className="custom-phone-input"
              />

              <button
                type="submit"
                className="w-full bg-black text-white text-[17px] font-normal px-6 py-3 rounded-md font-inter"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Right Section (Image) */}
      <div className="flex-1 relative flex justify-end h-screen">
        <div className="absolute left-20 maxw-[100%] h-full lg:max-h-full mx-auto inset-0 overflow-hidden">
          {/* Image with Full Screen Height */}
          <img
            src="/img1.png"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
