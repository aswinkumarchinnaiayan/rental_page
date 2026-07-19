export interface Vehicle {
  id: string;
  name: string;
  type: 'car' | 'bike';
  image: string;
  fuel: string;
  transmission: string;
  seats: string;
  description: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  image: string;
  feedback: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: 'cars' | 'bikes' | 'scenic';
}
