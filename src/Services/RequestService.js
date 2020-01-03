
const baseURL = 'https://deckofcardsapi.com/api';

export const fetchDeck = (number) => {
    console.log('Number', number)
    return fetch(`${baseURL}/deck/new/draw/?count=${number}`).then(res => res.json())
}