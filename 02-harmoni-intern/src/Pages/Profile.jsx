import React from "react";

const Profile = () => {
  return (
    <div className="h-screen p-4 w-full">
      <div className="h-60 bg-neutral-300 rounded-md flex justify-center items-center">
        <img
          className="size-20 rounded-full cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZ1Vm9DCt3CaDGvAII2F_I7HiG6r71giIqA&s"
          alt="sparks logo"
        />
      </div>
      <div className="flex gap-4 pt-6 pb-6">
        <button className="px-4 py-2 active:scale-95 bg-black text-white rounded-md">
          {" "}
          Personal Detail{" "}
        </button>
        <button className="px-4 py-2 active:scale-95 bg-black text-white rounded-md">
          {" "}
          Change Password{" "}
        </button>
      </div>
      <div className="h-60 relative bg-neutral-300 p-4">
        <div>
          <h1 className="text-lg font-bold"> Personal Details </h1>
        </div>
        <div className="flex gap-6 max-w-300 pt-10">
          <div className="flex flex-col gap-2 w-1/2">
            <h1 className="text-left">Full Name:</h1>
            <input
              className="border-2 w-full border-neutral-500 rounded-md px-3 py-2 text-sm text-left"
              type="text"
              placeholder="Event Management"
            />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <h1 className="text-left">Email Address:</h1>
            <input
              className="border-2 w-full border-neutral-500 rounded-md px-3 py-2 text-sm text-left"
              type="email"
              placeholder="Event@gmail.com"
            />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <h1 className="text-left">Confirm Password:</h1>
            <input
              className="border-2 w-full border-neutral-500 rounded-md px-3 py-2 text-sm text-left"
              type="email"
              placeholder="Event@gmail.com"
            />
          </div>
        </div>
        <div>
          <button className="px-4 py-2 active:scale-95 text-center rounded-md bg-blue-500 absolute right-1 bottom-2">
            {" "}
            Update{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
