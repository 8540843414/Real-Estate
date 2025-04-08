import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHome,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
      
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FaHome className="text-blue-500 text-2xl" />
            <h2 className="text-xl font-bold">Estate</h2>
          </div>
          <p className="text-sm text-gray-400">
            Your trusted partner for finding your dream home. We offer the best properties tailored to your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#Header" className="hover:text-white transition">Home</a></li>
            <li><a href="#About" className="hover:text-white transition">About</a></li>
            <li><a href="#Projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#Testimonials" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#Contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/priyam-priyadarshi-4b1782256"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://github.com/8540843414"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-800 hover:text-white transition"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/captaincool_2011?igsh=aGQ1ODAwMHNxaG94&utm_source=ig_contact_invite"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-500 p-2 rounded-full hover:bg-pink-500 hover:text-white transition"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100055629871798&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 p-2 rounded-full hover:bg-blue-700 hover:text-white transition"
            >
              <FaFacebookSquare className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Estate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
