import React from "react";
import "../../styles/MyBetsTable.css";



function MyBetsTable() {


    return (

        <>
        <div class="container is-fluid">
        <div class="notification">
        <div>
            
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
                        <th>Bet on this game</th>
                        </tr>
                    </thead>
                    <tbody> <tr>
                        <td>01/01/2020(Sample)</td>
                        <td>Leicester City(SampleData) </td>
                        <td>Liverpool(SampleData)</td>
                        <td>-1.5(-153)(SampleData)</td>
                        <td>-200(Sample)</td>
                        <td><button class="button-is-hovered">Place a Bet</button></td>
                    </tr></tbody>
                </table>
            
        </div>
        </div>
</div>
        </>

    );
}

export default MyBetsTable;