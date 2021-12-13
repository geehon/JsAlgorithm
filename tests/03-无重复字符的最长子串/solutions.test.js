const solution = require('../../src/03-无重复字符的最长子串/solution.js');

test('solution: result to be 0', () => {
  expect(solution("")).toStrictEqual(0);
});

test('solution: result to be 3', () => {
  expect(solution("abcabcbb")).toStrictEqual(3);
});

test('solution: result to be 3', () => {
  expect(solution("pwwkew")).toStrictEqual(3);
});
