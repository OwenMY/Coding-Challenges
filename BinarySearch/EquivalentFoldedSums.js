/*
You are given a list of integers nums of even length. Consider an operation where you pick any number in nums and update it with a value between [1, max(nums)].

Return the minimum number of operations required such that for every i, nums[i] + nums[n - 1 - i] equals to the same number.

Constraints
n ≤ 100,000 where n is the length of nums
1 ≤ nums[i] ≤ 10,000

Input
nums = [1, 4, 3, 5]

Output
1
What number can be created in common?

The sum of each pair can be made equal to a given value in at-most one update if this value lies in a particular range. However, if the value lies outside this range then we require two updates.
Can you find this range?

To calculate this range, think about the maximum amount by which you can increment and decrement the sum of a particular pair by changing only one of the two values.

Suppose you know this range, let it be [lo, hi]. Can you think of an optimal approach to find the value that requires the least number of changes to make all pair sums equal to this value? Think in terms of Prefix Sums

https://binarysearch.com/problems/Equivalent-Folded-Sums
*/

const equivalentFoldedSums = (nums) => {
  if (nums.length === 2) {
    return 0;
  }

  let lowestNum = Math.min(...nums);
  let highestNum = Math.max(...nums);

  let sums = [];
  let lowCandidates = [];
  let highCandidates = [];

  for (let i = 0; i < nums.length / 2; i++) {
    let sum = nums[i] + nums[nums.length - 1 - i];
    lowCandidates.push([nums[i] + lowestNum, nums[nums.length - 1 - i] + lowestNum]);
    highCandidates.push([nums[i] + highestNum, nums[nums.length - 1 - i] + highestNum]);
    sums.push(sum);
  }

  if (sums.every((sum) => sum === sums[0])) {
    return 0;
  }

  const getLeastCommonFactor = (arr) => {
    let lowNumbers = [];

    arr.forEach((numSet) => lowNumbers.push(...numSet));
    let lowRange = [Math.min(...lowNumbers), Math.max(...lowNumbers)];

    for (let i = lowRange[0]; i < lowRange[1]; i++) {
      if (arr.every((numSet) => numSet.includes(i))) {
        return i;
      }
    }

    for (let i = lowRange[0]; i < lowRange[1]; i++) {
      if (arr.every((numSet) => i >= numSet[0] && i <= numSet[1] ? true : false)) {
        return i;
      }
    }

    return Math.max(...lowNumbers);
  };

  const getGreatestCommonFactor = (arr) => {
    let highNumbers = [];

    arr.forEach((numSet) => highNumbers.push(...numSet));
    let highRange = [Math.min(...highNumbers), Math.max(...highNumbers)];

    for (let i = highRange[0]; i < highRange[1]; i++) {
      if (arr.every((numSet) => numSet.includes(i))) {
        return i;
      }
    }

    for (let i = highRange[0]; i < highRange[1]; i++) {
      if (arr.every((numSet) => i >= numSet[0] && i <= numSet[1] ? true : false)) {
        return i;
      }
    }

    return Math.min(...highNumbers);
  };

  let range = [getLeastCommonFactor(lowCandidates), getGreatestCommonFactor(highCandidates)];
  let standard = null;

  for (let sum of sums) {
    if (sum >= range[0] && sum <= range[1]) {
      standard = sum;
      break;
    }
  }

  let ops = 0;
  if (standard === null) {
    standard = range[0];
  }

  for (let sum of sums) {
    if (standard !== sum) {
      ops++;
    }
  }

  return ops;
};

module.exports = equivalentFoldedSums;