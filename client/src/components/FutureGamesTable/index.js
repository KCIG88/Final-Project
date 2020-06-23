import React, { Component } from "react";
import API from "../../utils/API";

import "../../styles/FutureGamesTable.css";

class FutureGamesTables extends Component {
  constructor(props){
    super(props);
  }
  state ={
    result:[],
  };

  
  componentDidMount() {
  
    this.getgamesbyleague();
  }
   
   
  getgamesbyleague = (props) => {
        API.getnext15gamesbyleague(props)
          .then(res => {console.log(res)})
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };

  render(){
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
    <tr>
      <th>{}</th>
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
    </tr>
    
    
  
  </tbody>
</table>
  
</>
     
     );
  }
}
export default FutureGamesTables;