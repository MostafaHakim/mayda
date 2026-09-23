import React from "react";
import { Star } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              May<span className="text-orange-500">da</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Delicious food, fresh ingredients and amazing taste. We are here
              to make your every meal special.
            </p>

            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center
            rounded-full bg-gray-800 hover:bg-orange-500
            hover:text-white transition duration-300"
              >
                f
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center
            rounded-full bg-gray-800 hover:bg-orange-500
            hover:text-white transition duration-300"
              >
                in
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center
            rounded-full bg-gray-800 hover:bg-orange-500
            hover:text-white transition duration-300"
              >
                ◎
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Menu
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-orange-500">📍</span>
                <span>123 Food Street, Dhaka, Bangladesh</span>
              </li>

              <li className="flex gap-3">
                <span className="text-orange-500">📞</span>
                <span>+880 1700-000000</span>
              </li>

              <li className="flex gap-3">
                <span className="text-orange-500">✉</span>
                <span>info@foodhouse.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Opening Hours
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-orange-500">10AM - 10PM</span>
              </div>

              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-orange-500">11AM - 11PM</span>
              </div>

              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-orange-500">12PM - 10PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div
          className="max-w-7xl mx-auto px-6 py-5
      flex flex-col md:flex-row
      items-center justify-between
      gap-3 text-sm text-gray-500"
        >
          <p>© 2026 Mayda. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-orange-500 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-orange-500 transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
