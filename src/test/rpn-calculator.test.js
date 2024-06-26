import { RPNCalculator } from "../main/rpn-calculator";

test("20 5 / should return 4", () => {
  expect(RPNCalculator("20 5 /")).toBe(4);
});


