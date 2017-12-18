// The integers are in the range 1...n
// The array has a length of n+1
// constant space + nlogn time

const findDup = (nums) => {
  // nums.sort();

  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    
    if (nums[index] < 0) return nums[i];
    nums[index] *= -1;
  }

  return null;
};

const nums = [3,1,2,4,6,5,1];
console.log(findDup(nums));
console.log(nums);