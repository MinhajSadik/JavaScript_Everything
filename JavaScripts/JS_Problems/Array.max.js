const arr = [99, 32, 23, 45, 101];
const max = arr[0];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (element > max) {
    max = element;
  }
}

console.log(max);
