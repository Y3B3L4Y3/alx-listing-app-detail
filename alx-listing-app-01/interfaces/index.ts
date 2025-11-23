// interfaces/index.ts
export interface Address {
  city: string;
  country: string;
  street?: string;
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date?: string;
}

export interface PropertyProps {
  id: string;
  name: string;
  description: string;
  rating: number;
  pricePerNight: number;
  address: Address;
  image: string; // main image
  images?: string[]; // other images
  category: string[]; // amenities
  reviews?: Review[];
}
