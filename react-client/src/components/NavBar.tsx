import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.module.css'; // Create a separate CSS file for the navbar styles

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1>Update Tool</h1>
      <h2>Manager to Employee Updates Tool</h2>
      <div className="navbar-links">
        <button className="button-pages">
          <Link to="/create">Create Questions</Link>
        </button>
        <button className="button-pages">
          <Link to="/view">View Questions</Link>
        </button>
        <button className="button-pages">
          <Link to="/answer">Answer Questions</Link>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
