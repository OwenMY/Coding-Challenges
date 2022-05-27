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
*/

const equivalentFoldedSums = (nums) => {
  if (nums.length === 2) {
    return 0;
  }

  let standard = nums[0] + nums[nums.length - 1];
  let minimumOps = 0;

  for (let i = 1; i < nums.length / 2; i++) {
    if (nums[i] + nums[nums.length - 1 - i] !== standard) {
      if (nums[i] !== 0) {
        nums[i]--;
      } else if (nums[nums.length - 1 - i] !== 0) {
        nums[nums.length - 1 - i]--;
      }
      i-= 2;
      minimumOps++;
    }
  }

  return minimumOps;
};

module.exports = equivalentFoldedSums;