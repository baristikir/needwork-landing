import React from 'react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
      className="header"
    >
      <div className="header-inner">
        <div className="logo">
          <a href="/" className="logo">
            needwork
          </a>
        </div>
        <nav className="nav">
          <li>
            <a href="/product">Product</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/why">Why work with us?</a>
          </li>
        </nav>
        <div className="contact">
          <a href="https://business.needwork.app">Let's work together</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
