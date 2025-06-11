"use client";

import Link from 'next/link'; // Import Link for navigation
import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard'; // Import ProjectCard component
import { projectsData } from '@/data/projects'; // Import projects data

const heroImages = [
  'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1920&q=80', // Modern minimalist living room
  'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1920&q=80', // Cozy living room with fireplace
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80', // Stylish chair in a bright room
  'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1920&q=80', // Modern kitchen with island
  'https://images.unsplash.com/photo-1615873968403-89e068629265?w=1920&q=80', // Sleek, modern bathroom
  'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1920&q=80', // Bright bedroom with plants
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80', // Exterior of a modern house
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80', // Another modern house exterior with a pool
  'https://images.unsplash.com/photo-1613553423864-a813424f15e4?w=1920&q=80', // Architectural detail of a staircase
  'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=1920&q=80', // Person working in a modern kitchen, adds a human touch
];


export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ADD THIS CONSOLE LOG
  console.log(`Hero Carousel: Rendering with currentImageIndex = ${currentImageIndex}`);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const advanceImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    };
    const timerId = setInterval(advanceImage, 5000);
    return () => clearInterval(timerId);
  }, [heroImages.length]);

  return (
    <>
      {/* Hero Section */}
      {/* Hero Section - Outer section is full-width */}
      <section className="relative overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center justify-center w-full">
        {/* Background Image Carousel Container */}
        <div className="absolute inset-0 w-full h-full">
          {heroImages.map((src, index) => (
            <div
              key={index} // Using index as key
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100 z-5' : 'opacity-0 z-0'
              }`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div> {/* Overlay for better text readability - increased opacity to 80% */}
        {/* Inner container for centered content with padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Carousel Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-gray-900 p-2 rounded-full shadow-md z-20 transition-colors duration-300"
            aria-label="Previous Image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-gray-900 p-2 rounded-full shadow-md z-20 transition-colors duration-300"
            aria-label="Next Image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <h1 className="font-heading text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-normal mb-4 md:mb-6 leading-tight sm:leading-normal uppercase tracking-wider" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Designing Spaces, Shaping Dreams
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white font-normal mb-8 md:mb-12 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)' }}>
            Blueprint by Dilip is a design studio dedicated to creating innovative and timeless architectural solutions. We transform visions into reality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/portfolio"
              className="w-full sm:w-auto bg-transparent text-white border border-white hover:bg-white hover:text-gray-900 font-medium py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-transparent text-white border border-white hover:bg-white hover:text-gray-900 font-medium py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services Section - Add container and padding here */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of architectural and design services tailored to meet your unique needs.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {
              [
                {
                  title: 'Residential Architecture',
                  description: 'Crafting bespoke homes, from initial concept to final construction, focusing on innovation, comfort, and sustainability.',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto mb-4 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-1.5m-15-13.5H18M15.75 6.75h-7.5" /></svg>
                },
                {
                  title: 'Commercial Design',
                  description: 'Designing functional and inspiring commercial spaces, including offices, retail, and hospitality, to enhance brand identity and user experience.',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto mb-4 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375m-6.375 3h6.375m-6.375 3h6.375m-6.375 3h6.375M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" /></svg>
                },
                {
                  title: 'Interior Design',
                  description: 'Creating personalized and cohesive interiors that reflect your style, from space planning and material selection to furniture and decor.',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto mb-4 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M2.25 12l8.954 8.955c.44.439 1.152.439 1.591 0L21.75 12M2.25 12h19.5" /></svg>
                }
              ].map((service) => (
                <div key={service.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  {service.icon}
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{service.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      {/* Featured Projects Section - Add container and padding here */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A curated selection of our work, highlighting our dedication to excellence and innovative design.
            </p>
          </header>
          
          {projectsData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
              {projectsData.slice(0, 3).map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  title={project.title}
                  category={project.category}
                  thumbnailUrl={project.thumbnailUrl}
                  shortDescription={project.shortDescription}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-xl text-gray-500">No featured projects to display at the moment.</p>
            </div>
          )}

          {projectsData.length > 3 && (
            <div className="text-center mt-12">
              <Link href="/portfolio"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300"
              >
                View All Projects
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
