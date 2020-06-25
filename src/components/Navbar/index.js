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
            <img id="logo" src="https://lh3.googleusercontent.com/VtNJ-Oz764laDLxZctvodnze-tGcaNDwZsdlZVKg7dXe3nu4FGuKWIrpeCgAz1NP5jqX=s85" width="112" height="28" alt="" />
          </a>
          <br></br>
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

            <Link class="navbar-item" to="/AddBalance">
            ADD FUNDS
      </Link>


            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Sports
              </a>

              <div class="navbar-dropdown">
                <Link class="navbar-item" to="/nfl">
                  NFL
          </Link>
                <Link class="navbar-item" to="/ncaa">
                  NCAA Football
          </Link>
                <Link class="navbar-item" to="/mlb">
                  MLB
          </Link>
                <Link class="navbar-item" to="/epl">
                  EPL
          </Link>
                <Link class="navbar-item" to="/laliga">
                  La Liga
          </Link>
                <Link class="navbar-item" to="/bundesliga">
                  Bundesliga
          </Link>

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
