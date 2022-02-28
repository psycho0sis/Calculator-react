const add = (valueToAdd) => {
  return parseFloat(value) + parseFloat(valueToAdd);
};

const subtract = (valueToSubtract) => {
  return (parseFloat(value) - parseFloat(valueToSubtract)).toString();
};

const multiply = (valueToMultiply) => {
  return (parseFloat(value) * parseFloat(valueToMultiply)).toString();
};

const divide = (valueToDivide) => {
  return (parseFloat(value) / parseFloat(valueToDivide)).toString();
};

class Calculator {
  constructor() {
    this.value = '0';
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }
}

export class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return add(currentValue);
  }

  undo(currentValue) {
    return subtract(currentValue);
  }
}

export class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }

  execute(currentValue) {
    return subtract(currentValue);
  }

  undo(currentValue) {
    return add(currentValue);
  }
}

export class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }

  execute(currentValue) {
    return multiply(currentValue);
  }

  undo(currentValue) {
    return divide(currentValue);
  }
}

export class DivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide;
  }

  execute(currentValue) {
    return divide(currentValue);
  }

  undo(currentValue) {
    return multiply(currentValue);
  }
}

export default Calculator;
