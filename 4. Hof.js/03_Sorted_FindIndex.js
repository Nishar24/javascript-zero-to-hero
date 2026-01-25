function getIndexToIns(arr, num) {
  // Step 1: Sort array in ascending order
  arr.sort((a, b) => a - b);

  // Step 2: Find index where num should be inserted
  const index = arr.findIndex(value => value >= num);

  // Step 3: If findIndex returns -1, insert at end
  return index === -1 ? arr.length : index;
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5)); // 1
console.log(getIndexToIns([20, 3, 5], 19));   // 2
console.log(getIndexToIns([], 5));             // 0
