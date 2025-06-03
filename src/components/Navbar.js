import { Link } from 'gatsby';
import React from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import logo from '../assets/images/logo.svg';
import { FaAlignJustify } from 'react-icons/fa';

export const links = [
  {
    href: '/company',
    label: 'Company'
  },
  {
    href: '/about',
    label: 'About'
  },
  {
    href: '/company/history',
    label: 'History'
  },
  {
    href: '/tags',
    label: 'Tag'
  }
];

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button className="nav-btn" onClick={() => setIsOpen(!isOpen)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={`nav-links ${isOpen ? 'show-links' : ''}`}>
          {links.map((link, index) => (
            <Link
              to={link.href}
              key={index}
              className="nav-link"
              activeClassName="active-link"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="nav-link contact-link">
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
