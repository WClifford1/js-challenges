/*

Working individually or in pairs write out differnt tests which will
count the number of even numbers in an array. 

Try to have at least three different tests which test differnt values
put into your method, such as an empty array.

Once you have done done this, write out the method and check if it passes. 

Example: countEvens = ([1,2,3,4]) => 2

Hint:
If your having trouble writing tests, look up some of the previous challenges or try
Google - mocha tests to get an idea.

*/

const countEvens = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += 1
        }
    }
    return sum
}

// Your tests here
var assert = require('assert');

describe('countEvens', function () {
    it('Should return the correct amount of even numbers', function () {
        assert.equal(countEvens([2, 2, 2]), 3)
        assert.equal(countEvens([0, 1, 3]), 1)
        assert.equal(countEvens([1023, 1, 2, 90066]), 2)
    });
    it('Should return zero when only odd numbers numbers', function () {
        assert.equal(countEvens([3, 1, 5]), 0)
        assert.equal(countEvens([7, 13303, 3]), 0)
        assert.equal(countEvens([1023, 1, -33, -21]), 0)
    });
    it('Should return the correct amount of even numbers including zero and negative numbers', function () {
        assert.equal(countEvens([0, 0, 5]), 2)
        assert.equal(countEvens([-2, 1, 3]), 1)
        assert.equal(countEvens([1023, 1, 2, -2]), 2)
    });
});