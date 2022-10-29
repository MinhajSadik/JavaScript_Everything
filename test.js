function sumTwoNum(...rest) {
  return rest.reduce((acc, cur) => {
    return acc + cur;
  });
}

console.log(sumTwoNum(1, 2, 3, 4, 5, 10));
