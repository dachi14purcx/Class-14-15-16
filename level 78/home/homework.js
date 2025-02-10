// 1
function matrixSum(matrix1, matrix2) {
    // Check if matrices have the same dimensions
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        throw new Error("Matrices must have the same dimensions");
    }
    
    // Compute the sum of the matrices
    let result = matrix1.map((row, i) => 
        row.map((val, j) => val + matrix2[i][j])
    );
    
    return result;
}

// Test
const matrix1 = [[1, 3], [1, 4]];
const matrix2 = [[4, 1], [2, 2]];
const result = matrixSum(matrix1, matrix2);
console.log(result); // [[5, 4], [5, 5]]

// 2
function transposeMatrix(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

// 3
function diagonalSums(matrix) {
    let primarySum = 0, secondarySum = 0;
    let n = matrix.length;
    
    for (let i = 0; i < n; i++) {
        primarySum += matrix[i][i];
        secondarySum += matrix[i][n - i - 1];
    }
    
    return [primarySum, secondarySum];
}