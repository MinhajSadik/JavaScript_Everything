function factorial(num) {
  if (num < 0) {
    return 0;
  } else if (num < 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

const resultFactorial = factorial(6);
console.log(resultFactorial);
