const arr = [99, 32, 23, 45, 101];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (element > max) {
    max = element;
  }
  // return max;
}

console.log(max);
