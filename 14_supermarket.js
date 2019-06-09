/*
There is a queue for the self-checkout tills at the supermarket. 
Your task is write a function to calculate the total time required for 
all the customers to check out!

The function has two input variables:
    customers: an array of positive integers 
            representing the queue. Each integer represents a customer, 
            and its value is the amount of time they require to check out.
    n: a positive integer, the number of checkout tills.

The function should consider each person in order, and add them to the 
'smallest' line at that time (the line with the least total time).

The function should return an integer, the time it takes for all lines to empty.

For example, if the input queue is [1,2,3,4,5,6] and there are 2 tills,
the queue would be separated as follows:
till1       till2
1           2
3           4
5           6
---         ---
9           12

So this would take 12 total time, since all customers will be served when
the last customer at till2 is served.

Check your solutions with mocha 16_supermarket.js
*/



function queueTime(customers, n) {

    if (customers.length == 0) {
        // If there are no customers there will be no wait time so return 0
        return 0

    } else if (customers.length <= n) {
        // If there are more tills than customers return the customer with the highest wait time
        return Math.max(...customers)

    } else {
        // Initalize newarr which will be the array of total wait times
        let newarr = []

        // Sort the customers array so the lowest values are first
        // Assign the values of newarr to the values of customers with the same index
        // This means each til will have one customer each of the customers with the lowest wait times
        for (let i = 0; i < n; i++) {
            customers.sort()
            newarr[i] = customers[i]
        }

        // Remove the values from customers that are already in newarr
        // Reverse the customers array, so that the customers with the longest wait times are first
        customers.splice(0, n)
        customers.reverse()

        // Go through newarr, smallest value first, and add the largest value first from customers array
        // This means that the largest values get added to the smallest values, thus giving the lowest total wait times
        while (customers.length > 0) {
            for (let i = 0; i < n; i++) {
                newarr[i] += customers[i]
            }
            customers.splice(0, n)
        }

        // Return the highest value in newarr
        return Math.max(...newarr)
    }
};

// [1, 2, 3, 4, 5, 6], 2), 12)


const assert = require('assert');

describe('queueTime', function () {
    context('Should return the correct queue time', function () {
        it('Should return 10 with [1,2,3,4] and 1 till', function () {
            assert.equal(queueTime([1, 2, 3, 4], 1), 10)
        })
        it('Should return 9 with [2,2,3,3,4,4] and 2 tills', function () {
            assert.equal(queueTime([2, 2, 3, 3, 4, 4], 2), 9)
        })
        it('Should return 12 with [1,2,3,4,5,6] and 2 tills', function () {
            assert.equal(queueTime([1, 2, 3, 4, 5, 6], 2), 11)
        })
        it('Should return 5 with [2,1,4,2,3,1] and 3 tills', function () {
            assert.equal(queueTime([2, 1, 4, 2, 3, 1], 3), 5)
        })

    })
    context('Should return 0 if there are no customers', function () {
        it('Should return 0 if there are no customers and 1 till', function () {
            assert.equal(queueTime([], 1), 0)
        })
        it('Should return 0 if there are no customers and 5 tills', function () {
            assert.equal(queueTime([], 5), 0)
        })

    })
    context('Should return the correct queue time if tills is greater than customers', function () {
        it('Should return the largest value - 5 - with [1,2,3,4,5] and 100 tills', function () {
            assert.equal(queueTime([1, 2, 3, 4, 5], 100), 5)
        })
        it('Should return the largest value - 5 - with [1,2,3,4,5] and 6 tills', function () {
            assert.equal(queueTime([1, 2, 3, 4, 5], 6), 5)
        })

    })
})