import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUsers, faHandshake, faBowlFood, faTruckFast, 
  faUtensils, faHeart, faSackDollar, faChartBar, 
  faPeopleCarryBox, faClipboardList 
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const services = [
  { text: "Large Network of Vendors and Customers", icon: faClipboardList, color: "text-[#18A9C8]", bg: "border-[#18A9C8]" },
  { text: "Hassle-Free Process for Homemakers", icon: faSackDollar, color: "text-[#18A9C8]", bg: "border-[#18A9C8]" },
  { text: "Reliable and Fast Delivery Service", icon: faTruckFast, color: "text-[#C1D502]", bg: "border-[#C1D502]" },
  { text: "Cost-Effective Meals for everyone", icon: faBowlFood, color: "text-[#3ABF38]", bg: "border-[#3ABF38]" },
  { text: "Empowering Homemakers", icon: faUsers, color: "text-[#D12F2F]", bg: "border-[#D12F2F]" },
  { text: "Emotional Connect with the food you eat", icon: faHeart, color: "text-[#D12F2F]", bg: "border-[#D12F2F]" },
  { text: "Employment opportunities for delivery partners", icon: faPeopleCarryBox, color: "text-[#3ABF38]", bg: "border-[#3ABF38]" },
  { text: "Healthy and Hygienic food", icon: faUtensils, color: "text-[#C1D502]", bg: "border-[#C1D502]" },
  { text: "Comfort of Home-Cooked Food", icon: faHandshake, color: "text-[#18A9C8]", bg: "border-[#18A9C8]" },
  { text: "Customization Options", icon: faChartBar, color: "text-[#18A9C8]", bg: "border-[#18A9C8]" },
];

export const Services = () => {
  return (
    <div className="w-full bg-[#0B0517] text-white py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative">
          
          {/* Left Side Services */}
          <div className="space-y-6 text-right">
            {services.slice(0, 5).map((service, index) => (
              <div key={index} className="flex items-center justify-end space-x-4">
                <p className="w-48">{service.text}</p>
                <div className={`w-16 h-16 flex items-center justify-center rounded-full border-4 ${service.bg}`}>
                  <FontAwesomeIcon icon={service.icon} className={`text-2xl ${service.color}`} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center">
                    {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">SERVICES</h2>

          {/* Illustration */}
          <div className="hidden md:flex justify-center">
            <Image
              src="https://placehold.co/200x200"
              alt="Illustration"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          </div>

          {/* Right Side Services */}
          <div className="space-y-6 text-left">
            {services.slice(5).map((service, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-16 h-16 flex items-center justify-center rounded-full border-4 ${service.bg}`}>
                  <FontAwesomeIcon icon={service.icon} className={`text-2xl ${service.color}`} />
                </div>
                <p className="w-48">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

