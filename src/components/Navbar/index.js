import React, { Component } from "react";
import { Link } from "react-router-dom";
import jwt_decode from 'jwt-decode'
import "../../styles/Navbar.css";


class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      username: "",
      balance: "",

    }
  }

  componentDidMount() {
    const token = localStorage.getItem("token")
    const decoded = jwt_decode(token)
    console.log(decoded.email)
    console.log(token)

    this.setState({
      email: decoded.email,
      userName: decoded.userName,
      balance: decoded.balance,
      if(token) {
        jwt_decode(token);
      }
    })
  }

  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push('/')
  }



  render() {

    const loginRegLink = (
      <>

        <Link className="navbar-item" to="/signin">
          <strong>Sign In</strong>
        </Link>



        <Link className="navbar-item" to="/signup">
          <strong>Register</strong>
        </Link>


      </>
    )
    const userLink = (

      <>
        <Link className="navbar-item" to="/profile" className="navLink">
          <strong>Profile</strong>
        </Link>


        <Link className="navbar-item" onClick={this.logOut.bind(this)} clasName="nav-link">
          <strong>Logout</strong>
        </Link>

      </>
    )



    return (

      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand-is-dark">
            <a className="navbar-item" href="/">
              <img id="logo" src="https://lh3.googleusercontent.com/VtNJ-Oz764laDLxZctvodnze-tGcaNDwZsdlZVKg7dXe3nu4FGuKWIrpeCgAz1NP5jqX=s85" width="112" height="28" alt="" />
            </a>
           
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" alt="">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">



           <div className="navbar-start">

              <Link className="navbar-item" to="/">
                <strong>Home</strong>
                <span class="icon"><i class="fas fa-home"></i></span>
              </Link>
            

              <Link className="navbar-item">
                {localStorage.usertoken ? userLink : loginRegLink}
              </Link>

           </div>


            <div class="navbar-end">
              <Link className="navbar-item" to="/profile">
                <strong id="navlink">Profile</strong>
                <span><i class="fa fa-user fa-fw" style={{ color: "white" }}></i></span>
              </Link>

              <a class="navbar-item" style={{ color: "white" }}>

                <img
                  src="https://firebasestorage.googleapis.com/v0/b/casino-royale-9c472.appspot.com/o/gaming.svg?alt=media&token=3058a860-e55f-4cbb-aaf9-ee94e79433ce"
                  style={{ height: "24px", width: "24px", marginRight: "2px"}} alt="pokerchip"
                />: {this.state.balance}
              </a>

              <Link className="navbar-item" to="/AddBalance">
                <strong id="navlink">ADD FUNDS </strong>
                <span class="icon">
                  <i class="fa fa-credit-card" style={{ color: "white" }} aria-hidden="true"></i>
                </span>
              </Link>


              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  <strong>Sports</strong>
                  <span><i class="fa fa-trophy" style={{ color: "white" }} aria-hidden="true"></i></span>
                </a>

                <div className="navbar-dropdown is-right">
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
          </div>
        </nav>
      </div >
    )

  };
}

export default Navbar;
