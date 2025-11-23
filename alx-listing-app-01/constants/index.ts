// constants/index.ts
import type { PropertyProps } from '@/interfaces';

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: 'seaside-villa',
    name: 'Seaside Villa',
    description:
      'A beautiful villa with ocean views, modern amenities, and private pool. Perfect for families and groups.',
    rating: 4.8,
    pricePerNight: 180,
    address: { city: 'Zanzibar', country: 'Tanzania' },
    image: '/images/seaside-main.jpg', // put images in public/images or use external urls
    images: [
      '/images/seaside-1.jpg',
      '/images/seaside-2.jpg',
      '/images/seaside-3.jpg',
      '/images/seaside-4.jpg',
    ],
    category: ['WiFi', 'Pool', 'Air conditioning', 'Kitchen', 'Free parking'],
    reviews: [
      {
        name: 'Amina',
        avatar: '/images/user1.jpg',
        rating: 5,
        comment: 'Amazing stay — clean and great host!',
      },
      {
        name: 'Daniel',
        avatar: '/images/user2.jpg',
        rating: 4,
        comment: 'Great location and views, minor check-in confusion.',
      },
    ],
  },
  // you can add more sample properties here
];

export { PROPERTYLISTINGSAMPLE };
