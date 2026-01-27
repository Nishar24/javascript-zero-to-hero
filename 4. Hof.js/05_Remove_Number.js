function destroyer(arr) {
  const valuesToRemove = Array.from(arguments).slice(1);

  return arr.filter(item => !valuesToRemove.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// [1, 1]

console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
// ["hamburger"]

console.log(destroyer([2, 3, 2, 3], 2, 3));
/// []

