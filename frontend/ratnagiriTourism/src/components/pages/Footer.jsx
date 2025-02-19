import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-4 sm:px-10 md:px-16 lg:px-28 text-gray-300 pt-6 pb-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 md:text-left">
        {/* Contact Us Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 uppercase text-white">
            contact us
          </h2>
          <p>Email: info@ratnagiritourism.in</p>
          <p>Contact No.: +91 7897455612</p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 uppercase text-white">
            quick links
          </h2>
          <ul className="space-y-1">
            <li>
              <Link to="/home" className="hover:underline hover:text-gray-100">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/tehsils"
                className="hover:underline hover:text-gray-100"
              >
                Places to visit
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline hover:text-gray-100">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/review"
                className="hover:underline hover:text-gray-100"
              >
                Review
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow us section */}
        <div>
          <h2 className="text-lg font-bold mb-4 uppercase text-white">
            follow us
          </h2>
          <ul className="flex capitalize justify-start md:justify-start space-x-6 text-lg">
            <li>
              <a
                href="https://facebook.com"
                className="hover:text-blue-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              <p>facebook</p>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                className="hover:text-blue-500 transition"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              <p>twitter</p>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-pink-500 transition"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              <p>instagram</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Ratnagiri Tourism. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
