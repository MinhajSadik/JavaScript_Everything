//Fizz Buzz
for (let i = 0; i < 100; i++) {
  if (Number.isInteger(i / 3)) {
    console.log("Fizz");
  }

  if (Number.isInteger(i / 5)) {
    console.log("Buzz");
  }

  if (!Number.isInteger(i / 3) && !Number.isInteger(i / 5)) {
    console.log(i);
  }
}

//Fizz Buzz 1
for (let i = 0; i < 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  }

  if (i % 5 === 0) {
    console.log("Buzz");
  }

  if (i % 3 !== 0 && i % 5 !== 0) {
    console.log(i);
  }
}

//Fizz Buzz 2
for (let i = 0; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Fizz Buzz 3
for (let i = 0; i < 100; i++) {
  let out = "";

  if (i % 3 === 0) out += "Fizz ";
  if (i % 5 === 0) out += "Buzz";
  if (i % 7 === 0) out += "Buzz";

  console.log(out || i);
}
