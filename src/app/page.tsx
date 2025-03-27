"use client"; // Ensure animations work in Next.js App Router

import { Services } from "@/components/Services";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-6 py-16">
      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content (Text) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">
            ABOUT OUR STARTUP:
          </h2>
          <p className="text-black mb-4 text-lg">
            Aahar is a unique platform designed to bridge the gap between
            homemakers and people by providing access to fresh, wholesome,
            homemade meals. Unlike restaurant-focused platforms, Aahar
            emphasizes the warmth, quality, and nutrition of home-cooked food.
          </p>
          <ul className="list-disc pl-5 text-black mb-4 space-y-2 text-lg">
            <li>Foster a community-driven approach to meal preparation.</li>
            <li>Reduce food waste by aligning demand with availability.</li>
            <li>
              Promote a healthier alternative to fast food and restaurant meals.
            </li>
          </ul>
          <p className="text-black mb-6 text-lg">
            Aahar is more than just a food delivery service, it’s a mission to
            create a sense of belonging and care, one meal at a time.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFC300] text-black px-6 py-3 rounded-lg text-xl font-medium hover:bg-[#FFD700]"
          >
            Explore More
          </motion.button>
        </motion.div>

        {/* Right Content (Image) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="https://placehold.co/500x350"
            alt="Homemaker"
            width={500}
            height={350}
            className="rounded-lg w-full object-cover"
          />
          {/* Small Floating Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 -right-4 w-28 h-28 bg-black rounded-full overflow-hidden shadow-lg border border-gray-200"
          >
            <Image
              src="https://placehold.co/100x100"
              alt="Food Icon"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Services Section */}
      <Services />
      {/* Section 4: Advantages */}
      <motion.section className="text-center mt-16">
        <h2 className="text-3xl font-bold text-yellow-800">
          Advantages of Choosing Aahar
        </h2>

        {/* Animated Advantages Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { title: "Emotional Connect", icon: "💛", bg: "bg-yellow-200" },
            { title: "Cost-Effective Meals", icon: "💰", bg: "bg-green-200" },
            { title: "Healthy & Hygienic Food", icon: "🥗", bg: "bg-blue-200" },
            {
              title: "Employment for Delivery Partners",
              icon: "🚴",
              bg: "bg-pink-200",
            },
            {
              title: "Fast & Reliable Delivery",
              icon: "⚡",
              bg: "bg-purple-200",
            },
          ].map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 },
              }}
              className={`px-6 py-3 flex items-center space-x-3 rounded-full ${advantage.bg} text-black font-medium text-lg shadow-md transition-all`}
            >
              <span className="text-2xl">{advantage.icon}</span>
              <span>{advantage.title}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section: Aaharpreneur with Us */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center bg-yellow-200 p-8 rounded-lg mt-16"
      >
        <h2 className="text-3xl font-bold text-yellow-800">
          Become an Aaharpreneur
        </h2>
        <p className="mt-4 text-gray-700">
          Join us in empowering homemakers and making healthy food accessible to
          all.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow hover:bg-yellow-700"
        >
          Get Started
        </motion.button>
      </motion.section>
    </div>
  );
}
