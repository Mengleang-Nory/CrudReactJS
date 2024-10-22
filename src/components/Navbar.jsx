import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>User Lists</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link
            to="/create"
            style={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: "8px",
            }}
          >
            Create New User
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
