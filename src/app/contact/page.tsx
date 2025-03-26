import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Page = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-12">
        {/* Email */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-yellow-100 rounded-full">
            <FaEnvelope className="text-2xl text-yellow-500" />
          </div>
          <h3 className="font-semibold mt-4">Email Address</h3>
          <p className="text-gray-600 text-sm">info@example.com</p>
          <p className="text-gray-600 text-sm">support@example.com</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-yellow-100 rounded-full">
            <FaPhone className="text-2xl text-yellow-500" />
          </div>
          <h3 className="font-semibold mt-4">Phone Number</h3>
          <p className="text-gray-600 text-sm">+88 (800) 123 4567</p>
          <p className="text-gray-600 text-sm">+99 094 5445 433</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-yellow-100 rounded-full">
            <FaMapMarkerAlt className="text-2xl text-yellow-500" />
          </div>
          <h3 className="font-semibold mt-4">Our Address</h3>
          <p className="text-gray-600 text-sm">82 12th Street, Office 14</p>
          <p className="text-gray-600 text-sm">Edinburgh, UK</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-yellow-100 p-8 rounded-lg">
        <h4 className="text-yellow-500 text-sm font-semibold text-center">
          Contact Us
        </h4>
        <h2 className="text-2xl font-bold text-center mt-2">
          How Can We Help You?
        </h2>
        <p className="text-gray-600 text-center text-sm mt-2">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>

        <form className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-yellow-300"
              />
            </div>
            <div>
              <label className="text-sm font-medium">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-yellow-300"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-yellow-300 h-32"></textarea>
          </div>

          <div className="mt-4 flex items-start">
            <input
              type="checkbox"
              className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-300"
            />
            <label className="text-sm text-gray-600 ml-2">
              I agree that my submitted data is being collected and stored.
            </label>
          </div>

          <button className="w-full bg-yellow-600 text-white font-medium py-3 rounded-md mt-6 hover:bg-yellow-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
