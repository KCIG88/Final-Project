import React, { Component } from "react";
import API from "../../utils/API";

import "../../styles/NFLTable.css";

class NflTable extends Component {

  state = {
    results: [],
  };


  componentDidMount() {
    this.getNFLapi();
  }


  getNFLapi = (props) => {
    API.getNFLoddsapi(props)
      .then(res => this.setState({ results: res.data.data }))
      .then(res => { console.log(res) })
      .catch(err => console.log(err));
  };

  render() {
    const { results } = this.state
    console.log(results)
    return (

      <>
        <h1>Week 1-16 NFL Games</h1>
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
              <td><button>Add Funds</button></td>

              </tr>
            )})} 
           

           </tbody>
        </table>

      </>

    );
  }
}
export default NflTable;