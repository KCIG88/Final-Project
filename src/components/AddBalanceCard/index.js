import React, { Component } from "react";
import jwt_decode from 'jwt-decode'
// import { updateBalance } from '../UserFunctons/UserFunctions'
// import express from "express";
import { withRouter } from "react-router-dom";
import axios from 'axios'
class AddBalanceCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 0,
      userName: "",
      email: "",
      betHistory: "",
      amount: 0,
      _id: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // this.setState({ balance: this.state.balance })
    // this.getUserById();
    const token = localStorage.getItem("token")
    const decoded = jwt_decode(token)
    console.log(decoded.email)
    console.log(token)
    this.setState({
      _id: decoded._id,
      email: decoded.email,
      userName: decoded.userName,
      balance: decoded.balance,
      password: decoded.password,
      if(token) {
        jwt_decode(token);
      }
    })
  }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState.decoded.balance, prevProps)
  // }
  handleChange = async (e) => {
    e.persist()
    await this.setState({ amount: parseInt(e.target.value) })
    console.log(e.target.value)
    await this.setState({ balance: parseInt(this.state.amount + this.state.balance) })
    this.setState({ _id: (this.state._id) })
    console.log(this.state.amount)
    console.log(this.state.balance)
    console.log(this.state._id)
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:8080/users/updateBalance/' + this.state._id, {
      balance: this.state.balance,
    })
      .then((response) => {
        console.log(response);
        this.props.history.push('/signin');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    console.log(this.state.email)
    console.log(this.state.userName)
    console.log(this.state.password)
    return (
      <>
        <div class="container is-fluid">
          <div class="notification">
            <div class="card">
              <div class="jumbotron text-center shadow p-3 mb-5 bg-light rounded">
                <h1 >Available Funds: $ {this.state.balance}</h1>
              </div>
              <header class="card-header"><h2 class="card-header-title"> Add Funds </h2>
              </header>
              <header class="card-header"><h2 class="card-header-title"> Amount:{this.state.amount}</h2>
              </header>
              <div class="card-content">
                <div class="content">
                  Select an amount below to debit funds from your bank and add to
                  your Better Sports account. Please note: a maximum of $5000 may be
                  added at one time.
            </div>
              </div>
              <footer class="card-footer">
                <button href="#" value='10' onClick={(e) => this.handleChange(e)} class="card-footer-item">$10</button>
                <button href="#" value="25" onClick={this.handleChange} class="card-footer-item">$25</button>
                <button href="#" value="100" onClick={this.handleChange} class="card-footer-item">$100</button>
                <button href="#" value="1000" onClick={this.handleChange} class="card-footer-item">$1000</button>
              </footer>
              <div class="field">
                <label class="label">Otherwise, Please Enter Specific Amount</label>
                <div class="control">
                  <input class="input" onClick={this.handleChange} type="text" placeholder="Enter Amount"></input>
                  <div ><br></br> </div>
                </div>
                <div class="field is-grouped">
                  <div class="control">
                    <button class="button is-link" onClick={this.handleSubmit}>Submit</button>
                  </div>
                  <div class="control"></div>
                  <button class="button is-link is-light">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(AddBalanceCard);