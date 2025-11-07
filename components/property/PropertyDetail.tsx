import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import PropertyTabs from "./PropertyTabs";
import Image from "next/image";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px]">
        {/* Left - big hero */}
        <div className="relative w-full h-[400px]">
          <Image
            src={property.images[0]}
            alt={`${property.name} hero`}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right side */}
        <div className="hidden md:grid grid-rows-2 gap-4">
          {/* Top right */}
          <div className="relative w-full h-[190px]">
            <Image
              src={property.images[1]}
              alt={`${property.name} top`}
              fill
              className="object-cover rounded-lg"
              sizes="25vw"
            />
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(2, 4).map((img, i) => (
              <div key={i} className="relative w-full h-[190px]">
                <Image
                  src={img}
                  alt={`${property.name} extra ${i}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-6">
        <div className="flex-1 lg:w-2/3">
          <PropertyTabs property={property} />
        </div>
        <div className="lg:w-1/3">
          <div className="sticky top-24">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
