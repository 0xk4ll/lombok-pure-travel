export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface TravelPackage {
  id: string;
  title: string;
  duration: string;
  price: string;
  image: string;
  category: 'Honeymoon' | 'Adventure' | 'Family' | 'General';
  description: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
}

export interface DailyTrip {
  id: string;
  title: string;
  destinations: string;
  price: string;
  image: string;
  description: string;
  duration: string;
  category: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
}

export interface Activity {
  id: string;
  title: string;
  image: string;
  description: string;
  gallery?: string[];
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
}

export interface FilterCriteria {
  category: string;
  destination: string;
  duration: string;
}