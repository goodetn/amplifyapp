const remoteFn = () => new Promise<number>(resolve => {
  setTimeout(() => {
    resolve(3);
  }, 1500);
})

expect.extend({
  async toBeDivisibleByExternalValue(received) {
    const externalValue: number = await remoteFn();
    const pass = received % externalValue === 0;
    return pass ? {
      message: () => `Passed: expected ${received} % ${externalValue} = ${received % externalValue}`, pass,
    } : {
      message: () => `Failed: expected ${received} % ${externalValue} = ${received % externalValue}`, pass,
    }
  }
});

test('is divisible by external value', async () => {
  await expect(3).toBeDivisibleByExternalValue();
  await expect(2).not.toBeDivisibleByExternalValue();
})