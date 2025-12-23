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
      <div className="flex items-center gap-4 mt-10">
        <button className='bg-[#2579F4] px-4 py-2 rounded-lg hover:bg-[#2262C7] text-white font-bold text-[14px] trasition duration-150 ease-in-out tracking-wide shadow-lg text-shadow-md cursor-pointer'> Get Started</button>
        <button className="px-4 py-2 rounded-lg hover:bg-neutral-300 text-neutral-900 font-bold text-shadow-md tracking-wide cursor-pointer "> Pricing &rarr; </button>
      </div>
    </div>
  );
};

export default Hero;
