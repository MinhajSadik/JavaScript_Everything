//1 copareTriplets
function compareTriplets(a, b) {
  // Write your code here
  let score = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      score[0] += 1;
    } else if (a[i] < b[i]) {
      score[1] += 1;
    }
  }
  return score;
}

const resultOfCompareTriplets = compareTriplets([5, 6, 7], [3, 6, 10]);
console.log(resultOfCompareTriplets);

//1.2 aVeryBigSum
function aVeryBigSum(n) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  return sum;
}

const resultOfAVeryBigSum = aVeryBigSum([
  1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
]);
console.log(resultOfAVeryBigSum);

//1.3 fizzBuzz
function fizzBuzz(n) {
  // Write your code here
  // let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // result.push("FizzBuzz");
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      // result.push("Fizz");
      console.log("Fizz");
    } else if (i % 5 === 0) {
      // result.push("Buzz");
      console.log("Buzz");
    } else {
      // result.push(i);
      console.log(i);
    }
  }
  // return result;
}

const resultOfFizzBuzz = fizzBuzz(15);
console.log(resultOfFizzBuzz);

/*
 * Complete the 'findSum' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY numbers
 *  2. 2D_INTEGER_ARRAY queries
 */

//1.4 findSum
function findSum(numbers, queries) {
  // Write your code here
  let result = [];
  if (numbers.length === 0) {
    return result;
  } else if (queries.length === 0) {
    return result;
  }
  for (let i = 0; i < queries.length; i++) {
    let sum = 0;
    for (let j = queries[i][0] - 1; j < queries[i][1]; j++) {
      sum += numbers[j];
    }
    result.push(sum);
  }
  return result;
}

const resultOfFindSum = findSum(
  [-5, 0],
  [
    [2, 2, 20],
    [1, 2, 10],
  ]
);
console.log(resultOfFindSum);

//1.5 mostBalancedPartition
function mostBalancedPartition(parent, files_size) {
  // Write your code here
  let result = [];
  if (parent.length === 0) {
    return result;
  }
  let sum = 0;
  let max = 0;
  let min = 0;
  let maxIndex = 0;
  let minIndex = 0;
  for (let i = 0; i < parent.length; i++) {
    // let positionOfParent = parent[i];
    sum += parent[i];
    if (sum > max) {
      max = sum;
      maxIndex = i;
    }
    if (sum < min) {
      min = sum;
      minIndex = i;
    }
  }
  return result;
}

const resultOfMostBalancedPartition = mostBalancedPartition(
  [-1, 0, 1, 2],
  [1, 4, 3, 4]
);

console.log(resultOfMostBalancedPartition);

//1.6 extraLongFactorials
function extraLongFactorials(n) {
  // Write your code here
  let result = 1;
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return result;
  }
  for (let i = 1; i < n.length; i++) {
    result = result + i;
    return extraLongFactorials(result - 1) * extraLongFactorials(result - 2);
  }
  return result;
}

const resultOfExtraLongFactorials = extraLongFactorials(25);
console.log(resultOfExtraLongFactorials);

//1.7 search
function search(arr, n, target) {
  let i;
  for (i = 0; i < n; i++) {
    if (arr[i] == target) return i;
  }
  return -1;
}

// Driver code
let arr = [2, 3, 4, 10, 40];
let target = 10;
let n = arr.length;

// Function call
let result = search(arr, n, target);
result === -1
  ? console.log("Element is not present in array")
  : console.log("Element is present at index " + result);

// This code is contributed by Minhaj Sadik

//1.8 diagonalDifference
function diagonalDifference(arr) {
  // Write your code here
  let result = 0;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i == j) {
        sum1 += arr[i][j];
      }
      if (i + j == arr.length - 1) {
        sum2 += arr[i][j];
      }
    }
  }
  return result;
}

const resultOfDiagonalDifference = diagonalDifference([
  3, 11, 2, 4, 4, 5, 6, 10, 8, -12,
]);

console.log(resultOfDiagonalDifference);

//1.9 formingMagicSquare
function formingMagicSquare(s) {
  const squares = [
    "618753294",
    "816357492",
    "834159672",
    "438951276",
    "672159834",
    "276951438",
    "294753618",
    "492357816",
  ];
  let min = 100;
  let cost = (s, squares) => {
    return [...s.map((value) => value.join("")).join("")].reduce(
      (target, item, index) => {
        target += Math.abs(+item - +squares[index]);

        return target;
      },
      0
    );
  };

  squares.forEach((item, index) => {
    let value = cost(s, squares[index]);

    value < min && (min = value);
  });

  return min;
}

//2.0 climbingLeaderboard
function climbingLeaderboard(ranked, player) {
  // Write your code here
  let rank = [];
  for (let i = 0; i < ranked.length; i++) {
    if (rank.length === 0) {
      rank.push(ranked[i]);
    } else {
      if (rank[rank.length - 1] === ranked[i]) {
        continue;
      }
      rank.push(ranked[i]);
    }
  }

  let res = [];
  let lowestRank = rank.length;
  for (let i = 0; i < player.length; i++) {
    while (player[i] >= rank[lowestRank - 1] && lowestRank > 0) {
      rank.pop;
      lowestRank--;
    }
    res.push(lowestRank + 1);
  }
  return res;
}

//2.1 pageCount
function pageCount(n, p) {
  var frontFlip = Math.floor(p / 2);
  var backFlip = Math.floor(n / 2 - frontFlip);

  var result = Math.min(frontFlip, backFlip);
  return result;
}

//2.2 steadyGene
function steadyGene(gene) {
  function is_ok(freq, n) {
    if (freq["A"] > n / 4) {
      return false;
    }
    if (freq["C"] > n / 4) {
      return false;
    }
    if (freq["T"] > n / 4) {
      return false;
    }
    if (freq["G"] > n / 4) {
      return false;
    }
    return true;
  }
  let freq = {},
    n = gene.length,
    ans = n,
    j = 0;

  for (let i = 0; i < n; i++) {
    if (!freq[gene[i]]) freq[gene[i]] = 1;
    else freq[gene[i]]++;
  }

  if (is_ok(freq, n)) {
    console.log(0);
    return 0;
  }

  for (let i = 0; i < n; i++) {
    while (j < n && !is_ok(freq, n)) --freq[gene[j++]];
    if (is_ok(freq, n)) ans = Math.min(ans, j - i);
    ++freq[gene[i]];
  }
  return ans;
}

//2.3 plusMinus
function plusMinus(arr) {
  let positive = 0,
    negative = 0,
    zero = 0;

  arr.forEach((value) => {
    if (value > 0) positive++;
    if (value < 0) negative++;
    if (value == 0) zero++;
  });

  console.log(positive / arr.length);
  console.log(negative / arr.length);
  console.log(zero / arr.length);
}

//2.4 number line jumps
function kangaroo(x1, v1, x2, v2) {
  if (v1 > v2 && (x2 - x1) % (v1 - v2) === 0) return "YES";
  return "NO";
}

//2.5 betweenTwoSets
function getTotalX(a, b) {
  return new Array(100).fill(1).reduce((target, item, index) => {
    a.every((value) => !((index + 1) % value)) &&
      b.every((value) => !(value % (index + 1))) &&
      target++;

    return target;
  }, 0);
}

//2.6 breakingRecords
function breakingRecords(scores) {
  let { countMax, countMin } = (scores || []).reduce(
    (target, item, index) => {
      !index && (target["max"] = target["min"] = item);

      target["score"] = item;

      item > target["max"] && ((target["max"] = item), target["countMax"]++);
      item < target["min"] && ((target["min"] = item), target["countMin"]++);

      return target;
    },
    { max: 0, min: 0, score: 0, countMax: 0, countMin: 0 }
  );

  return [countMax, countMin];
}

//2.7 subarrayDivision
function birthday(s, d, m) {
  let num = s;
  let nums = [];
  let count = 0;
  const add = (arr) => arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < s.length; i++) {
    let arrayElement = num.slice(0 + i, m + i);
    nums.push(arrayElement);
  }
  if (num.length === 1 && num[0] === d) {
    count++;
  } else {
    nums.forEach((el) => {
      if (add(el) === d) {
        count++;
      }
    });
  }

  return count;
}

//2.8 divisibleSumPairs
function divisibleSumPairs(n, k, ar) {
  let count = 0;
  let focus = ar.shift();

  (ar || []).reduce((target, item) => !((focus + item) % k) && count++, 0);

  return !(ar || []).length ? count : count + divisibleSumPairs(n, k, ar);
}

//2.9 migratoryBirds
function migratoryBirds(arr) {
  let results = new Array(5)
    .fill(0)
    .map((value, index) => ({ value, index: index + 1 }));

  (arr || []).reduce((target, value, index) => {
    results[value - 1].value++;

    return target;
  }, []);

  return results.sort((a, b) => b.value - a.value)[0].index;
}

//3.0 dayOfProgrammer
function dayOfProgrammer(year) {
  return year == 1918
    ? "26.09.1918"
    : (year <= 1917 && !(year % 4)) ||
      !(year % 400) ||
      (!(year % 4) && !!(year % 100))
    ? `12.09.${year}`
    : `13.09.${year}`;
}

//3.1 billDivision
function bonAppetit(bill, k, b) {
  if (k === 0) {
    bill.shift();
  } else {
    bill.splice(k, 1);
  }
  const result = bill.reduce((acc, el) => acc + el / 2, 0);
  if (result === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - result);
  }
}

//3.2 electronicsShop
function getMoneySpent(keyboards, drives, b) {
  let max = 0;

  (keyboards || []).reduce((target, keyboard) => {
    drives.reduce((target, drive) => {
      keyboard + drive > max &&
        keyboard + drive <= b &&
        (max = keyboard + drive);

      return target;
    }, []);
    return target;
  }, []);

  return !max ? -1 : max;
}

//3.3 catAndMouse
function catAndMouse(x, y, z) {
  return Math.abs(x - z) < Math.abs(z - y)
    ? "Cat A"
    : Math.abs(x - z) > Math.abs(z - y)
    ? "Cat B"
    : "Mouse C";
}

//3.4 pickingNumbers
function pickingNumbers(a) {
  let max = 0;
  let values = new Array(100).fill(0);

  (a || []).forEach((value) => {
    values[value]++;
  });

  return values.reduce((target, value, index) => {
    index >= 1 &&
      value + values[index - 1] > target &&
      (target = value + values[index - 1]);

    return target;
  }, []);
}

//3.5 hurdleRace
function hurdleRace(k, height) {
  return (height || []).reduce((target, hurdle) => {
    hurdle > k && (target += hurdle - k);
    hurdle > k && (k += hurdle - k);

    return target;
  }, 0);
}

//3.6 designerPdfViewer
function designerPdfViewer(h, word) {
  let { code, values } = new Array(26).fill(0).reduce(
    (target, value, index) => {
      target["values"][String.fromCharCode(target["code"])] = h[index];
      target["code"]++;

      return target;
    },
    { code: 97, values: new Object() }
  );

  let { height, max } = [...`${word}`].reduce(
    (target, value, index) => {
      target["height"] = values[word.charAt(index)];
      target["max"] = Math.max(target["max"], target["height"]);

      return target;
    },
    { height: 0, max: 0 }
  );

  return word.length * max;
}

//3.7 utopianTree
function utopianTree(n) {
  return new Array(n).fill(0).reduce((target, value, index) => {
    !(index % 2) ? (target *= 2) : target++;

    return target;
  }, 1);
}

//3.8 angryProfessor
function angryProfessor(k, a) {
  let presentStudents = (a || []).reduce((target, student) => {
    student <= 0 && target++;

    return target;
  }, 0);

  return presentStudents >= k ? "NO" : "YES";
}

//3.9 beautifulDays
function beautifulDays(i, j, k) {
  return new Array(j - i + 1).fill(0).reduce((target, item, index) => {
    let value = i + index;
    !(Math.abs(value - +[...String(value)].reverse().join("")) % k) && target++;

    return target;
  }, 0);
}

//4.0 viralAdvertising
function viralAdvertising(n) {
  let { total } = new Array(n).fill(0).reduce(
    (target, day) => {
      target["total"] += Math.floor(target["people"] / 2);
      target["people"] = Math.floor(target["people"] / 2) * 3;

      return target;
    },
    { total: 0, people: 5 }
  );
  console.log(total);
  return total;
}

//4.1 saveThePrisoner
function saveThePrisoner(n, m, s) {
  let value = s + m - 1;

  return value > n ? (!(value % n) ? n : value % n) : value;
}

//4.2 circularArrayRotation
function circularArrayRotation(a, k, queries) {
  return queries.map(
    (value) =>
      a.reduce((target, item, index) => {
        let focus = (index + k) % a.length;
        target[focus] = item;

        return target;
      }, [])[value]
  );
}

//4.3 permutationEquation
function permutationEquation(p) {
  let values = (p || []).reduce((target, value, index) => {
    target[value] = index + 1;

    return target;
  }, []);

  return (p || []).reduce((target, value, index) => {
    target.push(values[values[index + 1]]);

    return target;
  }, []);
}

//4.4 jumpingOnClouds
function jumpingOnClouds(c, k) {
  let result = 100;
  let count = 0;
  let index;

  while (index !== 0 && result >= 0) {
    !count && (index = 0);

    index = (index + k) % c.length;

    result = result - (c[index] > 0 ? 3 : 1);

    count++;
  }

  return result;
}

//4.5 findDigits
function findDigits(n) {
  return [...`${n}`].reduce((target, value) => {
    +n % +value === 0 && target++;

    return target;
  }, 0);
}

//4.6 extraLongFactorials
function extraLongFactorials(n) {
  let memoization = [BigInt(0), BigInt(1)];

  const factorial = (num) =>
    typeof memoization[num] !== "number"
      ? num - BigInt(1) > 0
        ? num * factorial(num - BigInt(1))
        : BigInt(1)
      : memoization[num];

  console.log(String(factorial(BigInt(n))));
}

//4.7 appendAndDelete
function appendAndDelete(s, t, k) {
  let ready = true;
  let total = s.length + t.length;
  let count = new Array(Math.min(t.length, s.length))
    .fill(0)
    .reduce((target, item, index) => {
      ready && Object.is([...s][index], [...t][index])
        ? target++
        : (ready = false);

      return target;
    }, 0);

  return (total - 2 * count) % 2 == k % 2 || total <= k
    ? total - 2 * count > k
      ? "No"
      : "Yes"
    : "No";
}

//4.8 squares
function squares(a, b) {
  let lower = Math.ceil(Math.sqrt(a));
  let upper = Math.floor(Math.sqrt(b));

  return lower > upper ? 0 : upper - lower + 1;
}

//4.9 libraryFine
function libraryFine(d1, m1, y1, d2, m2, y2) {
  return y1 > y2
    ? 10000
    : y2 > y1
    ? 0
    : m1 > m2
    ? 500 * (m1 - m2 + (y1 - y2) * 12)
    : m2 > m1
    ? 0
    : d1 > d2
    ? 15 * (d1 - d2)
    : 0;
}

//5.0 cutTheSticks
function cutTheSticks(arr) {
  let result = [];

  while (arr.length > 0) {
    result.push(arr.length);

    arr.sort((a, b) => a - b);

    let front = arr[0];

    arr.reduce((target, value, index) => {
      arr[index] -= front;

      return target;
    }, []);

    let remove = arr.lastIndexOf(0) + 1;

    arr.splice(0, remove);
  }

  return result;
}

//5.1 nonDivisibleSubset
function nonDivisibleSubset(k, s) {
  // Write your code here
  let values = new Array(k).fill(0);
  let result = 0;

  s.reduce((target, item, index) => {
    values[item % k] += 1;

    return target;
  }, []);

  for (let i of Array.from(
    { length: (k + 1) / 2 - 1 },
    (value, index) => index + 1
  )) {
    result += Math.max(values[i], values[k - i]);
  }

  !(k % 2) && !!values[k / 2] && (result += 1);

  values[0] && (result += 1);

  return result;
}

//5.2 cutTheSticks
function cutTheSticks(arr) {
  let result = [];

  while (arr.length > 0) {
    result.push(arr.length);

    arr.sort((a, b) => a - b);

    let front = arr[0];

    arr.reduce((target, value, index) => {
      arr[index] -= front;

      return target;
    }, []);

    let remove = arr.lastIndexOf(0) + 1;

    arr.splice(0, remove);
  }

  return result;
}

//5.3 repeatedString
function repeatedString(s, n) {
  let count = 0,
    result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") count++;
  }

  let x = parseInt(n / s.length);
  let y = n % s.length;

  result = x * count;
  for (let i = 0; i < y; i++) {
    if (s[i] === "a") result++;
  }
  return result;
}

//5.4 jumpingOnClouds
function jumpingOnClouds(c) {
  let jump = 0,
    i = 0;
  do {
    if (c[i + 2] == 0) {
      jump++;
      i += 2;
    } else if (c[i + 1] == 0) {
      jump++;
      i += 1;
    }
  } while (i != c.length - 1);
  return jump;
}

//5.5 equalizeArray
function equalizeArray(arr) {
  let dict = {},
    max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!dict[arr[i]]) dict[arr[i]] = 0;
    dict[arr[i]]++;
    max = Math.max(max, dict[arr[i]]);
  }

  return arr.length - max;
}

//5.6 queensAttack
function queensAttack(n, k, r_q, c_q, obstacles) {
  let up = n - r_q;
  let right = n - c_q;
  let down = r_q - 1;
  let left = c_q - 1;

  let up_left = Math.min(up, left);
  let up_right = n - Math.max(c_q, r_q);
  let down_left = Math.min(c_q, r_q) - 1;
  let down_right = Math.min(r_q - 1, n - c_q);

  for (let i of Array.from({ length: k }, (value, index) => index)) {
    let { 0: r_o, 1: c_o } = obstacles[i];

    r_o == r_q &&
      (c_o > c_q
        ? (up = Math.min(up, c_o - c_q - 1))
        : (down = Math.min(down, c_q - c_o - 1)));

    c_o == c_q &&
      (r_o > r_q
        ? (right = Math.min(right, r_o - r_q - 1))
        : (left = Math.min(left, r_q - r_o - 1)));

    Math.abs(c_o - c_q) == Math.abs(r_o - r_q) &&
      (c_o > c_q && r_o > r_q && (up_right = Math.min(up_right, c_o - c_q - 1)),
      c_o > c_q &&
        r_o < r_q &&
        (down_right = Math.min(down_right, c_o - c_q - 1)),
      c_o < c_q && r_o > r_q && (up_left = Math.min(up_left, c_q - c_o - 1)),
      c_o < c_q &&
        r_o < r_q &&
        (down_left = Math.min(down_left, c_q - c_o - 1)));
  }

  return right + left + up + down + down_left + up_left + down_right + up_right;
}

//5.7 acmTeam
function acmTeam(topic) {
  let results = [];
  let range = topic.length - 1;

  for (let i of Array.from({ length: range }, (value, index) => index)) {
    results.push(
      ...Array.from(
        { length: range - i },
        (value, index) => index + 1 + i
      ).reduce((target, compare) => {
        target.push(
          [...topic[i]].reduce((target, item, valueIndex) => {
            (!!+item || !!+topic[compare][valueIndex]) && target++;

            return target;
          }, 0)
        );

        return target;
      }, [])
    );
  }

  return results
    .sort()
    .reverse()
    .reduce(
      (target, item, index) => {
        !index && (target[0] = item);

        target[0] == item && target[1]++;

        return target;
      },
      [0, 0]
    );
}

//
function processOrderList(orderList, orderId, state) {
  // Write your code here
  return state === "Processing"
    ? orderList.map((item) => ({
        ...item,
        state: item.id === orderId ? "Processing" : item.state,
      }))
    : orderList.filter((item) => item.id !== orderId);
}
i;

//
class ParkingLot {
  slots = [];

  constructor(parkingSize) {
    this.slots = new Array(parkingSize).fill(null);
  }

  park(carId) {
    console.log(`Parking car: ${carId}`);
    if (this.slots.every((slot) => slot !== null)) {
      return false;
    }

    for (let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i];

      if (slot === null) {
        this.slots[i] = carId;
        return true;
      }
    }
  }

  remove(carId) {
    console.log(`Leaving car: ${carId}`);
    if (this.slots.every((slot) => slot !== carId)) {
      return false;
    }

    for (let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i];

      if (slot === carId) {
        this.slots[i] = null;
        return true;
      }
    }
  }

  getSlots() {
    console.log(`Parking slots: ${this.slots}`);
    return this.slots;
  }

  getSize() {
    console.log(`Parking size is: ${this.slots.length}`);
    return this.slots.length;
  }

  getAvailable() {
    const availableSlots = this.slots.filter((s) => s === null).length;
    console.log(`Available parking slots: ${availableSlots}`);
    return availableSlots;
  }

  isFull() {
    return this.getAvailable() === 0;
  }
}

class Size {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Image {
  url;
  height;
  width;

  constructor(url, size) {
    this.url = url;
    this.width = size.width;
    this.height = size.height;
  }

  getUrl() {
    return this.url;
  }

  setUrl(url) {
    return (this.url = url);
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
  }

  getSize() {
    return new Size(this.width, this.height);
  }

  cloneImage() {
    return new Image(this.url, new Size(this.width, this.height));
  }
}
