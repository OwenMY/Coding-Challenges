const equivalentFoldedSums = require('./../Challenges/EquivalentFoldedSums.js');

describe('Equivalent Folded Sums', () => {
  test('Should return correct solution', () => {
    expect(equivalentFoldedSums([1, 4, 3, 5])).toBe(1);
    expect(equivalentFoldedSums([1, 2, 2, 1])).toBe(2);
    expect(equivalentFoldedSums([1, 1, 2, 3])).toBe(1);
    expect(equivalentFoldedSums([1, 1, 2, 4])).toBe(1);
    expect(equivalentFoldedSums([1, 1, 2, 1])).toBe(1);
    expect(equivalentFoldedSums([1, 1, 2, 2])).toBe(0);
    expect(equivalentFoldedSums([1, 2, 1, 1])).toBe(1);
    expect(equivalentFoldedSums([3, 1, 2, 1])).toBe(1);
    expect(equivalentFoldedSums([1, 3, 3, 2])).toBe(2);
    expect(equivalentFoldedSums([1, 2, 3, 2])).toBe(1);
    expect(equivalentFoldedSums([1, 2, 4, 3])).toBe(1);
    expect(equivalentFoldedSums([1, 4, 2, 3])).toBe(1);
  });

  test('Should return 0 when given an array with 2 elements', () => {
    expect(equivalentFoldedSums([1, 5])).toBe(0);
  });
});
