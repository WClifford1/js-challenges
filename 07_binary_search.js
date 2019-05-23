/*
Write a method which will act as a binary search which will find the 
position of a number in a sorted array and the number of steps required 
to find the position. 
When the array has an even number of values, the midpoint index should 
be rounded up.

Example:
    sortedArray = [1,5,8,12,20,21,35]
    searchValue = 12

    In this case the index returned would be 2 and it should take 3 steps. 
    In the first step, 3 is the midpoint index (value = 12). 
    In the second step 1 is the midpoint index (value = 5). 
    In the third and final step we are only left with 8 at index 2.
*/

function binarySearch(sortedArray, searchValue) {

    // newarr will be the array that the function binarySearch returns to pass the tests
    let newarr = [],
    // foundValue is the index number of the searchValue.
    // this is one of the two numbers that will make up newarr
    foundValue = sortedArray.indexOf(searchValue),
    // counter will increment for each binary search,
    // this will be the second number that makes up newarr
    counter = 0
    
    // Call the numSearchers function to get the result for the counter
    numSearchers(sortedArray)
   
    
    function numSearchers(sortedArray) {
        // If the array length is odd and the midpoint value is greater than the searchValue do this:
        // 1. Remove all elements from the array that are greater than the midpoint
        // 2. The array will now contain an even amount of elements
        // 3. Restart the function
        if (sortedArray[(sortedArray.length -1) / 2] > searchValue && sortedArray.length % 2 !== 0) {
            sortedArray.splice(((sortedArray.length +1) / 2), (sortedArray.length -1) / 2)
            counter +=1
            numSearchers(sortedArray)
        
        // If the array length is odd and the midpoint value is less than the searchValue do this:
        // 1. Remove all elements from the array that are less than the midpoint, also remove the midpoint
        // 2. The array will now contain an odd amount of elements
        // 3. Restart the function
        } else if (sortedArray[(sortedArray.length -1) / 2] < searchValue && sortedArray.length % 2 !== 0) {
            sortedArray.splice(0, (sortedArray.length -1) / 2 + 1)
            counter +=1
            numSearchers(sortedArray)
  
        // If the array length is odd and the midpoint is the same as the searchValue, there is no requirement to do anymore
        // binary searches, the counter will increment for the final time and the function will stop
        } else if (sortedArray[(sortedArray.length -1) / 2] === searchValue && sortedArray.length % 2 !== 0) {
            counter += 1
        }


    // If the array length is even the midpoint will now be the element with an index of the array length divided by 2
   
        // If the array length is even and the midpoint value is greater than the searchValue do this:
        // 1. Remove all elements from the array that are greater than the midpoint, also remove the midpoint
        // 2. The array will now contain an odd amount of elements
        // 3. Restart the function
        if (sortedArray[((sortedArray.length) / 2) -1] > searchValue && sortedArray.length % 2 == 0) {
            sortedArray.splice(((sortedArray.length / 2) - 1), (sortedArray.length / 2) + 1)
            counter +=1
            numSearchers(sortedArray)
            
        // If the array length is even and the midpoint value is less than the searchValue do this:
        // remove all elements from the array that are less than the midpoint, also remove the midpoint
        // The array will now contain an odd amount of elements
        // 3. Restart the function
        } else if (sortedArray[((sortedArray.length) / 2) -1] < searchValue && sortedArray.length % 2 == 0) {
            sortedArray.splice(0, (sortedArray.length / 2) - 1)
            counter +=1
            numSearchers(sortedArray)

        // If the array length is even and the midpoint is the same as the searchValue, there is no requirement to do anymore
        // binary searches, the counter will increment for the final time and the function will stop
        } else if (sortedArray[((sortedArray.length) / 2) - 1] === searchValue && sortedArray.length % 2 == 0) {
            counter +=1
        }
    }

    // Into newarr push the foundValue - which is just the index number of the searchValue, declared at the top
    // Push the counter - which is the number of binary searches it took to find the searchValue
    // The counter is representative of how many times the numSearchers function was ran
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