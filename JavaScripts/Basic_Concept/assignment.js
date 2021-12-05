//*4-problem_solving assignment trying to solving & starting here*
//function always return can't do this conosle.log()
//1.kilometer to meter
//1-input: kilometers and output: miters
//2-function name: kilometerToMeter

function kilometerToMeter(kilometers, meters) {
  if (kilometers <= 0) {
    return "Invalid Input! Please Provide Me Positive Kilometer";
  }
  return (meters = kilometers * 1000);
}

const kiloResult = kilometerToMeter(15);
console.log(kiloResult);

//2.budget calculator
//1-input: watch, mobile, laptop & output: watch, mobile, laptop
//2-function name: budgetCalculator
function budgetCalculator(watch, mobile, laptop) {
  let total = 0;
  if (watch <= 0 && mobile <= 0 && laptop <= 0) {
    return "Invalid Input! Please Provide Me Positive Product Price";
  }
  if (watch) {
    total += watch * 50;
  }
  if (mobile) {
    total += mobile * 100;
  }
  if (laptop) {
    total += laptop * 500;
  }
  return total;
}

const budgetResult = budgetCalculator(5, 10, 15);
console.log(budgetResult);

//3. hotel cost
//1-input:
//2-function name: hotelCost
function hotelCost(days) {
  let total = 0;
  if (days <= 0) {
    return "Invalid Input! Please Provide Me Positive Cost";
  }
  if (days <= 10) {
    total = days * 100;
  } else if (days > 10 && days <= 20) {
    let firstTenDay = 10 * 100;
    let secondTenDay = (days - 10) * 80;
    total = firstTenDay + secondTenDay;
  } else if (days > 20) {
    let firstTenDay = 10 * 100;
    let secondTenDay = 10 * 80;
    let thirdTenDay = (days - 20) * 50;
    total = firstTenDay + secondTenDay + thirdTenDay;
  }
  return total;
}

const hotelCostResult = hotelCost(21);
console.log(hotelCostResult);

//4. mega Friend
//1-input: friendsNameArray & output: bigestFriendName
//2-function name: megaFriend

function megaFriend(friend) {
  if (friend <= 0 || friend === " " || friend === undefined) {
    return "Invalid Input! Please Provide Me a Name Array";
  }
  let megaName = "";
  for (let i = 0; i < friend.length; i++) {
    const friendName = friend[i];
    if (megaName.length < friendName.length) {
      megaName = friendName;
    }
  }
  return megaName;
}
let friends = [
  "MinhajSadik",
  "AhmedTamim",
  "SadikUddin",
  "AnikaAhmed",
  "SharminAktar",
  "IqraAziz",
];
const megaFriendResult = megaFriend(friends);
console.log(megaFriendResult);

/* solved my 4 problem solving assignment */
