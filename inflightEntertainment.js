const canTwoMoviesFillFlight = (flightLength, movieLengths) => {
  const differences = new Map();

  for (let i = 0; i < movieLengths.length; i++) {
    if (differences.has(movieLengths[i])) return true;

    differences.set(flightLength - movieLengths[i], true);
  }

  return false;
};

const movieLengths = [1,2,5,6,10,3,7];
// console.log(canTwoMoviesFillFlight(10, movieLengths));

const canTwoMoviesFillFlightSorted = (flightLength, movieLengths) => {
  let left = 0, right = movieLengths.length - 1;
  
  while (left < right) {
    const sum = movieLengths[left] + movieLengths[right];
    if (sum === flightLength) return true;

    if (sum > flightLength) { // sum is too large so reduce sum by decrementing right
      right--;
    } else { // sum is too small so increase sum by incrementing left
      left++;
    }
  }

  return false;
};

const movieLengthsSorted = [1,2,3];
// console.log(canTwoMoviesFillFlightSorted(10, movieLengths.sort((a,b) => a - b)));
// console.log(canTwoMoviesFillFlightSorted(5, movieLengthsSorted));
// console.log(canTwoMoviesFillFlightSorted(5, [1,2,3,4]));
// console.log(canTwoMoviesFillFlightSorted(5, [1,2,3,4,5,6]));
// console.log(canTwoMoviesFillFlightSorted(4, [1,2,3,4,5]));

const canAnyNumberOfMoviesFillFlightBoolean = (flightLength, movieLengths, runningTime = 0, startIndex = 0) => {
  if (runningTime === flightLength) return true;
  if (runningTime > flightLength) return false;

  for (let i = startIndex; i < movieLengths.length; i++) {
    const recurse = canAnyNumberOfMoviesFillFlight(flightLength, movieLengths, runningTime + movieLengths[i], i + 1);
    if (recurse) return true;
  }

  return false;
};

const canAnyNumberOfMoviesFillFlight = (flightLength, movieLengths, runningTime = 0, startIndex = 0, combo = []) => {
  if (runningTime === flightLength) return [ combo.slice() ];
  if (runningTime > flightLength) return null;
  
  let combinations = [];

  for (let i = startIndex; i < movieLengths.length; i++) {
    combo.push(movieLengths[i]);
    const recurse = canAnyNumberOfMoviesFillFlight(flightLength, movieLengths, runningTime + movieLengths[i], i + 1, combo);
    combo.pop();
    if (recurse) combinations = combinations.concat(recurse);
  }

  return combinations;
};

console.log(canAnyNumberOfMoviesFillFlight(7, [1,2,3,4])); // true
console.log(canAnyNumberOfMoviesFillFlight(12, [1,2,3,4])); // false
console.log(canAnyNumberOfMoviesFillFlight(6, [1,2,3,4])); // true
console.log(canAnyNumberOfMoviesFillFlight(7, [1,3,5,9])); // false
console.log(canAnyNumberOfMoviesFillFlight(9, [1,3,5,9]));
