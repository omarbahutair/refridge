import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const { loggedIn, handleLogout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link className="button" to="/">
          <img src={logo} alt="ReFridge Logo" />
        </Link>
      </div>
      <div className="reveal-text">
        <ul className="buttons">
          <li>
            <Link className="button" href="#problems">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm1.31-7.9l-.95.32c-.45.15-.86.48-.86.99v2h-2v-2c0-.53.28-.99.72-1.23l1.31-.44C12.1 10.95 12 10.5 12 10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2c-.31 0-.61-.08-.88-.21z"/>
              </svg>
            </Link>
          </li>
          <li>
            <Link className="button" href="#">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-2v2h-2v-2H9v-2h2V9h2v2h2v2z"/>
              </svg>
            </Link>
          </li>
          <li>
            <Link className="button" to="/donation">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </Link>
          </li>
          <li>
            <Link className="button" to="/inventory">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
              </svg>
            </Link>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 7.77L18.39 18H5.61L12 7.77zM12 2L1 21h22L12 2z"/>
                </svg>
              </button>
              <div className="dropdown-content">
                <Link className="dropdownTxt" to="/recipeSearch">
                  Recipe Search
                </Link>
                <Link className="dropdownTxt" to="/nutriAnalysis">
                  Nutrition Analysis
                </Link>
                <Link className="dropdownTxt" to="/wasteAnalysis">
                  Waste Analysis
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link className="button" to="/ecopro">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 17h2v-2h-2v2zm-7-4h2v-2H4v2zm0-4h2V7H4v2zm0-4h2V3H4v2zm10 12h2v-2h-2v2zm4-2h2v-2h-2v2zm0-4h2V7h-2v2zm0-4h2V3h-2v2zM7 17h2v-2H7v2zm4-12h2V3h-2v2zM7 3v2h2V3H7zm0 8h2V9H7v2zm8-2h2V9h-2v2zm0 8h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4 4h2v-2H7v2zm-4-8h2V9H3v2z"/>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      {loggedIn ? (
        <div className="join-button">
          <Link className="join-button button" to="/" onClick={handleLogout}>
            LOG OUT
          </Link>
        </div>
      ) : (
        <div className="join-button">
          <Link className="join-button button" to="/login">
            LOG IN
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
