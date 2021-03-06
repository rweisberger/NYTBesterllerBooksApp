import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {

return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/Welcome">Welcome</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/HardcoverFiction">Hardcover Fiction</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/PaperbackFiction">Paperback Fiction</Link>
        </li>    
        <li className="nav-item">
          <Link className="nav-link" to="/Nonfiction">Nonfiction</Link>
        </li>    
      </ul>
    </div>
  </nav>
)}

export default Navbar;