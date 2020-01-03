import React, { Component } from 'react'
import { connect } from 'react-redux';
import PlayerCards from './Cards';
import Playground from './Playground';
import Scorecard from './Scorecard';
import { ShuffleDeck, handleSelectedCard, moveToNextRound, calculateScore, evaluateWinner, gameOver } from '../../Store/game/actions';
import { Players } from '../../Services/Players';
import BotCards from './BotCards'
import './gamezone.css';

export class Gamezone extends Component {
    constructor(props) {
        super(props);
        console.log('GameZone Props', props)
        this.state = {
            playerName: props.location.state.playerName? props.location.state.playerName: 'Player I',
            numberOfPlayers: props.location.state.numberOfPlayers,
            startGame: false,
            gamePlayers: []
        }

        Players.unshift(this.state.playerName)
        this.state.gamePlayers = Players.slice(0, this.state.numberOfPlayers);
    }

    componentWillReceiveProps(nextProps) {
        //Evaluating winner once all cards have been played
        if (nextProps.sets[0] !== undefined) {
            if (!nextProps.sets[0].length) {
                this.props.evaluateWinner();
                this.props.gameOver();
            }
        }
    }

    //Distributing cards to players
    distributeCards = () => {
        for (let i = 0; i < this.state.numberOfPlayers; i++) {
            let cards = this.props.cards.cards.splice(0, 10);
            console.log('Cards', cards);
            this.props.ShuffleDeck(cards);
        }
        this.setState({ startGame: true })
    }

    //Processflow of one hand
    turnPlayed = (card) => {
        let index = this.props.sets[0].indexOf(card);
        this.props.handleSelectedCard(card);
        this.props.sets[0].splice(index, 1);
        this.handleBotPlayer();
    }

    //Handling bot player
    handleBotPlayer = () => {
        for (let i = 1; i < this.state.numberOfPlayers; i++) {
            let botCard = this.props.sets[i].splice(0, 1);
            this.props.handleSelectedCard(botCard[0]);
        }
        this.props.calculateScore();
        setTimeout(() => {
        this.props.moveToNextRound();
         }, 5000)
    }

    render() {
        console.log('Props', this.props);
        const {cards} = this.props
        const { startGame, gamePlayers, numberOfPlayers } = this.state
        console.log('State', this.state);
        let OpponentCards = []
        for(let i = 1; i<numberOfPlayers; i++){
           OpponentCards.push(<BotCards key={i} class={'player ' + 'player-'+(i+1)} />) 
        }


        if (!startGame) {
            return (
                <div className="gamezone">
                {cards.cards && <button onClick={this.distributeCards}>Deal</button>}
                </div>
            )
        } else {
            return (
                <div className="main-player-area">
                    <div className="main-cont">
                    <Playground cards={this.props.roundCards} />
                    {OpponentCards}
                    <PlayerCards cards={this.props.sets[0]} turnPlayed={this.turnPlayed} />
                    </div>
                    <Scorecard winner={this.props.winner} players={gamePlayers} scores={this.props.score} />
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    cards: state.game.cards,
    sets: state.game.sets,
    roundCards: state.game.roundCards,
    score: state.game.score,
    winner: state.game.winner
})

export default connect(mapStateToProps,
    { ShuffleDeck, handleSelectedCard, moveToNextRound, calculateScore, evaluateWinner, gameOver })(Gamezone)
