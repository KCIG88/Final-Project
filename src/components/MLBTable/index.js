import React, { Component } from "react";
import API from "../../utils/API";

import "../../styles/mlbtable.css";

class MLBTable extends Component {

  state = {
    results: [],
  };


  componentDidMount() {
    this.getMLBapi();
  }


  getMLBapi = (props) => {
    API.getMLBoddsapi(props)
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
        <header>
        <h1 id="MLBbanner" >MLB Games 
        <img id="MLB-logo" src="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fmisc_logos%2F500%2Fmlb.png" width="112" height="28" align="center"></img></h1>
        </header>
        <table class="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Home Team</th>
              <th>Away Team</th>
              <th>Home Team Line</th>
              <th>Home Team Win</th>
              <th>Bet on this game</th>
            </tr>
          </thead>

          <tbody>
            {results.map(data => {
              return (<tr>
                <td>{data.commence_time}</td>
              <td>{data.home_team}</td>
              <td>{data.teams[0]}</td>
              <td></td>
              <td></td>
              <td><button>Place a Bet</button></td>

              </tr>
            )})} 
           

           </tbody>
        </table>
        </div></div>
        
      </>

    );
  }
}
export default MLBTable;