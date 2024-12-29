import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header2 from './Header2';

const Header = () => {
  return (
    <>
      {/* Main Navigation */}
      <nav className="py-6 px-8 bg-emerald-700 text-white flex justify-between items-center">
        <h2 className="text-3xl font-bold">CodeWithHimani</h2>
        <div className="flex gap-6">
          {/* <Link
            className="text-lg underline hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            to="/" // Use 'to' instead of 'href'
            aria-label="Home"
          >
            Home
          </Link>
          <Link
            className="text-lg underline hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            to="/about" // Use 'to' instead of 'href'
            aria-label="About"
          >
            About
          </Link>
          <Link
            className="text-lg underline hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            to="/contact" // Use 'to' instead of 'href'
            aria-label="Contact"
          >
            Contact
          </Link>
          <Link
            className="text-lg underline hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            to="/product" // Use 'to' instead of 'href'
            aria-label="Product"
          >
            Product
          </Link> */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">Product</Link>

        </div>
      </nav>
    </>
  );
};

export default Header;
