import React, { useState } from "react";
import { BACKGROUND_IMAGE, PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const Pill: React.FC<{ label: string; onClick: () => void; isActive: boolean }> = ({ label, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium border transition whitespace-nowrap ${
        isActive
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white text-gray-700 border-gray-300 hover:border-gray-800"
      }`}
    >
      {label}
    </button>
  );
};

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-200">
        <img
          src={property.image}
          alt={property.name}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
        {property.discount && (
             <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                 {property.discount}% OFF
             </div>
        )}
      </div>
      <div className="mt-2 flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-900">{property.name}</h3>
          <p className="text-gray-500 text-sm">{property.address.city}, {property.address.country}</p>
        </div>
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-light">{property.rating}</span>
        </div>
      </div>
      <div className="mt-1 flex items-baseline gap-1">
        <span className="font-semibold">${property.price}</span>
        <span className="text-gray-500 text-sm">night</span>
      </div>
    </div>
  );
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Top Villa");
  const filters = ["Top Villa", "Self Checkin", "Luxury", "Beachfront", "Mountain View", "Pet Friendly", "City View", "Free WiFi"];

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] w-full rounded-2xl overflow-hidden flex items-center justify-center bg-cover bg-center mb-12 text-center"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Find your favorite place here!</h1>
          <p className="text-lg md:text-xl">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="mb-8 overflow-x-auto pb-4 no-scrollbar">
        <div className="flex gap-3 min-w-max">
            {filters.map((filter) => (
                <Pill 
                    key={filter} 
                    label={filter} 
                    isActive={activeFilter === filter} 
                    onClick={() => setActiveFilter(filter)} 
                />
            ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </section>
    </div>
  );
}