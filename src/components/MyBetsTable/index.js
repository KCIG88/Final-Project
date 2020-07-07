import React from "react";
import "../../styles/MyBetsTable.css";



function PastBetsTable() {


    return (

        <>
        <div class="container is-fluid">
        <div class="notification">
        <div>
            
                <h1>Current Bets</h1>
                <br></br>
                <table class="table">
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Home Team</th>
                        <th>Away Team</th>
                        <th>Home Team Line</th>
                        <th>Home Team Win</th>
                        <th>Result</th>
                        </tr>
                    </thead>
                    <tbody> <tr>
                        <td>Sat Jul 04 2020 13:00:17 GMT-0400 (Eastern Daylight Time)</td>
                        <td>Leicester City </td>
                        <td>Liverpool</td>
                        <td>-1.5</td>
                        <td>1.89</td>
                        <td><button class="button-is-hovered">Place a Bet</button></td>
                    </tr></tbody>
                </table>
            
        </div>
        </div>
</div>
        </>

    );
}

export default PastBetsTable;