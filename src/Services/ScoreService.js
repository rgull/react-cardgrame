export const evaluateScore = (cards, scores) => {
    let cardCopy = [...cards].map(x => x.numericValue)
    let maxValue = Math.max.apply(Math, cardCopy);
    let index = cardCopy.indexOf(maxValue);
    let score = cardCopy.reduce((a, b) => a + b, 0);

    if (scores[index] !== 0) {
        scores[index] += score;
    } else if (scores[index] === 0) {
        scores.splice(index, 1, score);
    }

    return scores;
}

export const evaluateWinner = (scores) => {
    let winnerScore = Math.max.apply(Math, scores);
    let winnerIndex = scores.indexOf(winnerScore);
    
    return winnerIndex;
}