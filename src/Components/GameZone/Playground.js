import React from 'react';
import './playground.css';

const Playground = (props) => {
    console.log('Playground Props', props)
    return (
        <div className="shown-card">
            {props.cards.map(card => {
                return (
                    <React.Fragment key={card.code}>
                        <img alt="card-info" src={card.image} />
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Playground
