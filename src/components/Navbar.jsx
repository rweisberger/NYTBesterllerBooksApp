import React from 'react';

const Navbar = () => {

return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="./components.Welcome.jsx">Welcome <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./components.BookRow.jsx">Top Hardcover Fiction</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/blog">Top Paperback Fiction</a>
        </li>
       
      </ul>
    </div>
  </nav>
)}

export default Navbar;