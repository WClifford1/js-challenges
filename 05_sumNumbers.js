// 1. Write a method that will take an array player scores for a series of games
// and return the name of the player with the highest total score.
// Test your solution:
// mocha 05_sumNumbers.js

// 2. Corner cases
// Think about corner cases. We give one in the tests below when
// the players are tied. Can you think of other corner cases?
// Write at least 2 more tests for corner cases and make sure your
// implementation passes those tests.



function findWinner(players) {
    // Create variables for each players total score
    let sum0 = players[0].scores.reduce((a,b) => a+b, 0)
    console.log(sum0)
    let sum1 = players[1].scores.reduce((a,b) => a+b, 0)
    console.log(sum1)

    // Return which player has the higher score
    if (sum0 > sum1) {
        return players[0].name
    } else if (sum1 > sum0) {
        return players[1].name
    } else {
        return players[0].name
    }
}


var assert = require('assert');

class Player {
    constructor(name, scores) {
        this.name = name
        this.scores = scores
    }
}


let players = []
describe('findWinner', function () {
    it('Should return the winner when winner is first in array', function () {
        players = [new Player('James', [200, 100, 85]), new Player('Nathan', [55, 90, 86])]
        assert.equal('James', findWinner(players))
    })
    it('Should return the winner when winner is second in array', function () {
        players = [new Player('Nathan', [55, 90, 86]), new Player('James', [200, 100, 85])]
        assert.equal('James', findWinner(players))
    })
    it('Should return the first player when both players are tied', function () {
        players = [new Player('Nathan', [50, 100, 85]), new Player('James', [50, 100, 85])]
        assert.equal('Nathan', findWinner(players))
    })
})