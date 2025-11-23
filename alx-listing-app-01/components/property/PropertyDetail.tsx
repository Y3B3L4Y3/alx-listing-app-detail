// components/property/PropertyDetail.tsx
import React from 'react';
import BookingSection from './BookingSection';
import ReviewSection from './ReviewSection';
import type { PropertyProps } from '@/interfaces';

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6 md:flex md:gap-6">
      <div className="md:flex-1">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-3 mt-2 text-sm text-gray-600">
          <span className="text-yellow-400 font-semibold">{property.rating} ★</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img
            src={property.image}
            alt={property.name}
            className="col-span-2 w-full h-96 object-cover rounded-lg"
          />
          {property.images?.slice(0, 3).map((img, idx) => (
            <img key={idx} src={img} alt={`${property.name}-${idx}`} className="w-full h-48 object-cover rounded-md" />
          ))}
        </div>

        {/* Tabs: What we offer / Reviews / About host */}
        <div className="mt-6">
          <div className="border-b">
            <nav className="-mb-px flex space-x-8">
              <a className="border-b-2 border-indigo-500 text-indigo-600 py-2">What we offer</a>
              <a className="py-2 text-gray-500">Reviews</a>
              <a className="py-2 text-gray-500">About host</a>
            </nav>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{property.description}</p>
          </div>

          {/* Amenities */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">What this place offers</h3>
            <ul className="flex flex-wrap gap-2">
              {property.category.map((amenity, idx) => (
                <li key={idx} className="bg-gray-100 px-3 py-1 rounded-md text-sm">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews section - pass property.reviews */}
          <ReviewSection reviews={property.reviews ?? []} />
        </div>
      </div>

      {/* Booking on the right for md+ screens */}
      <div className="md:w-96 md:sticky md:top-20">
        <BookingSection price={property.pricePerNight} />
      </div>
    </div>
  );
};

export default PropertyDetail;
