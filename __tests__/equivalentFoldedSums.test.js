const equivalentFoldedSums = require('./../Challenges/EquivalentFoldedSums.js');

describe('Equivalent Folded Sums', () => {
  test('Should return correct solution', () => {
    expect(equivalentFoldedSums([1, 4, 3, 5])).toBe(1);
    expect(equivalentFoldedSums([1, 2, 2, 1])).toBe(2);
    expect(equivalentFoldedSums([1, 1, 2, 3])).toBe(1);
  });

  test('Should return 0 when given an array with 2 elements', () => {
    expect(equivalentFoldedSums([1, 5])).toBe(0);
  });
});
