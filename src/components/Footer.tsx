import Link from 'next/link';

// SVG Icons for Social Media
const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const XIcon = () => ( // Twitter's new X logo
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand and About */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Blueprint by Dilip</h3>
            <p className="text-sm leading-relaxed">
              Designing innovative and timeless architectural solutions that transform visions into reality.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link></li>
              <li><Link href="/awards" className="hover:text-blue-600 transition-colors">Awards</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Get in Touch</h4>
            <address className="text-sm not-italic space-y-2">
              <p>123 Design Street, Innovation City, India</p>
              <p>
                <a href="mailto:hello@blueprintbydilip.com" className="hover:text-blue-600 transition-colors">
                  hello@blueprintbydilip.com
                </a>
              </p>
              <p>
                <a href="tel:+919876543210" className="hover:text-blue-600 transition-colors">
                  +91 98765 43210
                </a>
              </p>
            </address>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/example" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-600 transition-colors"><LinkedInIcon /></a>
              <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 hover:text-blue-600 transition-colors"><InstagramIcon /></a>
              <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="text-gray-600 hover:text-blue-600 transition-colors"><XIcon /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Blueprint by Dilip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
