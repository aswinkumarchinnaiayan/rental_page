import { Vehicle, Testimonial, FAQItem, ServiceItem, GalleryItem } from './types';
import ToyotaFortuner from './assets/images/Toyota_Fortuner.jpg';
import HondaCity from './assets/images/hondacity.jpg';
import Swift from './assets/images/swift.jpg';
import Classic350 from './assets/images/Classic350.jpg';
import YamahaR15 from './assets/images/v3.jpg';
import Duke250 from './assets/images/250.jpg';

import Ecr from './assets/images/ecr.jpg';
import Nilgiri from './assets/images/nilgiri.jpg';
import Sunset from './assets/images/sunset.jpg';
import BeachRoad from './assets/images/beachroad.jpg';

export const PHONE_NUMBER = '+919876543210';
export const WHATSAPP_NUMBER = '+919876543210';
export const EMAIL_ADDRESS = 'enquiry@drivexrentals.in';
export const OFFICE_ADDRESS = 'No. 42, East Coast Road (ECR), Thiruvanmiyur, Chennai, Tamil Nadu 600041';

export const VEHICLES: Vehicle[] = [
  {
    id: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    type: 'car',
    image: ToyotaFortuner,
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: '7 Seater',
    category: 'Premium SUV',
    description: 'Commanding road presence, absolute comfort, and rugged capabilities.'
  },
  {
    id: 'honda-city',
    name: 'Honda City',
    type: 'car',
    image: HondaCity,
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: '5 Seater',
    category: 'Premium Sedan',
    description: 'Executive style, plush ride quality, and advanced features.'
  },
  {
    id: 'maruti-swift',
    name: 'Maruti Swift',
    type: 'car',
    image: Swift,
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: '5 Seater',
    category: 'Compact Hatchback',
    description: 'Zippy performance and outstanding fuel efficiency.'
  },
  {
    id: 'royal-enfield-classic',
    name: 'Royal Enfield Classic 350',
    type: 'bike',
    image: Classic350,
    fuel: 'Petrol',
    transmission: 'Manual (5-Speed)',
    seats: '2 Seater',
    category: 'Retro Cruiser',
    description: 'Iconic thumping motor and timeless styling.'
  },
  {
    id: 'yamaha-r15-v4',
    name: 'Yamaha R15 V4',
    type: 'bike',
    image: YamahaR15,
    fuel: 'Petrol',
    transmission: 'Manual (6-Speed)',
    seats: '2 Seater',
    category: 'Super Sport',
    description: 'Racing DNA and razor-sharp handling.'
  },
  {
    id: 'ktm-duke',
    name: 'KTM Duke 250',
    type: 'bike',
    image: Duke250,
    fuel: 'Petrol',
    transmission: 'Manual (6-Speed)',
    seats: '2 Seater',
    category: 'Naked Streetfighter',
    description: 'Thrilling acceleration and lightweight chassis.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'airport-pickup',
    title: 'Airport Pickup & Drop',
    description: 'Timely, comfortable airport transfer services across Chennai and Coimbatore airports.',
    iconName: 'Plane'
  },
  {
    id: 'corporate-rental',
    title: 'Corporate Rentals',
    description: 'Executive sedan & luxury SUV rentals with structured corporate accounts for corporate delegations.',
    iconName: 'Briefcase'
  },
  {
    id: 'tour-packages',
    title: 'Tour Packages',
    description: 'Curated self-drive itineraries across scenic Tamil Nadu destinations like Ooty, Kodai, and Rameshwaram.',
    iconName: 'Compass'
  },
  {
    id: 'weekend-getaways',
    title: 'Weekend Getaways',
    description: 'Quick, hassle-free car and sports bike rental packages for local weekend getaways.',
    iconName: 'Calendar'
  },
  {
    id: 'wedding-rentals',
    title: 'Wedding Rentals',
    description: 'Arrive in ultimate style. Premium white luxury SUVs and luxury cars for weddings and special occasions.',
    iconName: 'Heart'
  },
  {
    id: 'self-drive',
    title: 'Self Drive Experience',
    description: 'Absolute privacy and freedom with our fully sanitized self-drive car rental packages.',
    iconName: 'Key'
  },
  {
    id: 'bike-rentals',
    title: 'Premium Bike Rentals',
    description: 'Unleash adventure with Royal Enfields, KTMs, and sports bikes for long highway cruises.',
    iconName: 'Sparkles'
  },
  {
    id: 'family-car-rentals',
    title: 'Family Car Rentals',
    description: 'Spacious multi-utility vehicles like Toyota Fortuner ensuring safe, cozy journeys for the entire family.',
    iconName: 'Users'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gallery-1',
    url: Ecr,
    caption: 'Cruising down the ECR coastal highway near Chennai',
    category: 'scenic'
  },
  {
    id: 'gallery-2',
    url: Nilgiri,
    caption: 'Winding roads through Nilgiri tea estates',
    category: 'scenic'
  },
  {
    id: 'gallery-3',
    url: ToyotaFortuner,
    caption: 'Toyota Fortuner prepared for mountain road trips',
    category: 'cars'
  },
  {
    id: 'gallery-4',
    url: YamahaR15,
    caption: 'Yamaha R15 sports bike',
    category: 'bikes'
  },
  {
    id: 'gallery-5',
    url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=600',
    caption: 'Royal Enfield Classic',
    category: 'bikes'
  },
  {
    id: 'gallery-6',
    url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600',
    caption: 'Premium Sedan',
    category: 'cars'
  },
  {
    id: 'gallery-7',
    url: Sunset,
    caption: 'Tamil Nadu sunset highway',
    category: 'scenic'
  },
  {
    id: 'gallery-8',
    url: BeachRoad,
    caption: 'Beach road trip',
    category: 'scenic'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Karthik Raja',
    role: 'Corporate Travel Lead',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    feedback: 'Absolutely stellar service! We hired the Toyota Fortuner for an executive delegation visit to our Coimbatore plant and a subsequent trip to Ooty. The vehicle was spotless, smelling fresh, and ran like a dream. Highly recommend their high-end customer service.',
    location: 'Chennai, TN'
  },
  {
    id: 't-2',
    name: 'Aishwarya Srinivasan',
    role: 'Software Architect',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    feedback: 'The Royal Enfield Classic was in flawless condition. Rode it with my husband along the East Coast Road (ECR) to Mahabalipuram during sunset. The team was extremely responsive on WhatsApp, and the pick-up and drop process was incredibly seamless.',
    location: 'Adyar, Chennai'
  },
  {
    id: 't-3',
    name: 'Vijay Kumar',
    role: 'Business Consultant',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    feedback: 'I rented a Honda City for my sister\'s wedding in Madurai. The customer support went above and beyond to facilitate prompt delivery and coordinated everything on phone calls. Exceptional support, immaculate vehicles, and highly professional corporate standard!',
    location: 'Coimbatore, TN'
  },
  {
    id: 't-4',
    name: 'Prakash Rajan',
    role: 'Enthusiastic Rider',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
    feedback: 'Hired the Yamaha R15 V4 for a weekend ride with my group. It felt like a brand new bike. Quick documentation, extremely competitive rates, and highly responsive support on WhatsApp. Cruising has never been this premium in Tamil Nadu!',
    location: 'Madurai, TN'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I enquire and book a vehicle with DriveX?',
    answer: 'DriveX focuses on personal customer care. Simply click any "Enquire Now" or "Get Quote" button to connect directly with our reservation managers via WhatsApp or a direct phone call. We will instantly verify vehicle availability, discuss requirements, and finalize your booking details within minutes.'
  },
  {
    question: 'What documents are required to rent a vehicle?',
    answer: 'You will need a valid Indian Driving License (for cars or bikes respectively) and a government-approved address proof (Aadhaar Card, Passport, or Voter ID). For high-end premium vehicles, we might request additional basic verification details.'
  },
  {
    question: 'Is there a security deposit required?',
    answer: 'Yes, we charge a highly reasonable, fully refundable security deposit. The exact deposit amount varies depending on the vehicle type (car or premium bike) and is instantly returned to you upon safe return of the vehicle.'
  },
  {
    question: 'Are your vehicles clean and sanitized before delivery?',
    answer: 'Hygiene and passenger safety are our absolute top priorities. Every single car and bike undergoes deep mechanical sanitization, professional washing, interior vacuuming, and touch-point sterilization right before it is handed over to you.'
  },
  {
    question: 'Do you offer airport delivery and pickup?',
    answer: 'Yes! We offer specialized door-step airport delivery and pickup services at Chennai International Airport (MAA) and Coimbatore International Airport (CJB) for ultimate convenience.'
  },
  {
    question: 'Is fuel included in the rental price?',
    answer: 'Our vehicles are rented out on a "tank-to-tank" or "matching-level" fuel basis. You will receive the vehicle with a certain fuel level, and you are requested to return it with the same level. This offers you absolute transparency and flexibility.'
  }
];

export const getWhatsAppUrl = (vehicleName?: string, action: string = 'General Enquiry') => {
  const text = vehicleName 
    ? `Vanakkam DriveX! I would like to enquire about renting the ${vehicleName} for my upcoming trip in Tamil Nadu. Please provide details.`
    : `Vanakkam DriveX! I would like to make a general enquiry about your car and bike rental services across Tamil Nadu.`;
  return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
};

export const getPhoneCallUrl = () => {
  return `tel:${PHONE_NUMBER}`;
};
