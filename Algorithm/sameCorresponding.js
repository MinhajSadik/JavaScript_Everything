// Algrithm
function same(arr, arr1) {
  if (arr.length !== arr1.length) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    const currentIndex = arr1.indexOf(arr[i] ** 2);

    if (currentIndex === -1) {
      return false;
    }
    arr1.splice(currentIndex, 1);
  }
  return true;
}

console.log(same([2, 3, 6], [36, 9, 4]));

