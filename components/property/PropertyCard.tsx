import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PropertyProps } from "@/interfaces";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { id, name, address, rating, category, price, images } = property;

  return (
    <Link
      href={`/property/${id}`}
      className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition"
    >
      <Image
        src={images?.[0] || "/placeholder.jpg"}
        alt={name}
        width={600}
        height={400}
        className="h-56 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-yellow-500 font-medium">⭐ {rating}</span>
        </div>
        <p className="text-gray-500 text-sm">
          {address.city}, {address.country}
        </p>
        <p className="text-gray-600 text-sm">{category.join(" • ")}</p>

        <div className="mt-3 flex justify-between items-center">
          <p className="font-bold text-lg">${price}/night</p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
