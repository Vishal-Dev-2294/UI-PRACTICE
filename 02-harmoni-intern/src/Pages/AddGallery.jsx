import React from 'react'

const AddGallery = () => {
    return (
  <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md border border-gray-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6 text-center text-white">
          Add Gallery
        </h2>

        {/* Choose Image */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-white">
            Choose Image
          </label>

          <div className="flex items-center gap-3">
            <label className="px-4 py-2 border border-gray-600 rounded cursor-pointer hover:bg-gray-800 text-sm text-white">
              Choose File
              <input type="file" className="hidden" />
            </label>

            {/* Selected image name */}
            <span className="text-sm text-gray-400">
              No file chosen
            </span>
          </div>
        </div>

        {/* Gallery Name */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-white">
            Gallery Name
          </label>
          <input
            type="text"
            placeholder="Enter gallery name"
            className="w-full bg-black border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>

        {/* Post Button */}
        <button
          className="w-full bg-white text-black py-2 rounded hover:bg-gray-200 transition"
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default AddGallery