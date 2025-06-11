export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          We&apos;d love to hear from you. Whether you have a question about our services, want to discuss a potential project, or just want to say hello, please feel free to reach out.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Contact Information Section */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-700">Address:</h3>
              <p className="text-gray-600">123 Design Street, Innovation City, India 500001</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Phone:</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Email:</h3>
              <p className="text-blue-600 hover:underline">
                <a href="mailto:hello@blueprintbydilip.com">hello@blueprintbydilip.com</a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Business Hours:</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Our Location:</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Embedded Map Placeholder</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" name="name" id="name" autoComplete="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white text-gray-900" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white text-gray-900" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" name="subject" id="subject" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white text-gray-900" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" id="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white text-gray-900"></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
