"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.2 } },
};

const Page = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-200 to-white p-6">
      <div className="w-full max-w-4xl mx-auto">
        {/* Contact Info Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Email */}
          <motion.div className="flex flex-col items-center" variants={fadeUp}>
            <div className="w-20 h-20 flex items-center justify-center bg-yellow-100 rounded-full">
              <FaEnvelope className="text-3xl text-black" />
            </div>
            <h3 className="font-semibold mt-4 text-black text-lg">Email Address</h3>
            <p className="text-gray-700 text-base">jainvansh305@gmail.com</p>
            <p className="text-gray-700 text-base">anshbansal2882003@gmail.com</p>
          </motion.div>

          {/* Phone */}
          <motion.div className="flex flex-col items-center" variants={fadeUp}>
            <div className="w-20 h-20 flex items-center justify-center bg-yellow-100 rounded-full">
              <FaPhone className="text-3xl text-black" />
            </div>
            <h3 className="font-semibold mt-4 text-black text-lg">Phone Number</h3>
            <p className="text-gray-700 text-base">+91 827 3515 100</p>
            <p className="text-gray-700 text-base">+91 812 6747 034</p>
          </motion.div>

          {/* Address */}
          <motion.div className="flex flex-col items-center" variants={fadeUp}>
            <div className="w-20 h-20 flex items-center justify-center bg-yellow-100 rounded-full">
              <FaMapMarkerAlt className="text-3xl text-black" />
            </div>
            <h3 className="font-semibold mt-4 text-black text-lg">Our Address</h3>
            <p className="text-gray-700 text-base">A51, Sushant Aquapolis, Crossing Republik, Ghaziabad, 201006</p>
          </motion.div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          className="p-8 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h4
            className="text-black text-base font-semibold text-center"
            variants={fadeUp}
          >
            Contact Us
          </motion.h4>
          <motion.h2
            className="text-3xl font-bold text-center mt-2 text-black"
            variants={fadeUp}
          >
            How Can We Help You?
          </motion.h2>
          <motion.p
            className="text-black text-center text-base mt-2"
            variants={fadeUp}
          >
            If you have any questions, concerns, or feedback, feel free to reach out to us. 
            We are here to assist you and ensure you have the best experience possible.
          </motion.p>

          <motion.form className="mt-6" variants={staggerContainer}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={fadeUp}>
                <label className="text-base font-medium text-black">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-[#FFD700]"
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <label className="text-base font-medium text-black">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-[#FFD700]"
                />
              </motion.div>
            </div>

            <motion.div className="mt-4" variants={fadeUp}>
              <label className="text-base font-medium text-black">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-[#FFD700] h-32"></textarea>
            </motion.div>

            <motion.div className="mt-4 flex items-start" variants={fadeUp}>
              <input
                type="checkbox"
                className="w-4 h-4 text-[#FFD700] border-gray-300 rounded focus:ring-[#FFD700]"
              />
              <label className="text-base text-black ml-2">
                I agree that my submitted data is being collected and stored.
              </label>
            </motion.div>

            <motion.button
              className="w-full bg-yellow-200 text-black font-medium py-3 rounded-md mt-6 hover:bg-[#FFC300] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
