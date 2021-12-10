function addition(a, b) {
  return a + b;
}
const resultAddition = addition(1, 2);
console.log(resultAddition);

const bioData = {
  name: "Minhaj Sadik",
  age: 21,
  address: "123 Main St",
};
console.log(bioData.name);

function fotballPlayerZone(player) {
  const teamOne = player.filter((one) => one === 0).length;
  const teamTwo = player.filter((two) => two === 1).length;
  const dangerZone = 7;
  if (teamOne > teamTwo && teamOne >= dangerZone) {
    console.log(`Yes, teamOne is in danger zone`);
  } else if (teamTwo > teamOne && teamTwo >= dangerZone) {
    console.log(`No, teamTwo is in danger zone`);
  } else {
    console.log("can't find any team is denger zone");
  }
  // const result = teamOne.sort((a, b) => a - b);
  // return result;
}

console.log(fotballPlayerZone([0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1]));
