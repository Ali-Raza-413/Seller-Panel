"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function OtpVerification() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const router = useRouter();

  const handleChange = (value, index) => {
    if (/^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus on the next input
      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    const newOtp = [...otp];

    // Handle backspace
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        // Move to the previous input if current input is empty
        if (index > 0) {
          const prevInput = document.getElementById(`otp-input-${index - 1}`);
          if (prevInput) prevInput.focus();
          newOtp[index - 1] = ""; // Clear the previous input
        }
      } else {
        // Clear current input
        newOtp[index] = "";
      }
      setOtp(newOtp);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Entered OTP:", otp.join(""));
    router.push("/pages/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left Section (Form) */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="space-y-8 bg-white p-8 rounded-xl shadow-lg w-[60%]">
          <h1 className="text-lg text-center font-bold">Sign In</h1>

          <form onSubmit={handleClick}>
            <div className="flex flex-col space-y-8">
              {/* OTP Input Fields */}
              <div className="flex justify-center gap-4">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    maxLength="1"
                    className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white text-[17px] font-normal px-6 py-3 rounded-md font-inter"
              >
                Verify OTP
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

export default OtpVerification;
