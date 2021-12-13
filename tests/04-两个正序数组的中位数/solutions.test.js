const solution1 = require('../../src/04-两个正序数组的中位数/solution1.js');

test('solution: result to be 2', () => {
  expect(solution1([1, 3], [2])).toStrictEqual(2);
});

test('solution: result to be 1', () => {
  expect(solution1([0, 0], [2,2])).toStrictEqual(1);
});

test('solution: result to be 1', () => {
  expect(solution1([], [1])).toStrictEqual(1);
});
