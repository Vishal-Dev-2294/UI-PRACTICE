import Hero from "./Hero";
import Navbar from "./Navbar";

const Container = () => {
  return (
    <div
      className=" flex flex-col items-center
    h-screen relative
   bg-[radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)]
  "
    >
      <div className="max-w-7xl mx-auto absolute inset-0 h-full w-full">
        <div
          className="absolute inset-y-0 left-0 w-px
          bg-[linear-gradient(to_bottom,rgba(212,212,216,0.5),rgba(228,228,231,0.3),transparent)]
         "
        />
        <div
          className="absolute inset-y-0 right-0 w-px
          bg-[linear-gradient(to_bottom,rgba(212,212,216,0.5),rgba(228,228,231,0.3),transparent)]
         "
        />

        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Container;
