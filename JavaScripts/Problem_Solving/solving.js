// leap year check with arrow function
const checkIfLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is leap year");
  } else {
    console.log(year + " isn't leap year");
  }
};

checkIfLeapYear(2020);

// program to check leap year with normal function
function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || year % 400 === 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

// take input
// const year = prompt("Enter a year:");

checkLeapYear(2020);

function factorial(number) {}
