const array = [3, 5, 7, 9, 11, 4, 6, 8, 10, 12];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log("Jur Sonkha: " + array[i]);
  } else if (array[i] % 2 !== 0) {
    console.log("Bijor Sonkha: " + array[i]);
  }
}
