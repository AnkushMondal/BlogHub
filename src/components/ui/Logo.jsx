import React from "react";

const Logo = ({ width = "100px" }) => {
  return (
    <div
      style={{ width: width, aspectRatio: "1 / 1" }}
      className="flex items-center justify-center"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="url(#paint0_linear)"
          stroke="#e2e8f0"
          strokeWidth="2"
        />

        <path
          d="M35 25V75H55C65 75 72 68 72 58C72 51 68 46 62 44C66 42 68 37 68 32C68 25 63 20 55 20H35V25ZM42 30H55C58.8 30 61 31.8 61 35C61 38.2 58.8 40 55 40H42V30ZM42 48H55C59.6 48 64 50 64 55C64 60 59.6 62 55 62H42V48Z"
          fill="white"
        />

        <path d="M78 50L88 40V60L78 50Z" fill="#4f46e5" />

        <defs>
          <linearGradient
            id="paint0_linear"
            x1="10"
            y1="10"
            x2="90"
            y2="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
