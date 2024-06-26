

export const RPNCalculator = (expression) => {
    const tokens = expression.split(' ');
    const stack = [];
  
    for (let token of tokens) {
      if (!isNaN(token)) {
        stack.push(parseFloat(token));
      } else if (['+', '-', '*', '/'].includes(token)) {
        const b = stack.pop();
        const a = stack.pop();
        switch (token) {
          case '+':
            stack.push(a + b);
            break;
          case '-':
            stack.push(a - b);
            break;
          case '*':
            stack.push(a * b);
            break;
          case '/':
            stack.push(a / b);
            break;
        }
      } else if (token === 'SQRT') {
        const a = stack.pop();
        stack.push(Math.sqrt(a));
      } else if (token === 'MAX') {
        stack.push(Math.max(...stack));
        stack.length = 1;
      } else {
        throw new Error(`Unknown token: ${token}`);
      }
    }
  
    if (stack.length !== 1) {
      throw new Error('Invalid RPN expression');
    }
  
    return stack.pop();
  };
  