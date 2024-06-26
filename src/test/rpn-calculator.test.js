import { RPNCalculator } from "../main/rpn-calculator";

test("20 5 / should return 4", () => {
  expect(RPNCalculator("20 5 /")).toBe(4);
});


test("4 2 + 3 - should return 3", () => {
    expect(RPNCalculator("4 2 + 3 -")).toBe(3);
  });

  test("3 5 8 * 7 + * should return 141", () => {
    expect(RPNCalculator("3 5 8 * 7 + *")).toBe(141);
  });

  test("9 SQRT should return 3", () => {
    expect(RPNCalculator("9 SQRT")).toBe(3);
  });

  test("5 3 4 2 9 1 MAX should return 9", () => {
    expect(RPNCalculator("5 3 4 2 9 1 MAX")).toBe(9);
  });

  test("4 5 MAX 1 + should return 6", () => {
    expect(RPNCalculator("4 5 MAX 1 +")).toBe(6);
  });