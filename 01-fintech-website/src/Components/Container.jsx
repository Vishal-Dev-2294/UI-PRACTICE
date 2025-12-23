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
        <div className="relative w-full">
          <div className="h-px w-full absolute inset-x-0 bg-linear-to-r from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0">
            <div className="max-w-7xl mx-auto p-2">
              <img
                src="/hero-ui-v6.WEBP"
                alt="banner image"
                width={1000}
                height={1000}
                className="rounded-xl w-full object-cover object-top-left border border-neutral-200 shadow-xl mask-b-from-0% to-100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
