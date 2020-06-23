import React, { Component } from "react";
import API from "../../utils/API";

import "../../styles/FutureGamesTable.css";

class FutureGamesTables extends Component {

  state = {
    results: [{}],
  };


  componentDidMount() {
    this.getgamesbyleague();
  }


  getgamesbyleague = (props) => {
    API.getnext15gamesbyleague(props)
      .then(res => this.setState({ results: res.data.events }))
      .then(res => { console.log(res) })
      .catch(err => console.log(err));
  };

  render() {
    const {results} = this.state
    console.log(results)
    return (

      <>
        <h1>Future Games</h1>
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
            {results.map(event => {
              return (<tr>
                <th>{event.dateEvent}</th>
              <td>{event.strHomeTeam}</td>
              <td>{event.strAwayTeam}</td>
              <td>-1.5(-153)</td>
              <td>-200</td>
              <td><button>Add Funds</button></td>

              </tr>
            )})}
            {/* <tr>
              <th>{results[0].dateEvent}</th>
              <td>Leceister city</td>
              <td>Liverpool</td>
              <td>-1.5(-153)</td>
              <td>-200</td>
              <td><button>Add Funds</button></td>
            </tr>
            <tr>
              <th>01/01/2020</th>
              <td>Leicester City </td>
              <td>Liverpool</td>
              <td>-1.5(-153)</td>
              <td>-200</td>
              <td><button>Add Funds</button></td>
            </tr>
            <tr>
              <th>01/01/2020</th>
              <td>Leicester City </td>
              <td>Liverpool</td>
              <td>-1.5(-153)</td>
              <td>-200</td>
              <td><button>Add Funds</button></td>
            </tr>
            <tr>
              <th>01/01/2020</th>
              <td>Leicester City </td>
              <td>Liverpool</td>
              <td>-1.5(-153)</td>
              <td>-200</td>
              <td><button>Add Funds</button></td>
            </tr>
            <tr>
              <th>01/01/2020</th>
              <td>Leicester City </td>
              <td>Liverpool</td>
              <td>-1.5(-153)</td>
              <td>-200</td>
              <td><button>Add Funds</button></td>
            </tr>
            <tr>
              <th>01/01/2020</th>
              <td>Leicester City </td>
              <td>Liverpool</td>
              <td>-1.5(-153)</td>
              <td>-200</td>
              <td>Button</td>
            </tr> */}



          </tbody>
        </table>

      </>

    );
  }
}
export default FutureGamesTables;