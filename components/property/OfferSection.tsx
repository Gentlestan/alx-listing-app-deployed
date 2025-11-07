// components/property/OffersSection.tsx
import { FaBed, FaShower, FaUserFriends } from "react-icons/fa";
import { PropertyProps } from "@/interfaces";

const OffersSection: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div>
      {/* Amenities Grid */}
      <h3 className="text-lg font-semibold mb-3">Amenities</h3>
      <p className="mb-4 text-gray-600">
        Each home is fully equipped to meet your needs, with ample space and privacy.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {property.category.map((amenity, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition"
          >
            <span className="text-gray-800 font-medium">{amenity}</span>
          </div>
        ))}
      </div>

      {/* Offers Details */}
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
  );
};

export default OffersSection;
