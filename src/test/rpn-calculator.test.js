import { RPNCalculator } from "../main/rpn-calculator";

test("20 5 / should return 4", () => {
  expect(RPNCalculator("20 5 /")).toBe(4);
});


test("4 2 + 3 - should return 3", () => {
    expect(RPNCalculator("4 2 + 3 -")).toBe(3);
  });