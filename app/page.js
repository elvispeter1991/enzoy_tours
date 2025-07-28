import React from 'react';
import { Play, MapPin, Clock, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

// --- DUMMY DATA ---
// In a real application, this would come from a CMS or API
const featuredTours = [
  {
    id: 1,
    title: 'Half Day Tours',
    image: '/images/tour-1.jpg'
  },
  {
    id: 2,
    title: 'Day Tours',
    image: '/images/tour-2.jpg',
  },
  {
    id: 3,
    title: 'Overnight Tours',
    image: '/images/tour-3.jpg',
  },
   {
    id: 4,
    title: 'Multi Day Tours',
    image: '/images/tour-4.jpg',
  },
];

const whyChooseUsData = [
    {
        icon: <MapPin size={40} className="text-blue-500" />,
        title: "Expert Local Guides",
        description: "Our guides are passionate locals who bring you authentic, unforgettable experiences."
    },
    {
        icon: <ShieldCheck size={40} className="text-blue-500" />,
        title: "Safety & Comfort",
        description: "Your safety is our top priority. We ensure comfortable travel and accommodation."
    },
    {
        icon: <Clock size={40} className="text-blue-500" />,
        title: "Flexible Itineraries",
        description: "We offer customizable tours to match your interests and schedule perfectly."
    }
];


// --- COMPONENTS ---

// Header Component
const Header = () => (
  <header className="absolute top-0 left-0 w-full z-30 p-4 sm:p-6 bg-gradient-to-b from-black/60 to-transparent">
    <div className="container mx-auto flex justify-between items-center">
      {/* LOGO IMAGE HERE */}
      <Image
        src="/images/Enzoy_Logo.png" 
        alt="EnzoTours Logo"
        width={150}
        height={40}
        className="h-auto"
      />
      
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">Home</a>
        <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">Tours</a>
        <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">About Us</a>
        <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">Contact</a>
      </nav>
      <button className="md:hidden text-white">
        {/* ... hamburger icon ... */}
      </button>
    </div>
  </header>
);

// Hero Section Component
const HeroSection = () => (
  <div className="relative h-screen w-full overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute z-0 w-full h-full object-cover"
      poster="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
    >
      {/* Video from Pexels: https://www.pexels.com/video/a-drone-shot-of-a-beautiful-beach-4065906/ */}
      <source src="https://videos.pexels.com/video-files/4065906/4065906-hd_1920_1080_25fps.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black/50 z-10"></div>
    <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-down">
        Your Ideal Travel Partner In New Zealand
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in-up">
         Travel Newzealand in Comfort, Luxury and Style - Affordably Tours designed around your interests, budget and pace.
      </p>
      <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up animation-delay-300">
         Explore Tours
      </button>
    </div>
  </div>
);

// Tour Card Component
const TourCard = ({ tour }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 group">
    <div className="relative h-64">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">{tour.title}</h3>
        </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-center text-gray-600 mb-4">
        <div className="flex items-center">
          
          <span>{tour.duration}</span>
        </div>
        <div className="text-xl font-bold text-gray-800">{tour.price}</div>
      </div>
      <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
        Explore Now
      </button>
    </div>
  </div>
);

// Featured Tours Section
const FeaturedToursSection = () => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Tours</h2>
        <p className="text-lg text-gray-600 mt-2">Handpicked adventures for every traveler.</p>
        <div className="mt-4 w-24 h-1 bg-blue-500 mx-auto rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredTours.map(tour => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  </section>
);

// Why Choose Us Section
const WhyChooseUsSection = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Travel With Us?</h2>
                <p className="text-lg text-gray-600 mt-2">The EnzoyTours difference.</p>
                <div className="mt-4 w-24 h-1 bg-blue-500 mx-auto rounded"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {whyChooseUsData.map((item, index) => (
                    <div key={index} className="p-8 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                        <div className="flex justify-center items-center mb-4">
                           {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Footer Component
const Footer = () => (
    <footer className="bg-black text-white">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <Image
        src="/images/Enzoy_Logo.png" 
        alt="EnzoTours Logo"
        width={150}
        height={40}
        className="h-auto"
      />
        
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-amber-400">Home</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-amber-400">Tours</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-amber-400">About Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-amber-400">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold text-lg mb-4">Newsletter</h4>
                    <p className="text-gray-400 mb-4">Sign up for our newsletter to get the latest tour updates.</p>
                    <div className="flex">
                        <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none" />
                        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md font-bold">Go</button>
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} EnzoyTours. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);


// Main App Component
export default function App() {
  return (
    <div className="bg-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Poppins', sans-serif; }
        @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; }
      `}</style>
      
      <Header />
      <main>
        <HeroSection />
        <FeaturedToursSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  )
}
