import React, { Component } from "react";
import API from "../../utils/API";
//import Logo from "../../images/nfl-logo.jpeg";
import "../../styles/nflTable.css";

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
         <div class="container is-fluid">
          <div class="notification">
          <header>
        <h1 id="NFLbanner" >Week 1-16 NFL Games
        <img id="Nfl-logo" src="https://lh3.googleusercontent.com/proxy/Ek_wc3KYtvkXwVtUSccJDAsz2HxvoDu6MXyo6fyo9RZNw2fUtfg_mUSKYsjwTiccNPDRpyznrYxdQV6L9dKXjCRxwVzj7HBL2mRnJsJK8dK8K2_9LIKoN__A" width="112" height="28" align="center" alt="nfllogo"></img></h1>
        </header> <br></br>
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
              <td>{data.teams[0]}</td>
              <td>{data.teams[1]}</td>
              <td>{-7.5}</td>
              <td>{1.89}</td>
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
export default NflTable;