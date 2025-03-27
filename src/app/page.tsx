"use client";

import { Services } from "@/components/Services";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-10">
      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
          Aahar - Your Home Kitchen
        </h1>
        <p className="mt-4 text-gray-800 text-lg max-w-3xl mx-auto leading-relaxed">
          Aahar connects homemakers with food lovers, bringing fresh, homemade
          meals to your doorstep. We build a **community-driven** food-sharing
          network to make meals healthier, affordable, and accessible.
        </p>
      </motion.section>

      {/* Decorative Divider */}
      <div className="relative w-full mb-10">
        <svg className="w-full h-10 text-yellow-400" viewBox="0 0 1440 320">
          <path
            fill="currentColor"
            d="M0,128L120,112C240,96,480,64,720,96C960,128,1200,224,1320,272L1440,320V0H0Z"
          ></path>
        </svg>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Left Content (Text) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="p-6 bg-yellow-100 shadow-lg rounded-lg"
        >
          <h2 className="text-3xl font-bold text-yellow-900">
            About Our Startup
          </h2>
          <p className="text-gray-800 mt-2 text-base">
            Aahar bridges the gap between homemakers and people seeking fresh,
            homemade meals.
          </p>
          <ul className="list-disc pl-5 text-gray-900 mt-3 space-y-2 text-base">
            <li>Community-driven meal preparation</li>
            <li>Reduce food waste by aligning demand with availability</li>
            <li>Healthier alternative to fast food</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition-all"
          >
            Explore More
          </motion.button>
        </motion.div>

        {/* Right Content (Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src="https://placehold.co/450x300"
              alt="Homemaker"
              width={450}
              height={300}
              className="rounded-lg w-full object-cover transition-transform duration-300"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Services Section */}
      <Services />
      {/* Unique Approach Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center my-10 bg-gradient-to-br from-yellow-100 to-orange-200 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-yellow-900">
          What Makes Us Unique?
        </h2>
        <p className="mt-3 text-gray-800 max-w-2xl mx-auto text-lg">
          More than just food delivery, Aahar brings warmth and care to every
          meal, ensuring it feels just like home. Our platform empowers home
          chefs, reducing food waste while providing a healthier alternative to
          fast food.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {[
            "Homemade Quality",
            "Empowered Homemakers",
            "Sustainable Food Practices",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="px-6 py-3 bg-white shadow-md rounded-full text-yellow-900 font-medium text-base flex items-center space-x-2"
            >
              <span className="text-lg">✨</span>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Advantages Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <h2 className="text-3xl font-bold text-orange-700">
          Why Choose Aahar?
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: index * 0.1 }}
            viewport={{ once: true }}
              className={`px-4 py-2 flex items-center space-x-2 rounded-full ${advantage.bg} text-black font-medium text-sm shadow-md transition-all cursor-pointer`}
            >
              <span className="text-xl">{advantage.icon}</span>
              <span>{advantage.title}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Aaharpreneur Section */}
      <motion.section
        initial={{ opacity: 0, scale: 1, y: 50 }} // Start more noticeably down and smaller
        whileInView={{ opacity: 1, scale: 1, y: 0 }} // Smooth scale-up and lift
        transition={{
          duration: 0.8, // Make it slightly faster
          ease: "easeOut", // Smooth easing
        }}
        viewport={{ once: true }} // Ensures it animates only once
        className="text-center bg-orange-200 p-6 rounded-lg mt-10 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-orange-800">
          Become an Aaharpreneur
        </h2>
        <p className="mt-3 text-gray-700 text-sm">
          Join us in empowering homemakers and making healthy food accessible to
          all.
        </p>
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-5 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow hover:bg-orange-700 transition-all"
        >
          Get Started
        </motion.button>
      </motion.section>
    </div>
  );
}
