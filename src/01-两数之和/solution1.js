/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function solution1 (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

module.exports = solution1;
