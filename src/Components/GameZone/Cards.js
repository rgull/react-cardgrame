import React from 'react';
import CardComponent from './CardComponent'

const PlayerCards = (props) => {
    return (
        <div className="player player-1">
            {props.cards.map((card, index) => {
                return (
                    <CardComponent index={index} key={card.code} data={card} turnPlayed={props.turnPlayed} />
                )
            })}
        </div>
    )
}

export default PlayerCards
