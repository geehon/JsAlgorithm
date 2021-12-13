/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let length = 0;
  let minIndex = 0;
  for (i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], minIndex) < i) {
      minIndex = s.indexOf(s[i], minIndex) + 1;
    } else length = Math.max(length, i - minIndex + 1);
  }
  return length;
};

module.exports = lengthOfLongestSubstring;
