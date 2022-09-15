import { diff } from 'jest-diff';

expect.extend({
  toBe(received, expected) {
    const options = {
      comment: 'Object.is equality',
      isNot: this.isNot,
      promise: this.promise,
    };

    const pass = Object.is(received, expected);

    const message = pass ?
      () => this.utils.matcherHint('toBe', undefined, undefined, options) +
        '\n\n' +
        `Expected: not ${this.utils.printExpected(expected)}\n` +
        `Received: not ${this.utils.printReceived(received)}\n`
      :
      () => {
        const diffString = diff(expected, received, {
          expand: this.expand,
        });

        return (
          this.utils.matcherHint('toBe', undefined, undefined, options) +
            '\n\n' +
            (diffString && diffString.includes('- Expect'))
            ? `Difference:\n\n${diffString}`
            : `Expected: ${this.utils.printExpected(expected)}\n` +
            `Received: ${this.utils.printReceived(received)}`
        );
      };
    
    return { actual: received, message, pass };
  },
});

test('toBe', () => {
  expect(1 + 2).toBe(3);
});
