import React, { Component } from "react";
import API from "../../utils/API";

import "../../styles/NcaaTable.css";

class NCAATable extends Component {

  state = {
    results: [],
  };


  componentDidMount() {
    this.getNCAAapi();
  }


  getNCAAapi = (props) => {
    API.getNCAAoddsapi(props)
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
        <h1 id="NCAAbanner">Top Picked NCAA Football Games</h1>
        <a class="navbar-item" href="https://www.ncaa.com">
            <img id="logo" src="../images/ncaalogo.jpeg" justify-fit="center" alt="" />
        </a>
        <image id="ncaalogo" src="../images/ncaalogo.jpeg"></image>
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
        </div>
        </div>

      </>

    );
  }
}
export default NCAATable;