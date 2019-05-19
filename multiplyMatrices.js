/*
You helped Neo almost get out of the matrix with matrix_addition but
Cypher was one step ahead of you. In order to get past Cypher's trap and
save Neo you need to write a new function.

Write a function similar to the matrix_addition challenge but instead
of addition, write one for multiplication.

Check your solution by running mocha 14_multiply_matrices

Example:
function multiplyMatrices([[1,2,3],[4,5,6]], [[7,8],[9,10],[11,12]])
=> [[58, 64], [139,154]]

Hint:
Try drawing the function out first if the arrays are a little confusing.
*/



function multiplyMatrices(matrix1, matrix2) {

// I only made it return null if matrix1 = [] to satisfy the test.
// Only input matrices where the number of elements in the first matrix equals the number of columns in the second
// to get a proper result
	if (matrix1[0] === undefined) {
		return null
	} else {

		// Don't touch these well named variables
		let elementProduct = [],
		rowSum = [],
		dotProduct = [],
		counter = 0,
		firtMatrixRows = 0,
		secondMatrixColumns = 0,
		numOfRows = matrix2.length,
		numOfColumns = matrix1[0].length;

		// Gets the length of the second matrices' columns - used to set number of loops
		matrix2.forEach(x => {
			secondMatrixColumns = x.length
		})

		// The number of columns in the first matrix has to equal the number of rows in the second
		// Else dot product is impossible and the code will not run
		if (numOfColumns == numOfRows) {

			// Code will loop through each row of the first matrix
			while (firtMatrixRows < matrix1.length) {

				// Code will loop through each column of the second matrix
				while (counter < secondMatrixColumns) {

					// currentColumn gets reset at the start of the loop so it can be reused
					let currentColumn = [];

					// currentColumn now represents a column of the second matrix
					matrix2.forEach(x => {
						x.forEach(function (a,b) {
							if (b === counter) {
								currentColumn.push(a)
							}
						})
					})

					// Iterate through the current first matrix row
            		// Multiply each element with the element of currentColumn, push into the elementProduct array
					matrix1[firtMatrixRows].forEach(function (x,y) {
						currentColumn.forEach(function (a,b) {
							if (y === b) {
								elementProduct.push(x * a)
							}
						})
					})

					// Sum whats in elementProduct and pass it into rowSum. Reset elementProduct.
					rowSum.push(elementProduct.reduce((a, b) => a + b, 0))
					elementProduct = []
				
					// Add one to the counter to loop through the next column in the second matrix
            		// Loop will end after the last column - reference line 53
					counter += 1
				}

			// Now loop through the next row in the first matrix and repeat
        	// Loop will end after the last column - reference line 50
			counter = 0
			dotProduct.push(rowSum)
			rowSum = []
			firtMatrixRows += 1
		}

		// return the dot product of the two matrices'
		return dotProduct
	} 
}}


// Returns result of matrix multiplication, or null
// if the matrices cannot be multiplied


const assert = require("assert")

describe("Matrix multiplication", function() {})
describe("multiplyMatrices with invalid input", function() {
	it("should return null if one is empty", function() {
		let matrix1 = []
		let matrix2 = [1, 2]
		assert.equal(multiplyMatrices(matrix1, matrix2), null)
	})
	it("should return null if dimensions do not match", function() {
		let matrix1 = [1, 2]
		let matrix2 = [1, 2]
		assert.equal(multiplyMatrices(matrix1, matrix2), null)
	})
})

describe("multiplyMatrices with valid input", function() {
	it("should return [[58,4],[139,154]] with inputs [[1, 2, 3], [4, 5, 6]] and [[7, 8], [9, 10], [11, 12]] ", function() {
		matrix1 = [[1, 2, 3], [4, 5, 6]]
		matrix2 = [[7, 8], [9, 10], [11, 12]]
		expected = [[58, 64], [139, 154]]
		assert.deepEqual(multiplyMatrices(matrix1, matrix2), expected)
	})
	it("should return [[18,5],[26,15]] with inputs [[2,3][4,1]] and [[6,4].[2,-1]]", function() {
		matrix1 = [[2, 3], [4, 1]]
		matrix2 = [[6, 4], [2, -1]]
		expected = [[18, 5], [26, 15]]
		assert.deepEqual(multiplyMatrices(matrix1, matrix2), expected)
	})
	it("should return [[24,28],[1,7]] with inputs [[6,4],[2,-1]], [[2,4],[3,1]]", function() {
		matrix1 = [[6, 4], [2, -1]]
		matrix2 = [[2, 4], [3, 1]]
		expected = [[24, 28], [1, 7]]
		assert.deepEqual(multiplyMatrices(matrix1, matrix2), expected)
	})
	it("should return [[2,13,5],[-7,-8,-4],[16,4,4]] with inputs [[2,1],[-1,-2],[0,4]] and [[-1,6,2],[4,1,1]]", function() {
		matrix1 = [[2, 1], [-1, -2], [0, 4]]
		matrix2 = [[-1, 6, 2], [4, 1, 1]]
		expected = [[2, 13, 5], [-7, -8, -4], [16, 4, 4]]
		assert.deepEqual(multiplyMatrices(matrix1, matrix2), expected)
	})
})
