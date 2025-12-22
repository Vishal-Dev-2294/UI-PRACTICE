import React from "react";

const Hero = () => {
  return (
    <div className="px-4 py-2 flex items-center flex-col my-20 w-full ">
      <button className="border px-4 py-1 rounded-full hover:bg-gray-300 border-neutral-300 bg-gray-200 text-neutral-600 text-sm font-bold transition duration-200">
        We're hiring Founding Ruby Engineers {"->"}
      </button>
      <div>
        <h1 className="font-medium mt-10 text-7xl tracking-tighter text-center">Magically simplify <br /> accounting and taxes</h1>
        <p className=" max-w-2xl mx-auto text-center mt-6 text-xl text-neutral-800"> Automated bookkeeping. Effortless tax filing. Financial clarity. <br /> Set up in 10 mins. Back to building by 11:33pm.</p>
      </div>
    </div>
  );
};

export default Hero;
