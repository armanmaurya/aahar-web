import { Services } from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            ABOUT OUR STARTUP:
          </h2>
          <p className="text-white mb-4 text-lg">
            Aahar is a unique platform designed to bridge the gap between
            homemakers and people by providing access to fresh, wholesome,
            homemade meals. Unlike restaurant-focused platforms, Aahar
            emphasizes the warmth, quality, and nutrition of home-cooked food.
          </p>
          <ul className="list-disc pl-5 text-white mb-4 space-y-2 text-lg">
            <li>Foster a community-driven approach to meal preparation.</li>
            <li>Reduce food waste by aligning demand with availability.</li>
            <li>
              Promote a healthier alternative to fast food and restaurant meals.
            </li>
          </ul>
          <p className="text-white mb-6 text-lg">
            Aahar is more than just a food delivery service, it’s a mission to
            create a sense of belonging and care, one meal at a time.
          </p>
          <button className="bg-[#1DB9F0] text-black px-6 py-3 rounded-lg text-xl font-medium hover:bg-[#17A2D7]">
            Explore More
          </button>
        </div>
        {/* Right Content (Image) */}
        <div className="relative">
          <img
            src="https://placehold.co/500x350"
            alt="Homemaker"
            className="rounded-lg w-full object-cover"
          />
          <div className="absolute -bottom-8 -right-4 w-28 h-28 bg-white rounded-full overflow-hidden shadow-lg border border-gray-200">
            <img
              src="https://placehold.co/100x100"
              alt="Food Icon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
}
