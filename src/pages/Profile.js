import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../styles/Profile.css";
// import Axios from "axios";
import jwt_decode from 'jwt-decode'
import { withRouter } from "react-router-dom";



class Profile extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            userName: "",
            balance: "",

        }
    }

    componentDidMount() {
        const token = localStorage.getItem("token")
        const decoded = jwt_decode(token)
        if (token) {
            jwt_decode(token);
        } else { this.props.history.push('/login') }
        this.setState({
            _id: decoded._id,
            email: decoded.email,
            userName: decoded.userName,
            balance: decoded.balance,
        })
    }


    render() {

        const {state, setState, history} = this.props

        console.log(this.state.balance)

        return (
            <body>
                <br></br>
                {/* <img src='https://avatars0.githubusercontent.com/u/58921765?v=4' class="rounded-circle" alt="" id='profileImg'></img> */}
                < div class="container" id="profileContainer" >
                    <div class="jumbotron text-center shadow p-3 mb-5">
                        <img class="is-center" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="128px" height="128px" alt="profileImg"></img>
                        <h2>Username: {this.state.userName}</h2>
                        <h2>Email: {this.state.email}</h2>
                        <h2>Available Funds: $ {this.state.balance}</h2>
                        <Link to="/addBalance"> <button o>Add Funds</button></Link>
                    </div>
                </div >
                <br></br>
                <div class="container">
                    <div class="jumbotron text-center shadow p-3 mb-5 bg-light">
                        <div>
                            <body>
                                <h1>My Bets</h1>
                                <br></br>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Home Team</th>
                                            <th>Away Team</th>
                                            <th>Home Team Line</th>
                                            <th>Home Team Win</th>
                                            {/* <th>Bet on this game</th> */}
                                        </tr>
                                    </thead>
                                    <tbody> <tr>
                                        <td>01/01/2020</td>
                                        <td>Leicester City </td>
                                        <td>Liverpool</td>
                                        <td>-1.5(-153)</td>
                                        <td>-200</td>
                                        {/* <td><button onClick={() => {
                                            setState({ ...state, bet: data })
                                            //move to seperate page
                                            history.push('/placebet')
                                        }
                                        }>Place Bet</button></td> */}
                                    </tr></tbody>
                                </table>
                            </body>
                        </div>
                    </div>
                </div>
            </body >


        );
    };
}

export default withRouter(Profile);