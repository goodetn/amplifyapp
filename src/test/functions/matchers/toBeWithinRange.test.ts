// run matchers:
expect.extend({
  toBeWithinRange: (received, floor, ceiling) => {
    const pass = received >= floor && received <= ceiling;
    return pass ? {
      message: () => `Passed: expected ${received} not to be within range ${floor} - ${ceiling}`, pass,
    } : {
      message: () => `Failed: expected ${received} to be within range ${floor} - ${ceiling}`, pass,
    }
  }
})

test('numeric ranges', () => {
  expect(10).toBeWithinRange(0, 102);
  expect(100).toBeWithinRange(90, 110);
  expect(101).not.toBeWithinRange(0, 100);

  const dataFromApi = { apples: 6, bananas: 1 };
  expect(dataFromApi).toEqual({
    apples: expect.toBeWithinRange(1, 10),
    bananas: expect.not.toBeWithinRange(11, 20),
  });
});
