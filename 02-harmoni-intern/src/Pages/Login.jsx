import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form className="w-full max-w-md border border-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Change Password
        </h2>

        {/* Current Password */}
        <div className="mb-4">
          <label className="block text-white mb-1 font-medium">
            Current Password
          </label>
          <input
            type="password"
            placeholder="Enter current password"
            className="w-full px-4 py-2 bg-black text-white border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-400"
          />
        </div>

        {/* New Password */}
        <div className="mb-6">
          <label className="block text-white mb-1 font-medium">
            New Password
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full px-4 py-2 bg-black text-white border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md font-medium border border-white"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default Login;
