import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "../../styles/FutureGamesTable.css";

class FutureGamesTables extends Component {

  state = {
    results: [{}],
  };


  componentDidMount() {
    this.getsocceroddsapi();
  }


  // getgamesbyleague = (props) => {
  //   API.getnext15gamesbyleague(props)
  //     .then(res => this.setState({ results: res }))
  //     .then(res => { console.log(res) })
  //     .catch(err => console.log(err));
  // };

  getsocceroddsapi = (props) => {
    API.getoddsapi(props)
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
        <h1>Upcoming Games</h1>
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
              <td>{data.teams}</td>
              <td>{}</td>
              <td>{-200}</td>
              
              <td><Link to="/placebet"><button>Place a Bet</button></Link></td>
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
export default FutureGamesTables;
