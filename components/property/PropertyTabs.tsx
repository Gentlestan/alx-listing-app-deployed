import { PropertyProps } from "@/interfaces";
import { useState, ReactNode } from "react";
import ReviewSection from "./ReviewSection";
import { FaHome, FaCar, FaSwimmingPool, FaBed, FaShower, FaUserFriends } from "react-icons/fa";
import Image from "next/image";

const iconMap: Record<string, ReactNode> = {
  "Luxury Villa": <FaHome className="text-blue-500 text-xl" />,
  "Free Parking": <FaCar className="text-green-500 text-xl" />,
  "Pool": <FaSwimmingPool className="text-cyan-500 text-xl" />,
};

const tabLabels: Record<string, string> = {
  description: "Description",
  offers: "What We Offer",
  reviews: "Reviews",
  host: "About Host",
};

const PropertyTabs: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<"description" | "offers" | "reviews" | "host">("description");

  return (
    <div className="mt-6">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-300 mb-4 overflow-x-auto">
        {Object.keys(tabLabels).map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 font-semibold whitespace-nowrap ${
              activeTab === tab ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab as typeof activeTab)}
          >
            {tabLabels[tab]}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div>
        {activeTab === "description" && (
          <div>
            <p className="text-gray-700">{property.description}</p>
          </div>
        )}

        {activeTab === "offers" && (
          <div>
            <h3 className="text-lg font-semibold mb-3">Amenities</h3>
            <p className="mb-4">Each home is fully equipped to meet your needs, with ample space and privacy.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {property.category.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition"
                >
                  {iconMap[amenity] || <FaHome className="text-gray-400 text-xl" />}
                  <span className="text-gray-800 font-medium">{amenity}</span>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold mb-3">Details</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <FaBed className="text-blue-500" />
                <span>{property.offers.bed} Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShower className="text-teal-500" />
                <span>{property.offers.shower} Showers</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUserFriends className="text-purple-500" />
                <span>{property.offers.occupants} Occupants</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <ReviewSection propertyId="1" />
          </div>
        )}

       {activeTab === "host" && property.host && (
  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
    {/* Host Avatar */}
    <Image
      src={property.host.avatar}
      alt={property.host.name}
      width={96}
      height={96}
      className="w-24 h-24 rounded-full object-cover"
    />

    {/* Host Info */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold">{property.host.name}</h3>
      <p className="text-gray-700 mt-2">{property.host.bio}</p>

      <div className="flex flex-wrap gap-4 mt-3 text-gray-600">
        <span>
          <strong>Response Time:</strong> {property.host.responseTime}
        </span>
        <span>
          <strong>Response Rate:</strong> {property.host.responseRate}
        </span>
        <span>
          <strong>Joined:</strong> {property.host.joined}
        </span>
      </div>

      <div className="mt-3">
        <strong>Languages:</strong>{" "}
        {property.host.languages.join(", ")}
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default PropertyTabs;
