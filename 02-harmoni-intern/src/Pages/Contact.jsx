const Form = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form className="w-full max-w-md border border-white rounded-lg p-6">
        
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">
          Contact Form
        </h2>

        <div className="mb-4">
          <label className="block text-white mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-black border border-white text-white px-3 py-2 outline-none rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-black border border-white text-white px-3 py-2 outline-none rounded"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-white mb-1">Phone Number</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full bg-black border border-white text-white px-3 py-2 outline-none rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white mb-1">Message</label>
          <input
            type="Number"
            placeholder="Enter your Message"
            className="w-full bg-black border border-white text-white px-3 py-2 outline-none rounded"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full border font-bold border-white text-white py-2 rounded hover:bg-white hover:text-black transition"
        >
          Submit
        </button>

      </form>
    </div>
  );
};

export default Form;
