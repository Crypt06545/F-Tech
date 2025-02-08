import React from "react";
import Lottie from "lottie-react";
import loader from "../assets/loti-error.json";
const Loader = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#414141] justify-center items-center">
      <Lottie className="w-[100px] " animationData={loader} />
    </div>
  );
};

export default Loader;
