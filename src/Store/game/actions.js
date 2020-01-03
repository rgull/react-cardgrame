import { INITIALIZE_GAME, SHUFFLE_DECK, HANDLE_SELECTED_CARD, MOVE_TO_NEXT_ROUND, CALCULATE_SCORE, EVALUATE_WINNER, GAME_OVER } from './action-types';
import * as RequestService from '../../Services/RequestService';
import { CardValue } from '../../Services/CardValue'

export const InitializeGame = (players) => dispatch => {
    RequestService.fetchDeck(players).then(res => {
        res.cards.map(x => {
            return x.numericValue = CardValue[x.value]
        })
        return dispatch({
            type: INITIALIZE_GAME,
            payload: res,
            totalPlayers: players
        });
    }).catch(err => {
        console.log('Error', err)
    })
};

export const ShuffleDeck = (deck) => dispatch => {
    return dispatch({
        type: SHUFFLE_DECK,
        payload: deck
    })
}

export const handleSelectedCard = (card) => dispatch => {
    return dispatch({
        type: HANDLE_SELECTED_CARD,
        payload: card
    })
}

export const moveToNextRound = () => dispatch => {
    return dispatch({
        type: MOVE_TO_NEXT_ROUND
    })
}

export const calculateScore = () => dispatch => {
    return dispatch({
        type: CALCULATE_SCORE
    })
}

export const evaluateWinner = () => dispatch => {
    return dispatch({
        type: EVALUATE_WINNER
    })
}

export const gameOver = () => dispatch => {
    return dispatch({
        type: GAME_OVER
    })
}