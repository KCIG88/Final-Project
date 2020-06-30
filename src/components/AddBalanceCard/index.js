import React, { Component } from "react";



class AddBalanceCard extends Component {

  state = {  
    amount: 0,
    balance: 0
    }


handleAmountChange = event => {
    this.setState({ amount: parseInt(event.target.value) });
  
};

handleSubmit = event => {
  event.preventDefault();
  if (this.state.amount > 0) {
    this.setState({ balance: parseInt(event.target.value) });
    console.log("submit")
  } else {
    alert("Please select an amount to add to your account.");
  }
};


render() {
  console.log(this.state);
  const { state, setState } = this.props
  return (

    <>
      <div class="container is-fluid">
        <div class="notification">


          <div class="card">
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
              <button href="#" value="10" onClick={this.handleAmountChange} class="card-footer-item">$10</button>
              <button href="#" value="25" onClick={this.handleAmountChange}  class="card-footer-item">$25</button>
              <button href="#" value="100" onClick={this.handleAmountChange}  class="card-footer-item">$100</button>
              <button href="#" value="1000" onClick={this.handleAmountChange}  class="card-footer-item">$1000</button>
            </footer>


            <div class="field">
              <label class="label">Otherwise, Please Enter Specific Amount</label>
              <div class="control">
                <input class="input" onChange={this.handleAmountChange} type="text" placeholder="Enter Amount"></input>
                <div ><br></br> </div>
              </div>


              <div class="field is-grouped">  
                <div class="control">
                  <button class="button is-link" 
                  //use future card as reference and use state on app pages
                  onSubmit={this.handleSubmit} >Submit</button>
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