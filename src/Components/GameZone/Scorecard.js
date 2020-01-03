import React from 'react';
import './scorecard.css';
const Scorecard = ({ players, scores, winner }) => {
    let winnerPlayer = players[winner];
    let winnerScore = scores[winner];
    //Dynamicall creating table for players and scores
    let scoreTable = players.map((player, index) => {
        let score = scores[index];
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{player}</td>
                <td>{score}</td>
            </tr>)
    })
    return (
        <div className="scorecard-cont">
            <h2>Scorecard</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                    {scoreTable}
                </tbody>
            </table>
            {winnerPlayer && <p>Winner is {winnerPlayer} with score of {winnerScore}</p>}
        </div>
    )
}

export default Scorecard
