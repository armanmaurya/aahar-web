import Image from "next/image";
import React from "react";

const Page = () => {
    // Sample data for MessCard
    const messData = [
        {
            image: "/food/rajma.png",
            name: "Shyam Mess",
            meal: "North Indian",
            rating: 4.5,
        },
        {
            image: "/food/spl_rice.png",
            name: "Aahar Kitchen",
            meal: "South Indian",
            rating: 4.8,
        },
        {
            image: "/food/healthy.png",
            name: "Healthy Meals",
            meal: "Healthy Options",
            rating: 4.7,
        },
        {
            image: "/food/aloo.png",
            name: "Aloo Kitchen",
            meal: "Vegetarian",
            rating: 4.6,
        },
        {
            image: "/food/spl_puri.png",
            name: "Puri Palace",
            meal: "North Indian",
            rating: 4.2,
        },
        {
            image: "/food/south_meal.png",
            name: "South Meal Hub",
            meal: "South Indian",
            rating: 4.9,
        },
        {
            image: "/food/chole.png",
            name: "Chole Corner",
            meal: "Vegetarian",
            rating: 4.3,
        },
        {
            image: "/food/paneer.png",
            name: "Paneer Paradise",
            meal: "Vegetarian",
            rating: 4.8,
        },
    ];

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center mt-10">Food and Meals</h1>
      <p className="text-lg text-center mt-4">
        Discover a variety of delicious meals and food options. From healthy and
        nutritious dishes to indulgent treats, we bring you the best of homemade
        food crafted with love and care. Explore our menu and find something for
        every taste and occasion.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-6 text-center">
        {[
          "Homemade Quality",
          "Empowered Homemakers",
          "Sustainable Food Practices",
          "Fresh Ingredients",
          "Authentic Recipes",
          "Affordable Prices",
        ].map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-auto px-6 py-3 bg-white shadow-md rounded-full text-yellow-900 font-medium text-base flex items-center justify-center space-x-2"
          >
            <span className="text-lg">✨</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Eat Your Food Section */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold text-orange-700">
          Eat the Home made food
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Enjoy the taste of homemade food delivered right to your doorstep. Our
          meals are prepared with the finest ingredients and a touch of
          tradition to bring you the comfort of home-cooked food.
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {[
            { name: "Healthy", src: "/food/healthy.png" },
            { name: "Rajma", src: "/food/rajma.png" },
            { name: "Spl Rice", src: "/food/spl_rice.png" },
            { name: "Aloo", src: "/food/aloo.png" },
            { name: "Spl Puri", src: "/food/spl_puri.png" },
            { name: "South Meal", src: "/food/south_meal.png" },
            { name: "Chole", src: "/food/chole.png" },
            { name: "Paneer", src: "/food/paneer.png" },
            // { name: "Dal Tadka", src: "/food/dal_tadka.png" },
            // { name: "Butter Naan", src: "/food/butter_naan.png" },
            // { name: "Veg Biryani", src: "/food/veg_biryani.png" },
            // { name: "Gulab Jamun", src: "/food/gulab_jamun.png" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.src}
                alt={item.name}
                width={120}
                height={120}
                className="rounded-full shadow-lg border border-yellow-300"
              />
              <p className="mt-2 text-lg font-medium text-gray-800">
                {item.name}
              </p>
            </div>
          ))}
        </div>

      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mt-10">Our Mess</h2>
        <p className="text-lg text-center mt-4">
          Explore our selection of messes offering a variety of delicious meals
          and food options. From healthy and nutritious dishes to indulgent
          treats, we bring you the best of homemade food crafted with love and
          care.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {messData.map((item, index) => (
            <MessCard
              key={index}
              image={item.image}
              name={item.name}
              meal={item.meal}
              rating={item.rating}
              price={120} // Example price
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

const MessCard = ({
  image,
  name,
  meal,
  rating,
  price,
}: {
  image: string;
  name: string;
  meal: string;
  rating: number;
  price: number;
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full border relative">
      <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600">{meal}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-1 text-yellow-500">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
            <span className="text-gray-700 text-sm">{rating}</span>
          </div>
          <span className="bg-green-500 text-white px-2 py-1 text-xs rounded-md">
            {price}Rs
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          {/* <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-md">
            MAX SAFETY DELIVERY
          </span> */}
          <button className="bg-purple-700 text-white px-3 py-1 text-sm rounded-lg">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
