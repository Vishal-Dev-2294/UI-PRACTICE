function Hero() {
  let user = [
    {
      downloadUrl:
        "https://plus.unsplash.com/premium_photo-1698362819146-bb3233129fda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9zfGVufDB8fDB8fHww",
    },

    {
      downloadUrl:
        "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9zfGVufDB8fDB8fHww",
    },

    {
      downloadUrl:
        "https://images.unsplash.com/file-1715652217532-464736461acbimage?w=416&dpr=2&auto=format&fit=crop&q=60",
    },

    {
      downloadUrl:
        "https://images.unsplash.com/photo-1531845116688-48819b3b68d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9zfGVufDB8fDB8fHww",
    },

    {
      downloadUrl:
        "https://images.unsplash.com/photo-1571023479098-1ed95127545e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <>
      <div className="bg-[url(https://images.unsplash.com/photo-1619779854918-013a8e70452a?q=80&w=1240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-[90vh] flex w-full bg-cover">
        <div className="max-w-lg p-15 py-20 h-full flex flex-col items-start justify-between">
          <h1 className="text-5xl text-orange-500"> One stop event planet</h1>
          <p className="text-blue-200">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            fugit quidem doloremque at facilis placeat ratione quod dolorum
            possimus odit est, consequuntur saepe veritatis! Sequi dolorum qui
            quia unde ullam!
          </p>
          <p className="text-blue-200"> every event shout br perfect</p>
          <div className="flex items-center gap-4">
            <input
              className=" bg-gray-900 border border-amber-200 outline-none text-amber-100 items-center rounded-md px-5 py-2"
              type="text"
              placeholder="enter youe email"
            />
            <button className=" flex items-center text-amber-50 active:scale-95 bg-orange-500 rounded-md px-5 py-2">
              {" "}
              get started
            </button>
          </div>
          <div className="flex items-center">
            {user.map((elem, idx) => {
              return (
                <img
                  className={`h-6 w-6 rounded-full border border-neutral-200 object-cover ${
                    idx !== 0 ? "-ml-2" : ""
                  }`}
                  src={elem.downloadUrl}
                  alt="usersimages"
                />
              );
            })}
            <p className="text-[12px] pl-2 text-white">
              1,600 people requested access a vist in last 24 hours
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-black p-10">
        <div className="h-full">
          <div className="bg-blue-950 rounded-md h-105 p-4">
            <div className="h-full">
              <div className="h-65 flex justify-between">
                <div className="h-full w-100 p-5 flex  justify-between flex-col flex-start">
                  <h3 className="text-white font-bold text-xl">
                    {" "}
                    What is Harmoni <br /> Event
                  </h3>
                  <h1 className="text-orange-500 font-bold text-2xl">
                    {" "}
                    Your Event Will be Beyond your Imagination
                  </h1>
                </div>
                <div className="h-full w-200 p-5">
                  <h3 className="text-white text-sm">
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corrupti totam, voluptatum et exercitationem qui at rerum
                    accusamus ducimus nisi explicabo saepe, asperiores illum
                    repellendus tenetur id eligendi reiciendis odit harum.
                  </h3>
                  <h1 className="text-orange-500 text-sm py-20 pl-148">
                    Explore the Library
                  </h1>
                </div>
              </div>
              <div className="h-27 w-full p-1">
                <div className="text-white h-full flex justify-between p-3 ">
                  <div className="flex justify-between flex-col flex-start">
                    <h1 className="text-lg font-bold border w-8 border-l-0 border-r-0 border-b-0 border-t-3 border-t-fuchsia-400">Chatbots </h1>
                    <div>
                      <h3 className="text-sm mt-2">
                        {" "}
                        We so opinion friend me msj as delight,
                      </h3>
                      <h3 className="text-sm">
                        {" "}
                        Whole front do of Plate heard ohought,{" "}
                      </h3>
                    </div>
                  </div>
                  <div className="flex justify-between flex-col flex-start">
                    <h1 className="text-lg font-bold border w-8 border-l-0 border-r-0 border-b-0 border-t-3 border-t-fuchsia-400">Knowdledgebase </h1>
                    <div>
                      <h3 className="text-sm mt-2">
                        {" "}
                        We so opinion friend me msj as delight,
                      </h3>
                      <h3 className="text-sm">
                        {" "}
                        Whole front do of Plate heard ohought,{" "}
                      </h3>
                    </div>
                  </div>
                  <div className="flex justify-between flex-col flex-start pr-10">
                    <h1 className="text-lg font-bold border w-8 border-l-0 border-r-0 border-b-0 border-t-3 border-t-fuchsia-400"> Education </h1>
                    <div>
                      <h3 className="text-sm mt-2">
                        {" "}
                        We so opinion friend me msj as delight,
                      </h3>
                      <h3 className="text-sm mt-2">
                        {" "}
                        Whole front do of Plate heard ohought,{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full w-full p-4">
            <div className="h-full mt-20">
              <div className="flex justify-between w-full">  
              <div className="flex justify-between flex-col flex-start">
                <h1 className="text-pink-500 text-2xl w-70">
                  {" "}
                  Harmoni Event Management firm & Wedding Planner is a Group of
                  Creative Minds Who would like a to make weddings , birthday &
                  any kind of events courteous & a better place for our clients
                  to celibrate important moment of their lives...{" "}
                </h1>
                <p className="text-sm text-red-700 mt-10"> Request Early Access to Get Started</p>
              </div>
              <div className="flex justify-between flex-col w-70 text-white">
                <h1 className="text-lg font-bold">Photography </h1>
                <h1 className="text-lg font-bold">
                  Cinematography or Videography service{" "}
                </h1>
                <h1 className="text-lg font-bold">
                  Full venue Decoration Service{" "}
                </h1>
                <h1 className="text-lg font-bold">Home Decoration </h1>
              </div>
              <div className="flex justify-between flex-col w-70 text-blue-600">
                <h1>
                  {" "}
                  A Team of 3 talented Photographers are ready to snap the best
                  moments of your ceremony{" "}
                </h1>
                <h1>
                  Creative full HD 1080p video a different space of your
                  ceremony
                </h1>
                <h1>
                  A blend of out-of-box ideas to decore your precious date
                </h1>
                <h1>just call us and get total solution under one roof...</h1>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className= " relative bg-black flex justify-center h-70 w-full">
        <div className=" absolute bottom-1 bg-pink-500 h-35 w-145 rounded-2xl p-6">
          <div className="flex justify-between">
            <div className="flex justify-between flex-col">
            <h3 className="text-xs text-white"> Request Early Access to get Started</h3>
            <p className="text-lg text-white w-95 mt-5"> Registered Today & start exploring the endless possibilites</p>
            </div>
            <div className="mt-4"> 
              <button className="bg-black rounded-full text-sm text-white px-4 py-2"> GET STARTED</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
