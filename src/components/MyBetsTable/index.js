import React from "react";
import "../../styles/MyBetsTable.css";



function MyBetsTable() {


    return (

        <>
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
                        <td><button>Place a Bet</button></td>
                    </tr></tbody>
                </table>
            </body>
        </div>
        </>

    );
}

export default MyBetsTable;