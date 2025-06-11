
import Image from 'next/image';
import type { Metadata } from 'next';

const aboutBannerImageUrl = 'https://plus.unsplash.com/premium_photo-1663047846268-4f020e2f2b7f?fm=jpg&q=80&w=1920&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==';
const dilipPlaceholderImageUrl = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80';
const dilipImageUnsplashSource = 'https://unsplash.com/photos/Qh9Swf_8DyA';
// Using a placeholder color for Dilip's image for now
// const dilipImageUrl = 'https://images.unsplash.com/photo-1591969852023-190295e484bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8Y291cGxlJTIwc2lsaG91ZXR0ZXx8MHx8fHwxNjI3MzkxODQ3&ixlib=rb-1.2.1&q=80&w=400';

export const metadata: Metadata = {
  title: "About Us | Blueprint by Dilip",
  description: "Learn about Blueprint by Dilip's philosophy, our team, and our design process for innovative architectural solutions.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero/Banner Section */}
      <section 
        className="relative h-[50vh] md:h-[70vh] bg-cover bg-center text-gray-900"
        style={{ backgroundImage: `url(${aboutBannerImageUrl})` }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-75 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">About Blueprint by Dilip</h1>
          <p className="text-lg md:text-2xl max-w-3xl">
            Crafting spaces that inspire, function, and endure. We are architects of vision and precision.
          </p>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Philosophy</h2>
          <div className="max-w-3xl mx-auto text-lg md:text-xl text-justify space-y-6">
            <p>
              At Blueprint by Dilip, we believe that great design is born from a deep understanding of our clients&apos; aspirations and the unique context of each project. Our philosophy is rooted in the pursuit of innovation, functionality, and timeless aesthetics. We strive to create spaces that not only meet the practical needs of their inhabitants but also elevate their quality of life.
            </p>
            <p>
              Sustainability is at the core of our practice. We are committed to environmentally responsible design, incorporating energy-efficient solutions and locally sourced materials wherever possible. Our goal is to design buildings that are not only beautiful and functional but also kind to the planet.
            </p>
            <p>
              Collaboration is key to our success. We work closely with our clients, consultants, and craftsmen, fostering a transparent and communicative process from concept to completion. This synergy allows us to transform complex challenges into elegant and thoughtful architectural solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Dilip Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Meet Dilip</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center md:items-start flex-shrink-0">
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg relative">
                <Image 
                  src={dilipPlaceholderImageUrl} 
                  alt="Dilip - Founder (Placeholder)"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>
              <a 
                href={dilipImageUnsplashSource}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 mt-2 hover:underline"
              >
                Photo by LinkedIn Sales Solutions on Unsplash
              </a>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Dilip [Last Name]</h3>
              <p className="text-blue-600 font-medium mb-4">Founder & Principal Architect</p>
              <p className="text-lg text-gray-700 space-y-4">
                With over [Number] years of experience in the architectural field, Dilip has a passion for creating spaces that are both innovative and deeply personal. His design approach emphasizes a harmonious balance between form and function, driven by a meticulous attention to detail and a commitment to excellence. Dilip believes that architecture has the power to shape experiences and improve lives, and he brings this conviction to every project undertaken by the studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section (Optional) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Design Process</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-3">1. Discovery & Vision</h4>
              <p className="text-gray-700">Understanding your needs, aspirations, and the site&apos;s potential.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-3">2. Concept & Design</h4>
              <p className="text-gray-700">Developing innovative design solutions and detailed blueprints.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-3">3. Execution & Realization</h4>
              <p className="text-gray-700">Overseeing construction to ensure quality and fidelity to the design.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
