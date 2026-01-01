import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function LoginHome() {
  const [open, setOpen] = useState(false);
  const navigation = useNavigate();
  let links = [
    {
      title: "Home",
      to: "/",
    },

    {
      title: "About",
      to: "/About",
    },

    {
      title: "Events",
      to: "/Events",
    },

    {
      title: "Gallery",
      to: "/Gallery",
    },

    {
      title: "Contact",
      to: "/Contact",
    },
  ];
  return (
    <> 
    <div className=" px-3 py-5 flex items-center justify-between w-full text-white bg-black">
      <div className="flex items-center">
        <img
          className="size-9"
          src="https://www.svgrepo.com/show/416937/mic-microphone-podcast.svg"
          alt="mic svg"
        />
        <div className="flex flex-col items-center">
          <div className="uppercase text-lg tracking-wider text-gray-300">
            harmoni
          </div>
          <div className="uppercase text-[8px] tracking-wider text-orange-500 text-blue-900500">
            event management
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        {links.map((elem, idx) => {
          return (
            <Link
            key={idx}
              className="transform-none text-lg hover:text-gray-300"
              to={elem.to}
            >
              {" "}
              {elem.title}{" "}
            </Link>
          );
        })}
      </div>

      <div>
        <button onClick={() => navigation("/Login")} className="px-4 py-1 text-lg rounded-md active:scale-95 bg-neutral-400 hover:text-neutral-200 transition duration-100 ease-in-out align-middle"> Login </button>
      </div>
    </div>
    </>
  );

};

export default LoginHome;
