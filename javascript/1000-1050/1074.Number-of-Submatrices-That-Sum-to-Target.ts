/**
 * Number of Submatrices That Sum to Target
 * @param matrix
 * @param target
 */
function numSubmatrixSumTarget(matrix: number[][], target: number): number {
  const m = matrix.length;
  const n = matrix[0].length;
  let count = 0;

  // Calculate prefix sum for each row
  for (let i = 0; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] += matrix[i][j - 1];
    }
  }

  // For each pair of columns, calculate the sum of rows and count the number of submatrices that sum to target
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const map = new Map();
      map.set(0, 1);
      let cur = 0;
      for (let k = 0; k < m; k++) {
        cur += matrix[k][j] - (i > 0 ? matrix[k][i - 1] : 0);
        count += map.get(cur - target) || 0;
        map.set(cur, (map.get(cur) || 0) + 1);
      }
    }
  }

  return count;
}

export { numSubmatrixSumTarget };
