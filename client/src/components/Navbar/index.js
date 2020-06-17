import React from "react";
import "./style.css";



function Navbar() {


  return (
  

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand-is-dark">
    <a class="navbar-item" href="/">
      <img src="https://www.pixelslogodesign.com/wp-content/uploads/2016/03/sports.png" width="112" height="28"/>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Profile
      </a>

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

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-dark">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  

     
  );
}

export default Navbar;