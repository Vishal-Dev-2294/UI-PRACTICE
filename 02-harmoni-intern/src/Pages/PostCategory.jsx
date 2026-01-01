import React from 'react'

const PostCategory = () =>  {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <form className="w-full max-w-md border border-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-white text-center mb-6">
          Post Event
        </h2>

        {/* Choose File */}
        <div className="mb-5">
          <label className="block text-white mb-2">Choose Image</label>
          <div className="border border-white rounded-md p-3">
            <input
              type="file"
              className="w-full text-white file:bg-white file:text-black file:border-0 file:px-4 file:py-1 file:rounded cursor-pointer"
            />
          </div>
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block text-white mb-1">Category</label>
          <select className="w-full px-4 py-2 bg-black text-white border border-white rounded-md focus:outline-none">
            <option className="bg-black">Select category</option>
            <option className="bg-black">Cricket</option>
            <option className="bg-black">Wedding</option>
            <option className="bg-black">Music</option>
            <option className="bg-black">Party</option>
          </select>
        </div>

        {/* Post Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md font-medium border border-whit"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default PostCategory