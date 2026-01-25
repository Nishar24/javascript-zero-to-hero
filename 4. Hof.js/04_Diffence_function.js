function diffArray(arr1, arr2) {
  // arr1 से वो elements जो arr2 में नहीं हैं
  const onlyInArr1 = arr1.filter(item => !arr2.includes(item));

  // arr2 से वो elements जो arr1 में नहीं हैं
  const onlyInArr2 = arr2.filter(item => !arr1.includes(item));

  // दोनों को जोड़ दो
  return onlyInArr1.concat(onlyInArr2);
}

console.log(
  diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"])
);
