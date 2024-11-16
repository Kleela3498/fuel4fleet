import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="text-xl font-bold text-blue-600">Fleet4Fuel</span>
      </div>
      <div className="search-bar">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search stations or routes..."
            className="search-input"
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Header; 