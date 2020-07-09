import React, { Component } from "react";
import API from "../../utils/API";
import laLigaLogo from "../../images/laLigaOfficialLogo.png"
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

    const {state, setState, history} = this.props

    console.log(this.props.state)
    const eventTime = results.map(data => {
      return { ...data, commence_time: new Date(data.commence_time * 1000).toString() }
    })

    console.log(eventTime)

    console.log(this.props)
    return (

      <>
      <div class="container is-fluid">
      <div class="notification">
            <header>
              <h1 id="ligabanner"><strong>La Liga Soccer Games</strong>
              <img id="liga-logo" src={laLigaLogo} width="112" height="28" align="center" alt="ligalogo"></img></h1>
            </header> <br></br>
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
                {eventTime.map(data => {
                  console.log(data.sites[0])
                  if(data.sites[0] !== undefined){
                  return (<tr>
                    <td >{data.commence_time}</td>
                    <td>{data.teams[0]}</td>
                    <td>{data.teams[1]}</td>
                    <td>{data.sites[0].odds.spreads.points[0]}</td>
                    <td>{data.sites[0].odds.spreads.odds[0]}</td>

                    <td> <button onClick={ () => { 
                      setState({...state, bet: data})
                      //move to seperate page
                      history.push('/placebet')
                    }
                      }>Place a Bet</button></td>
                  </tr>
                  )
                          
                  }else {return ""}
                })}




              </tbody>
        </table>
        </div>
        </div>
        
      </>

    );
  }
}
export default LALIGATable;