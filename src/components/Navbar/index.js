/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { useAuth0 } from "../../react-auth0-spa"

import "../../styles/Navbar.css";


class Navbar extends Component {
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push('/')
  }

  render() {

    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-lin" to="/signin">
            <strong>Sign In</strong>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            <strong>Register</strong>
          </Link>

        </li>
      </ul>
    )
    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="navLink">
            <strong>Profile</strong>
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} clasName="nav-link">
            <strong>Logout</strong>
          </a>
        </li>
      </ul>
    )



    return (

      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand-is-dark">
            <a className="navbar-item" href="/">
              <img id="logo" src="https://lh3.googleusercontent.com/VtNJ-Oz764laDLxZctvodnze-tGcaNDwZsdlZVKg7dXe3nu4FGuKWIrpeCgAz1NP5jqX=s85" width="112" height="28" alt="" />
            </a>
            <br></br>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" alt="">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="nav-link" to="/">
                <strong>Home</strong>
                <span class="icon">
                  <i class="fas fa-home"></i>
                </span>
              </Link>
              {localStorage.usertoken ? userLink : loginRegLink}
            </div>

            <Link className="navbar-item" to="/profile">
              <strong>Profile</strong>
              <span><i class="fa fa-user fa-fw"></i></span>
            </Link>

            <Link className="navbar-item" to="/AddBalance">
              <strong>ADD FUNDS </strong>
              <span class="icon">
              <i class="fa fa-credit-card" aria-hidden="true"></i>
              </span>
            </Link>


            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                <strong>Sports</strong>
                <span><i class="fa fa-trophy" aria-hidden="true"></i></span>
              </a>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/nfl">
                  NFL
          </Link>
                <Link className="navbar-item" to="/ncaa">
                  NCAA Football
          </Link>
                <Link className="navbar-item" to="/mlb">
                  MLB
          </Link>
                <Link className="navbar-item" to="/epl">
                  EPL
          </Link>
                <Link className="navbar-item" to="/laliga">
                  La Liga
          </Link>
                <Link className="navbar-item" to="/bundesliga">
                  Bundesliga
          </Link>

              </div>
            </div>
          </div>

        </nav>
      </div >
    )

  };
}

export default Navbar;
