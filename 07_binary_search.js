/*
Write a method which will act as a binary search which will find the 
position of a number in a sorted array and the number of steps required 
to find the position. 
When the array has an even number of values, the midpoint index should 
be rounded up.

Example:
    sortedArray = [1,5,8,12,20,21,35,55]
    searchValue = 21

    In this case the index returned would be 2 and it should take 3 steps. 
    In the first step, 3 is the midpoint index (value = 12). 
    In the second step 1 is the midpoint index (value = 5). 
    In the third and final step we are only left with 8 at index 2.
*/

function binarySearch(sortedArray, searchValue) {

    // newarr will be the array that I return
    let newarr = [],
    // foundValue is simply the index number of the searchValue.
    // this is one of the numbers that will make up newarr
    foundValue = sortedArray.indexOf(searchValue),
    // counter will increment for each binary search
    // this will be the second number that makes up newarr
    counter = 0

    // the position of the centre element will differ depending on whether
    // the array has an even or odd length

    // If the array length is an odd number, start off by running the oddLength function:
    if (sortedArray.length % 2 !== 0) {
        oddLength(sortedArray)
    // If the array length is an even number, start off by running the evenLength function:
    } else if (sortedArray.length % 2 == 0) {
        evenLength(sortedArray)
    }


    // the oddLength function will be called when the array has an odd number of elements
    // it will use the middle element of the array as the midpoint.
    function oddLength(sortedArray) {

        // If the midpoint value is greater than the searchValue do this:
        // remove all elements from the array that are greater than the midpoint
        // the array will now contain an even amount of elements
        // since the array length is now an even number, the evenLength function will be called
        if (sortedArray[(sortedArray.length -1) / 2] > searchValue) {
            sortedArray.splice(((sortedArray.length +1) / 2), (sortedArray.length -1) / 2)
            counter +=1
            evenLength(sortedArray)
        
        // If the midpoint value is less than the searchValue do this:
        // remove all elements from the array that are less than the midpoint, also remove the midpoint
        // the array will now contain an odd amount of elements
        // since the array length is now an odd number, the oddLength function will be called
        } else if (sortedArray[(sortedArray.length -1) / 2] < searchValue) {
            sortedArray.splice(0, (sortedArray.length -1) / 2 + 1)
            counter +=1
            oddLength(sortedArray)
  
        // If the midpoint is the same as the searchValue, there is no requirement to do anymore
        // binary searches, the counter will increment for the final time
        } else if (sortedArray[(sortedArray.length -1) / 2] === searchValue) {
            counter +=1
        }
    }


    // the evenLength function will be called when the array has an even number of elements
    // the midpoint will now be the element with an index of the arraylength divided by 2
    function evenLength(sortedArray) {

        // If the midpoint value is greater than the searchValue do this:
        // remove all elements from the array that are greater than the midpoint, also remove the midpoint
        // the array will now contain an odd amount of elements
        // since the array length is now an odd number, the oddLength function will be called
        if (sortedArray[((sortedArray.length) / 2) -1] > searchValue) {
            sortedArray.splice(((sortedArray.length / 2) - 1), (sortedArray.length / 2) + 1)
            counter +=1
            oddLength(sortedArray)
            
        // If the midpoint value is less than the searchValue do this:
        // remove all elements from the array that are less than the midpoint, also remove the midpoint
        // the array will now contain an odd amount of elements
        // since the array length is now an odd number, the oddLength function will be called
        } else if (sortedArray[((sortedArray.length) / 2) -1] < searchValue) {
            sortedArray.splice(0, (sortedArray.length / 2) - 1)
            counter +=1
            oddLength(sortedArray)

        // If the midpoint is the same as the searchValue, there is no requirement to do anymore
        // binary searches, the counter will increment for the final time
        } else if (sortedArray[((sortedArray.length) / 2) - 1] === searchValue) {
            counter +=1
        }
    }


    // Into newarr push the foundValue - which is just the index number of the searchValue
    // push the counter - which is the number of binary searches it took to find the searchValue
    // the counter also represents the number of times we called evenLength and offLength
    newarr.push(foundValue)
    newarr.push(counter)
    return newarr
}


let assert = require('assert')

describe('Count loops', function () {
    it('Should count one step when search values is in the middle', function () {
        assert.deepEqual([3, 1], binarySearch([1, 3, 7, 10, 14, 19, 31], 10))
    })
    it('Should count one step when search value is only value', function () {
        assert.deepEqual([0, 1], binarySearch([1], 1))
    })
    it('Should count length divided by two steps when value is at beginning', function () {
        assert.deepEqual([0, 3], binarySearch([1, 3, 7, 10, 14, 19, 31], 1))
    })
    it('Should count half the array length when value is at an end', function () {
        assert.deepEqual([6, 3], binarySearch([1, 3, 7, 10, 14, 19, 31], 31))
    })
})