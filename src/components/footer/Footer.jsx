import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosCall, IoIosMail } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';
import logo from '/logo.png';

const Footer = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeLink]);

  const handleFooterLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="text-white px-5 sm:px-10 md:px-20">
      <hr className="my-3" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-5">
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-teal-500">
            REACH US
          </h1>
          <ul className="mt-5 space-y-2">
            <li className="flex items-center gap-2" aria-label="Contact Number">
              <IoIosCall /> +91-8707727347
            </li>
            <li className="flex items-center gap-2" aria-label="Email Address">
              <IoIosMail /> hello@toletglobe.in
            </li>
            <li className="flex items-center gap-2 text-sm" aria-label="Office Address">
              <FaMapMarkerAlt /> D1/122 Vipulkhand, Gomtinagar, Lucknow, Uttar Pradesh
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-teal-500">
            QUICK LINKS
          </h1>
          <ul className="mt-5 space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-400 block" onClick={() => handleFooterLinkClick("home")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-400 block" onClick={() => handleFooterLinkClick("blog")}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/property" className="hover:text-gray-400 block" onClick={() => handleFooterLinkClick("property")}>
                Property
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-teal-500">
            SERVICES
          </h1>
          <ul className="mt-5 space-y-2">
            <li>Paying Guest</li>
            <li>Flat and House</li>
            <li>Office</li>
            <li>Shops and Godown</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <img src={logo} alt="To-Let Globe Logo" className="w-16 sm:w-20 md:w-28 mx-auto" />
          <p className="text-center mt-3 text-sm md:text-base">
            One-stop solution for all your <br /> brokerage-free rental needs
          </p>
        </div>
      </div>
      <div className="text-gray-500 font-bold mt-4 text-center">
        © 2023 To-Let Globe -- Lucknow
      </div>
    </div>
  );
};

export default Footer;
