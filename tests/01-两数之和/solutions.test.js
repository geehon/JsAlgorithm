const solution1 = require('../../src/01-两数之和/solution1');
const solution2 = require('../../src/01-两数之和/solution2');

test('solution1: result to be [0, 1]', () => {
  expect(solution1([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test('solution1: return []', () => {
  expect(solution1([1, 2, 4, 5], 2)).toStrictEqual([]);
});

test('solution2: result to be [0, 1]', () => {
  expect(solution2([2, 7, 11, 15], 9)).toStrictEqual([1, 0]);
});

test('solution2: return []', () => {
  expect(solution2([1, 2, 4, 5], 2)).toStrictEqual([]);
});
