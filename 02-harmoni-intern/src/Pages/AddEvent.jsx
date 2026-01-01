import React from 'react'

const AddEvent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <form className="w-full max-w-2xl border border-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Post New Event
        </h2>

        {/* Image Upload */}
        <div className="mb-5">
          <label className="block text-white mb-2">Event Image</label>
          <div className="flex items-center gap-4 border border-white p-3 rounded-md">
            <input
              type="file"
              className="text-white file:bg-white file:text-black file:border-0 file:px-4 file:py-1 file:rounded cursor-pointer"
            />
            <span className="text-sm pl-40 text-gray-400">
              Chose Pic
            </span>
          </div>
        </div>

        {/* Event Name */}
        <div className="mb-4">
          <label className="block text-white mb-1">Event Name</label>
          <input
            type="text"
            placeholder="Enter event name"
            className="w-full px-4 py-2 bg-black text-white border border-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-white mb-1">Start Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 bg-black text-white border border-white rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-white mb-1">End Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 bg-black text-white border border-white rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-white mb-1">Start Time</label>
            <input
              type="time"
              className="w-full px-4 py-2 bg-black text-white border border-white rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-white mb-1">End Time</label>
            <input
              type="time"
              className="w-full px-4 py-2 bg-black text-white border border-white rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-white mb-1">Price</label>
          <input
            type="number"
            placeholder="Enter price"
            className="w-full px-4 py-2 bg-black text-white border border-white rounded-md placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-white mb-1">Category</label>
          <select className="w-full px-4 py-2 bg-black text-white border border-white rounded-md focus:outline-none">
            <option className="bg-black">Select category</option>
            <option className="bg-black">Cricket</option>
            <option className="bg-black">Wedding</option>
            <option className="bg-black">Music</option>
            <option className="bg-black">Party</option>
            <option className="bg-black">Conference</option>
          </select>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-white mb-1">Location</label>
          <input
            type="text"
            placeholder="Enter event location"
            className="w-full px-4 py-2 bg-black text-white border border-white rounded-md placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-white mb-1">Description</label>
          <textarea
            rows="4"
            placeholder="Enter event description"
            className="w-full px-4 py-2 bg-black text-white border border-white rounded-md placeholder-gray-400 focus:outline-none"
          ></textarea>
        </div>

        {/* Post Button */}
        <button
          type="submit"
          className="w-full bg-white text-black py-2 rounded-md font-medium border border-white hover:bg-black hover:text-white transition-all duration-300"
        >
          Post Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent