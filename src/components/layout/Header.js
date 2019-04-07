import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Contact Manager
          </Link>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className="nav-link">
                  <i className="fas fa-plus" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
