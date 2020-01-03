import { INITIALIZE_GAME, SHUFFLE_DECK, HANDLE_SELECTED_CARD, MOVE_TO_NEXT_ROUND, CALCULATE_SCORE, EVALUATE_WINNER, GAME_OVER } from './action-types';
import { evaluateScore, evaluateWinner } from '../../Services/ScoreService'

const initialState = {
    totalPlayers: '',
    cards: [],
    sets: [],
    roundCards: [],
    score: [0, 0, 0, 0, 0],
    winner: ''
}


export default function (state = initialState, action) {
    switch (action.type) {
        case INITIALIZE_GAME:
            console.log('Cards', action.payload)
            return {
                ...state,
                cards: action.payload
            }
        case SHUFFLE_DECK:
            // let sets = state.sets;
            // sets.push(action.payload)
            return {
                ...state,
                sets: [...state.sets, action.payload]
            }
        case HANDLE_SELECTED_CARD:
            return {
                ...state,
                roundCards: [...state.roundCards, action.payload]
            }
        case MOVE_TO_NEXT_ROUND:
            return {
                ...state,
                roundCards: []
            }
        case CALCULATE_SCORE:
            let cards = state.roundCards.slice()
            let scores = state.score.slice()
            return {
                ...state,
                score: evaluateScore(cards, scores)
            }

        case EVALUATE_WINNER:
            let score = state.score.slice()
            return {
                ...state,
                winner: evaluateWinner(score)
            }
            case GAME_OVER:
            return {
                ...state
            }
        default:
            return state;
    }
}