import React from 'react';
import { connect } from 'react-redux';
import { handleSelectedCard } from '../../Store/game/actions';

const CardComponent = (props) => {
    return (
        <React.Fragment>
            <img src={props.data.image} alt="card-info" width="90px"
                onClick={() => { props.turnPlayed(props.data) }} />
        </React.Fragment>
    )
}

export default connect(null, { handleSelectedCard })(CardComponent)
