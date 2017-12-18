var words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <‐‐ rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

const findRotationPoint = (arr) => {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    let midpoint = Math.floor((left + right) / 2);

    if (arr[midpoint] > arr[left]) {
      left = midpoint;
    } else {
      right = midpoint;
    }

    if (left + 1 === right) {
      break;
    }
  }

  return right;
};

console.log(findRotationPoint(words));
console.log(findRotationPoint([2,3,4,1]) === 3);
console.log(findRotationPoint([1,2,3,4]));
console.log(findRotationPoint([3,4,1,2]) === 2);
console.log(findRotationPoint([4,1,2,3]) === 1);
console.log(findRotationPoint([3,4,5,1,2]) === 3);
console.log(findRotationPoint([1,2,3,4,5]));
console.log(findRotationPoint([4,5,1,2,3]) === 2);
console.log(findRotationPoint([5,1,2,3,4]) === 1);
console.log(findRotationPoint([2,3,4,5,1]) === 4);
