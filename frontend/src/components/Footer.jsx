export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white w-full mt-16 font-sans">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col-reverse md:flex-row-reverse md:justify-between gap-12">

        {/* Column 1 - About Us */}
        <div className="w-full md:w-1/4">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 pb-2">
            About Us inam 
          </h3>
          <p className="text-blue-300 text-sm leading-relaxed">
            We deliver high-quality web solutions for modern businesses, focusing on performance, design, and usability.  
            Our expert team is dedicated to helping you succeed online.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="w-full md:w-1/4">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3 text-blue-300 text-sm">
            {['Home', 'About', 'Services', 'Contact'].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="relative group inline-block hover:text-white"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-blue-500 transition-all duration-300 ease-in-out"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div className="w-full md:w-1/4">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 pb-2">
            Services
          </h3>
          <ul className="space-y-3 text-blue-300 text-sm">
            {['Web Development', 'Mobile Apps', 'UI/UX Design', 'SEO Optimization'].map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div className="w-full md:w-1/4">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 pb-2">
            Contact
          </h3>
          <address className="not-italic space-y-2 text-blue-300 text-sm">
            <p>123 Main Street, Colombo, Sri Lanka</p>
            <p>Email: <a href="mailto:info@example.com" className="hover:underline">info@example.com</a></p>
            <p>Phone: <a href="tel:+94771234567" className="hover:underline">+94 77 123 4567</a></p>
          </address>

          {/* Social Media placeholders */}
          <div className="mt-6 flex space-x-4">
            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((platform) => (
              <a
                key={platform}
                href="#"
                aria-label={platform}
                className="text-blue-300 hover:text-white transition-colors duration-300"
              >
                {/* Placeholder circle for icons */}
                <div className="w-8 h-8 rounded-full border border-blue-500 flex items-center justify-center text-sm font-bold">
                  {platform[0]}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-800"></div>

      {/* Bottom Bar */}
      <div className="bg-blue-950 text-center py-5 text-sm text-blue-400 select-none">
        © {new Date().getFullYear()} My Company. All rights reserved.
      </div>
    </footer>
  )
}
