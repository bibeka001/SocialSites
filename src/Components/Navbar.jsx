import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Miss Femina
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src="https://images.unsplash.com/photo-1647937304708-8d7c7cbab947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="avatar"
              alt=""
            />
          </li>
          <li className="listItem">Robert Barathion</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
