import React, { Component } from "react";
import "../../styles/BundesligaTable.css";


class PlaceBetCard extends Component {


  render() {
    return (

      <>
        <div class="container is-fluid">
          <div class="notification">

            <div className="betsFormContainer">
              <div className="betsFormForm">
                <form onSubmit="">
                  <h1>Make A Bet</h1>
                  <p>
                    Please select your wager amount and the outcome you are betting
                on. <span>Maximum bet of $10,000.</span>
                  </p>
                  <hr />

                  <h3>
                    <span>Home team:</span> {}
                  </h3>
                  <h3>
                    <span>Away team:</span> {}
                  </h3>

                  <div className="betWager">
                    <h4>Select a wager:</h4>
                    <div className="betWagerBtn">
                      <button type="button" value="50" onClick={""}>
                        $50
                  </button>
                      <button type="button" value="100" onClick={""}>
                        $100
                  </button>
                      <button type="button" value="250" onClick={""}>
                        $250
                  </button>
                      <button type="button" value="500" onClick={""}>
                        $500
                  </button>
                      <input
                        id="wagerInput"
                        type="text"
                        placeholder="Enter Amount $"
                        onChange={""}
                      />
                    </div>
                  </div>


                  <div className="betOutcome">
                    <h4>Select a outcome:</h4>
                    <div className="betOutcomeBtn">
                      <button
                        type="button"
                        name="Home Win"
                        value="one"
                        onClick={""}
                      >
                        Home win
                  </button>

                      <button
                        type="button"
                        name="Away Win"
                        value="two"
                        onClick={""}
                      >
                        Away Win
                  </button>
                      <button
                        type="button"
                        name="Draw"
                        value="draw"
                        onClick={""}
                      >
                        Draw
                  </button>

                      <button
                        type="button"
                        name="Home Win or Draw"
                        value="oneDraw"
                        onClick={""}
                      >
                        Home Spread
                  </button>
                      <button
                        type="button"
                        name="Away Win or Draw"
                        value="twoDraw"
                        onClick={""}
                      >
                        Away Spread
                  </button>
                    </div>
                  </div>


                  <div className="finalBet">
                    <h3>Your prediction:</h3>

                    <table>
                      <thead>
                        <tr>
                          <th> Prediction </th>
                          <th> Odds </th>
                          <th> Wager </th>
                          <th> Potential Win </th>
                        </tr>
                      </thead>
                      <tbody>

                      </tbody>
                    </table>
                  </div>
                  <br />
                  <p>
                    Betting is a risk, and by placing this bet you acknowledge that
                    you take that risk willingly.
              </p>
                  <div className="clearfix">

                    <button
                      type="button"
                      className="cancelbtn"

                    >
                      Cancel
                </button>

                    <button type="submit" className="signupbtn">
                      Submit
                </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>

      </>

    );
  }
}
export default PlaceBetCard;