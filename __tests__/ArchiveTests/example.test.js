const getSum = (num1, num2) => {
  return num1 + num2;
};

describe('getSum', () => {
  test('Should get the sum of two integers', () => {
    expect(getSum(5, 10)).toBe(15);
  });
});
