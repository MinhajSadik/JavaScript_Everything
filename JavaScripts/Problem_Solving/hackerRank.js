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
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
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
