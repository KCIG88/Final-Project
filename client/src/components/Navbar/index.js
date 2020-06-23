/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa"

import "../../styles/Navbar.css";


function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (

    <div>




      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand-is-dark">
          <a class="navbar-item" href="/">
            <img src="https://www.pixelslogodesign.com/wp-content/uploads/2016/03/sports.png" width="112" height="28" alt="" />
          </a>

          {!isAuthenticated && (
            <button onClick={() => loginWithRedirect({})}>Log in</button>
          )}

          {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" alt="">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link class="navbar-item" to="/">
              Home
      </Link>

            <Link class="navbar-item" to="/profile">
              Profile
      </Link>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Sports
        </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  NFL
          </a>
                <a class="navbar-item">
                  NBA
          </a>
                <a class="navbar-item">
                  EPL
          </a>
                <a class="navbar-item">
                  Baseball
          </a>
                <a class="navbar-item">
                  La Liga
          </a>
                <a class="navbar-item">
                  Bundesliga
          </a>
              </div>
            </div>
          </div>

          {/* <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link class="button is-primary" to="/signup">
                  <strong>Sign up</strong>
                </Link>
                <Link class="button is-dark" to="/signin">
                  <strong>Sign In</strong>
                </Link>
              </div>
            </div>
          </div> */}
        </div>

      </nav>
    </div>
  );


};

export default Navbar;