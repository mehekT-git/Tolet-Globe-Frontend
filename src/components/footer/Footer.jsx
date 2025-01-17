import React from "react";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";  // Update the path if necessary

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white px-5 py-10">
      <hr className="my-3 border-gray-700" />

      {/* Responsive Grid Layout */}
      <div className="flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-16 lg:gap-24 py-5">
        {/* Logo and Tagline Section */}
        <div className="text-center">
          <img src={logo} alt="To-Let Globe Logo" className="w-20 md:w-28 mx-auto" />
          <p className="mt-3 text-sm">
            One-stop solution for all your <br /> brokerage-free rental needs
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="text-center">
          <h1 className="text-xl font-semibold text-teal-500">QUICK LINKS</h1>
          <ul className="mt-5 space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-400">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/property" className="hover:text-gray-400">
                Property
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="text-center">
          <h1 className="text-xl font-semibold text-teal-500">SERVICES</h1>
          <ul className="mt-5 space-y-2">
            <li>Paying Guest</li>
            <li>Flat and House</li>
            <li>Office</li>
            <li>Shops and Godown</li>
          </ul>
        </div>

        {/* Reach Us Section */}
        <div className="text-center">
          <h1 className="text-xl font-semibold text-teal-500">REACH US</h1>
          <ul className="mt-5 space-y-2">
            <li className="flex items-center justify-center gap-2">
              <IoIosCall /> +91-8707727347
            </li>
            <li className="flex items-center justify-center gap-2">
              <IoIosMail /> hello@toletglobe.in
            </li>
            <li className="flex items-center justify-center gap-2 text-sm">
              <FaLocationDot /> D1/122 Vipulkhand, Gomtinagar, Lucknow, Uttar
              Pradesh
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 font-bold mt-4">
        © 2023 To-Let Globe -- Lucknow
      </div>
    </div>
  );
};

export default Footer;
