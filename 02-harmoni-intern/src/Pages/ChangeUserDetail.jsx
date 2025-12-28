import React from 'react'

const ChangeUserDetail = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
  <form className="w-full max-w-md border border-white rounded-lg p-6">
    <h2 className="text-white text-2xl font-semibold mb-6 text-center">
      Change User Detail
    </h2>

    {/* Name */}
    <div className="mb-4">
      <label className="block text-white mb-1">Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full bg-black border border-white text-white px-3 py-2 outline-none rounded"
      />
    </div>

    {/* Email */}
    <div className="mb-4">
      <label className="block text-white mb-1">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full bg-black border border-white text-white px-3 py-2 outline-none rounded"
      />
    </div>

    {/* Gender */}
    <div className="mb-4">
      <label className="block text-white mb-1">Gender</label>
      <select className="w-full bg-black border border-white text-white px-3 py-2 outline-none rounded">
        <option value="">Select gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </div>

    {/* Phone Number */}
    <div className="mb-4">
      <label className="block text-white mb-1">Phone Number</label>
      <input
        type="tel"
        placeholder="Enter phone number"
        className="w-full bg-black border border-white text-white px-3 py-2 outline-none rounded"
      />
    </div>

    {/* Remember Me */}
    <div className="mb-6 flex items-center gap-2">
      <input
        type="checkbox"
        id="remember"
        className="accent-white"
      />
      <label htmlFor="remember" className="text-white">
        Remember Me
      </label>
    </div>

    {/* Button */}
    <button
      type="submit"
      className="w-full border font-bold border-white text-white py-2 rounded hover:bg-white hover:text-black transition"
    >
      Change
    </button>
  </form>
</div>

  )
}

export default ChangeUserDetail