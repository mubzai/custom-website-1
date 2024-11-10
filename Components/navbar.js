import React from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link href="/">
            My Portfolio
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
