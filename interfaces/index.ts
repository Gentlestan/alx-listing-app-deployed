// interfaces/index.ts

export interface Review {
  id: number;
  user: string;
  rating: number;
  comment?: string;
  date?: string;
   avatar: string;
}

export interface PropertyProps {
  id: string
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];   // e.g. ["Luxury Villa", "Pool", "Free Parking"]
  price: number;
  offers: {
    bed: string;        // keep as string if your sample data is "3"
    shower: string;     // same here
    occupants: string;  // e.g. "4-6"
  };
  images: string[];        // URL or /public path
  discount: string;
  description: string;
  reviews: Review[];
  host: {
    name: string;
    avatar: string;
    bio: string;
    responseTime: string;
    responseRate: string;
    joined: string;
    languages: string[];
    superhost?: boolean; 
  }     // e.g. "30" or empty string if no discount
}

// interfaces/index.ts
export interface BookingDetails {
  propertyName: string;
  startDate: string;
  totalNights: number;
  bookingFee: number;
  price: number;
}
