import React, { Component } from "react";



class AddBalanceCard extends Component {


  render() {
    return (

      <>
      <div class="container is-fluid">
  <div class="notification">
  







        <div class="card">
          <header class="card-header"><h2 class="card-header-title"> Add Funds </h2>
          </header>
          <div class="card-content">
            <div class="content">
            Select an amount below to debit funds from your bank and add to
              your Better Sports account. Please note: a maximum of $5000 may be
              added at one time.
            </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">$10</a>
              <a href="#" class="card-footer-item">$25</a>
              <a href="#" class="card-footer-item">$100</a>
              <a href="#" class="card-footer-item">$1000</a>
            </footer>

            
            <div class="field">
            <label class="label">Otherwise, Please Enter Specific Amount</label>
            <div class="control">
            <input class="input" type="text" placeholder="Enter Amount"></input>
            <div ><br></br> </div>
            </div>


            <div class="field is-grouped">
            <div class="control">
            <button class="button is-link">Submit</button>
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