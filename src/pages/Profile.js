import React, { Fragment } from "react";
import "../styles/Profile.css";
import { useAuth0 } from "../react-auth0-spa";




const Profile = () => {
    const { loading, user } = useAuth0();

    if (loading || !user) {
        return <div>Loading...</div>;
    }

    return (
        <body>
            {/* <img src='https://avatars0.githubusercontent.com/u/58921765?v=4' class="rounded-circle" alt="" id='profileImg'></img> */}
            <div class="container is-fluid">
                <div class="jumbotron text-center shadow p-3 mb-5 bg-light rounded">
                    <Fragment>
                        <img src={user.picture} alt="Profile" />
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        {/* <code>{JSON.stringify(user, null, 2)}</code> */}
                    </Fragment>
                    <button>Add Funds</button>
                </div>
            </div>
            <div class="container">
                <div class="jumbotron text-center shadow p-3 mb-5 bg-light rounded">
                    <div>
                        <body>
                            <p>My Bets</p>
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
                                <tbody> <tr>
                                    <th>01/01/2020</th>
                                    <td>Leicester City </td>
                                    <td>Liverpool</td>
                                    <td>-1.5(-153)</td>
                                    <td>-200</td>
                                    <td><button>Add Funds</button></td>
                                </tr></tbody>
                            </table>
                        </body>
                    </div>
                </div>
            </div>
        </body>


    );
};

export default Profile;