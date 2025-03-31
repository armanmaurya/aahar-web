"use client"; // Ensure animations work in Next.js App Router

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Aahaarpreneur");
  const tabs = ["Aahaarpreneur", "User"];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]); // Store refs for each tab
  const [indicatorStyles, setIndicatorStyles] = useState({ width: 0, left: 0 });

  useLayoutEffect(() => {
    const activeIndex = tabs.indexOf(activeTab);
    const activeTabElement = tabRefs.current[activeIndex];

    if (activeTabElement) {
      setIndicatorStyles({
        width: activeTabElement.offsetWidth,
        left: activeTabElement.offsetLeft,
      });
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col items-center flex-grow bg-gradient-to-b from-yellow-200 to-white p-6">
      {/* Tab Buttons */}
      <div className="relative flex space-x-6 bg-yellow-200/80 backdrop-blur-md p-2 rounded-full shadow-md border border-yellow-300">
        {/* Animated Background */}
        <motion.div
          layoutId="tabBackground"
          className="absolute top-1.5 bottom-1.5 bg-[#FFC300] rounded-full shadow-md"
          initial={false}
          animate={indicatorStyles}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
        />

        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={(el) => {
              tabRefs.current[index] = el; // Store reference
            }} // Ensure the function doesn't return anything
            className={`relative z-10 px-6 py-1 text-lg text-center font-semibold transition-all duration-300 ${
              activeTab === tab ? "text-black" : "text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content with Dynamic Size */}
      <div className="mt-6 p-6 w-full max-w-lg text-center rounded-xl relative min-h-[380px] overflow-hidden bg-yellow-100 border border-[#FFC300] shadow-lg">
        <motion.div className="relative w-full h-full">
          {/* Tab 1 */}
          {activeTab === "Aahaarpreneur" && (
            <motion.div
              className="w-full text-gray-800 text-lg font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <form className="flex flex-col space-y-4 text-left">
                <h2 className="text-2xl font-bold text-center text-[#FFC300] mb-4">
                  Aahaarpreneur Form
                </h2>

                {/* Name */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-[#FFC300]"
                  />
                </div>

                {/* Number */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-[#FFC300]"
                  />
                </div>

                {/* Address */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700">
                    Address
                  </label>
                  <textarea
                    placeholder="Enter your address"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-[#FFC300] h-20 resize-none"
                  ></textarea>
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-[#FFC300]"
                  />
                </div>

                {/* Mess Name */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700">
                    Mess Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your mess name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-[#FFC300]"
                  />
                </div>

                {/* Menu */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700">
                    Menu
                  </label>
                  <input
                    type="file"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-[#FFC300] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#FFC300] file:text-black hover:file:bg-yellow-400"
                  />
                </div>

                {/* Mess Address */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700">
                    Mess Address
                  </label>
                  <textarea
                    placeholder="Enter your mess address"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-[#FFC300] h-20 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#FFC300] text-black font-medium py-2 rounded-md hover:bg-yellow-400 transition"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          )}

          {/* Tab 2 */}
          {activeTab === "User" && (
            <motion.div
              className="w-full text-gray-800 text-lg font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <form className="flex flex-col space-y-4 text-left">
                <h2 className="text-2xl font-bold text-center text-[#FFC300] mb-4">
                  User Information
                </h2>

                {/* Name */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-[#FFC300]"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-[#FFC300]"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-[#FFC300]"
                  />
                </div>

                {/* Address */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700">
                    Address
                  </label>
                  <textarea
                    placeholder="Enter your address"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-[#FFC300] h-20"
                  ></textarea>
                </div>

                {/* Price Range */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700">
                    Price Range (0 - 150)
                  </label>
                  <input type="text" className="
                    w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-[#FFC300]
                  " />
                </div>

                {/* Who Are You */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Who Are You?
                  </label>
                  <div className="flex space-x-6 mt-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="userType"
                        value="corporate"
                        className="text-[#FFC300] focus:ring-[#FFC300]"
                      />
                      <span>Corporate</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="userType"
                        value="student"
                        className="text-[#FFC300] focus:ring-[#FFC300]"
                      />
                      <span>Student</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#FFC300] text-black font-medium py-2 rounded-md hover:bg-yellow-400 transition"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
