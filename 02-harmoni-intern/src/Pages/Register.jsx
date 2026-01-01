import React from 'react'

const Register = () => {
  return (
     <div className="min-h-screen flex items-center justify-center bg-black">
      <form className="w-full max-w-md border border-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Sign Up
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-white mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 bg-black text-white border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-white mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-black text-white border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-400"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-white mb-2">Gender</label>
          <div className="flex gap-4 text-white">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" className="accent-white" />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" className="accent-white" />
              Female
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" className="accent-white" />
              Other
            </label>
          </div>
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-white mb-1">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-full px-4 py-2 bg-black text-white border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-400"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-white mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 bg-black text-white border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-400"
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center gap-2 mb-6">
          <input type="checkbox" className="accent-white" />
          <span className="text-white text-sm">Remember me</span>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full bg-black text-white border border-white py-2 rounded-md font-medium"
        >
          Sign Up
        </button>

        {/* Sign In Link */}
        <p className="text-center text-white text-sm mt-4">
          Already have an account?{" "}
          <span className="underline cursor-pointer hover:text-gray-300">
            Sign In
          </span>
        </p>
      </form>
    </div>
  )
}

export default Register