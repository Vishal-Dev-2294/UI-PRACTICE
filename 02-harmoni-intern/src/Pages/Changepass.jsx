import React from 'react'

const Changepass = () => {
  return (
    <>
    <div className="bg-[url(https://images.unsplash.com/photo-1607267212311-cbf1b39f7825?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-[35vh] flex justify-center items-center w-full bg-cover bg-bottom bg-no-repeat text-amber-50">
        <div className=" h-50 w-60 flex gap-10 items-center flex-col">
          <h1 className="text-lg uppercase"> Connect us now </h1>
          <h1 className="text-3xl text-yellow-500 font-bold uppercase"> keep in touch</h1>
          <div className="flex justify-between gap-5">
            <h1> Home </h1>
            <h1 className="font-bold"> | </h1>
            <h1> About Us</h1>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-black">
      <form className="w-full max-w-md border border-white rounded-lg p-6 mb-80">
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">
          Change Password
        </h2>

        <div className="mb-4">
          <label className="block text-white mb-1">Current Password</label>
          <input
            type="text"
            placeholder="Enter Your Current Password"
            className="w-full bg-black border border-white text-white px-3 py-2 outline-none rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">New Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full bg-black border border-white text-white px-3 py-2 outline-none rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full border font-bold border-white text-white py-2 rounded hover:bg-white hover:text-black transition"
        >
          Change
        </button>
      </form>
    </div>
      </>
  )
}

export default Changepass