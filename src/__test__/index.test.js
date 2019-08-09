/**
 * @author Philipp Beau <philipp@dathuis.nl>
 *
 */
/* @flow */

describe("Test", () => {
  test("Gives an error message", () => {
    throw Error(123);
  });

  test("No error message", () => {
    return Promise.reject("Please show me");
  });

  test("This is ok", () => {
    return Promise.resolve("This is ok");
  });
});
