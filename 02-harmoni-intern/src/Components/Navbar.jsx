function Navbar() {
  let links = [
    {
      title: "Home",
      href: "",
    },

    {
      title: "About",
      href: "",
    },

    {
      title: "Events",
      href: "",
    },

    {
      title: "gallery",
      href: "",
    },

    {
      title: "Contact",
      href: "",
    },
  ];
  return (
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
      <div className="flex items-center gap-3">
        {links.map((elem, idx) => {
          return (
            <a
              className="transform-none text-xl hover:text-gray-300"
              href={elem.href}
            >
              {" "}
              {elem.title}{" "}
            </a>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <img
          className="size-10 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZ1Vm9DCt3CaDGvAII2F_I7HiG6r71giIqA&s"
          alt="sparks logo"
        />
        <div className="text-[14px]"> sparks user </div>
      </div>
    </div>
  );
}

export default Navbar;
