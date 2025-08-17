export default function Footer1() {
  return (
    <footer className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-gray-300 mt-16 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* Column 1 - Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 border-b-4 border-cyan-400 inline-block pb-2">
            Company
          </h3>
          <p className="text-gray-400 text-base leading-relaxed">
            We craft digital solutions that combine innovation, design, and technology to drive growth.
          </p>
          <p className="mt-6 text-gray-500 text-sm">
            © {new Date().getFullYear()} YourCompany. All rights reserved.
          </p>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 border-b-4 border-cyan-400 inline-block pb-2">
            Services
          </h3>
          <ul className="space-y-4 text-gray-300 text-base">
            {['Web Design', 'App Development', 'Cloud Solutions', 'IT Consulting', 'UI/UX Design'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 border-b-4 border-cyan-400 inline-block pb-2">
            Resources
          </h3>
          <ul className="space-y-4 text-gray-300 text-base">
            {['Blog', 'Help Center', 'Case Studies', 'Privacy Policy', 'Terms of Service'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Contact & Social */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 border-b-4 border-cyan-400 inline-block pb-2">
            Contact
          </h3>
          <address className="not-italic text-gray-300 text-base space-y-2 mb-8">
            <p>456 Tech Avenue, New York, USA</p>
            <p>
              Email:{" "}
              <a href="mailto:contact@yourcompany.com" className="hover:text-cyan-400">
                contact@yourcompany.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-cyan-400">
                +1 234 567 890
              </a>
            </p>
          </address>

          <div className="flex space-x-5">
            {[
              { icon: 'F', label: 'Facebook' },
              { icon: 'T', label: 'Twitter' },
              { icon: 'L', label: 'LinkedIn' },
              { icon: 'I', label: 'Instagram' }
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-12 h-12 rounded-full border-2 border-cyan-400 text-cyan-400 flex items-center justify-center text-xl font-bold hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-4 text-center text-gray-500 text-sm border-t border-slate-800">
        Powered by YourCompany • Built with ❤️ and TailwindCSS
      </div>
    </footer>
  );
}
