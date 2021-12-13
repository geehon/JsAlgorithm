/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// FIXME: 时间复杂度不符合要求。
// tips: 使用二分查找法
const findMedianSortedArrays = function (nums1, nums2) {
  let mums = nums1.concat(nums2);
  mums = mums.sort((a, b) => a - b);
  let mid = 0
  if (mums.length % 2 === 0) {
    mid = mums.length / 2;
    return (mums[mid] + mums[mid - 1]) / 2;
  }
  mid = Math.floor(mums.length / 2);
  return mums[mid];
};

module.exports = findMedianSortedArrays;
