export const RPNCalculator = (expression) => {
    const elements = expression.split(" ");
    const stack = [];
  
    elements.forEach((element) => {
      if (!isNaN(element)) {
        stack.push(parseFloat(element));
      } else if (["+", "-", "*", "/"].includes(element)) {
        const num2 = stack.pop();
        const num1 = stack.pop();
        let result;
        switch (element) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num1 / num2;
            break;
        }
        stack.push(result);
      } else if (element === "SQRT") {
        const num = stack.pop();
        stack.push(Math.sqrt(num));
      } else if (element === "MAX") {
        const maxVal = Math.max(...stack);
        stack.length = 0; 
        stack.push(maxVal);
      } else {
        throw new Error(`Invalid token: ${element}`);
      }
    });
  
    if (stack.length !== 1) {
      throw new Error("Invalid RPN expression");
    }
  
    return stack[0];
  };
  