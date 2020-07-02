import React, { Component } from "react";
import jwt_decode from 'jwt-decode'
import { updateBalance } from '../UserFunctons/UserFunctions'



class AddBalanceCard extends Component {

  state = {
    amount: 0,
    balance: 0,
    newBalance: 0

  }




  handleAmountChange = event => {
    this.setState({ amount: parseInt(event.target.value) });
    console.log(this.state.amount)
  };

  onSubmit(e) {
    e.preventDefault();
    // if (this.state.amount > 0) {
    const user = {
      balance: this.state.balance
    }
    console.log(user)
    updateBalance(user).then(res => {
      console.log(res)
      // balance: newBalance

    })
      .catch(res => {
        // console.log(res)
      })

  };



  componentDidMount() {
    const token = localStorage.getItem("token")
    const decoded = jwt_decode(token)
    console.log(decoded.email)
    console.log(token)

    this.setState({
      balance: decoded.balance,
      if(token) {
        jwt_decode(token);
      }
    })
  }




  render() {
    const balance = this.state.balance;
    const newBalance = this.state.amount + this.state.balance;
    console.log(balance, newBalance)

    return (

      <>
        <div class="container is-fluid">
          <div class="notification">


            <div class="card">
              <div class="jumbotron text-center shadow p-3 mb-5 bg-light rounded">
                <h1>Available Funds: $ {this.state.newBalance}</h1>
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
                <button href="#" value='10' onClick={this.handleAmountChange} class="card-footer-item">$10</button>
                <button href="#" value="25" onClick={this.handleAmountChange} class="card-footer-item">$25</button>
                <button href="#" value="100" onClick={this.handleAmountChange} class="card-footer-item">$100</button>
                <button href="#" value="1000" onClick={this.handleAmountChange} class="card-footer-item">$1000</button>
              </footer>


              <div class="field">
                <label class="label">Otherwise, Please Enter Specific Amount</label>
                <div class="control">
                  <input class="input" onChange={this.handleAmountChange} type="text" placeholder="Enter Amount"></input>
                  <div ><br></br> </div>
                </div>


                <div class="field is-grouped">
                  <div class="control">
                    <button class="button is-link" onSubmit={this.onSubmit}>Submit</button>
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
export default AddBalanceCard;