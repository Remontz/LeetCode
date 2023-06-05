const runningSum = (nums) => {
  let runningArr = [];
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum = currentSum + nums[i];
    runningArr = [...runningArr, currentSum];
  }
  return runningArr;
};

console.log(runningSum([1, 2, 3, 4]));
