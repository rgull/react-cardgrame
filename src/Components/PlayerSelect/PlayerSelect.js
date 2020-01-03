import React, { useState } from 'react'
import { connect } from 'react-redux';
import { InitializeGame } from '../../Store/game/actions';
import './PlayerSelect.css';

const PlayerSelect = (props) => {
    const [players, setPlayer] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('')
    //Validation for number of players
    const Validator = (name, numberOfPlayers) => {
        if (numberOfPlayers < 2) {
            setError('Choose at least 2 players')
        } else if (numberOfPlayers > 4) {
            setError('Number of Players cannot exceed 4');
        } else {
            props.InitializeGame(numberOfPlayers * 10);
            props.history.push('./gamezone', { playerName: name, numberOfPlayers: numberOfPlayers })
        }
    }
    return (
        <div className="player-cont">
            <div className="frm-cont">
                <div className="form-group">
                    <label>Enter Your Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                <label>Select Number of Players</label>
                <input type="number" value={players} onChange={(e) => setPlayer(e.target.value)} />
                </div>
                {!error && <p>Please Choose 2-4 Players</p>}
                {error && <p>{error}</p>}
                <button disabled={!players} onClick={() => { Validator(name, players) }}>Go</button>
            </div>
        </div>
    )
}

export default connect(null, { InitializeGame })(PlayerSelect)