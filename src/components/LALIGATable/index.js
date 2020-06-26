import React, { Component } from "react";
import API from "../../utils/API";

import "../../styles/LaLigaTable.css";

class LALIGATable extends Component {

  state = {
    results: [],
  };


  componentDidMount() {
    this.getLALIGAapi();
  }


  getLALIGAapi = (props) => {
    API.getLALIGAoddsapi(props)
      .then(res => this.setState({ results: res.data.data }))
      .then(res => { console.log(res) })
      .catch(err => console.log(err));
  };

  render() {
    const { results } = this.state
    console.log(results)
    return (

      <>
      <div class="container is-fluid">
  <div class="notification">
        <h1 id="ligabanner">LA Liga Games</h1> <br></br>
        <table class="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Home Team</th>
              <th>Away Team</th>
              <th>Home Team Spread Line</th>
              <th>Home Team Odds</th>
              <th>Bet on this game</th>
            </tr>
          </thead>

          <tbody>
            {results.map(data => {
              return (<tr>
                <td>{data.commence_time}</td>
              <td>{data.home_team}</td>
              <td>{data.teams[1]}</td>
              <td>{data.sites[0].odds.spreads.points[0]}</td>
              <td>{data.sites[0].odds.spreads.odds[0]}</td>
              <td><button>Place a Bet</button></td>

              </tr>
            )})} 
           

           </tbody>
        </table>
        </div>
        </div>
        
      </>

    );
  }
}
export default LALIGATable;