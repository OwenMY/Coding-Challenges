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
  if (nums.length === 2) return 0;

  let foldedSums = [];

  for (let i = 0; i < nums.length / 2; i++) {
    foldedSums.push(nums[i] + nums[nums.length - 1 - i]);
  }

  foldedSums.sort((a, b) => a - b);

  let min = foldedSums[0];
  let max = foldedSums.at(-1);

  return Math.round(max - min);
};

module.exports = equivalentFoldedSums;