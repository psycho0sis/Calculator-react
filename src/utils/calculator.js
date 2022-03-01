export let storage = JSON.parse(localStorage.getItem('state')) || [];

function add(x, y) {
  storage.push({ firstValue: x, memory: y, operator: '+' });
  return x + y;
}
function sub(x, y) {
  storage.push({ firstValue: x, memory: y, operator: '-' });
  return x - y;
}
function mul(x, y) {
  storage.push({ firstValue: x, memory: y, operator: '*' });
  return x * y;
}
function div(x, y) {
  storage.push({ firstValue: x, memory: y, operator: '/' });
  return x / y;
}

class Command {
  constructor(execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  }
}

export class AddCommand extends Command {
  constructor(value) {
    super(add, sub, Number(value));
  }
}
export class SubtractCommand extends Command {
  constructor(value) {
    super(sub, add, Number(value));
  }
}
export class MultiplyCommand extends Command {
  constructor(value) {
    super(mul, div, Number(value));
  }
}

export class DivideCommand extends Command {
  constructor(value) {
    super(div, mul, Number(value));
  }
}

export class Calculator {
  constructor() {
    this.current = 0;
    this.history = [];
  }
  execute(command) {
    this.current = command.execute(this.current, command.value);
    this.history.push(command);
    localStorage.setItem('state', JSON.stringify(storage));
  }
  undo() {
    var command = this.history.pop();
    this.current = command.undo(this.current, command.value);
  }
  setCurrent(val) {
    this.current = Number(val);
  }
  getValue() {
    if (this.current.toString().includes('.')) {
      const integer = this.current.toString().split('.')[0];
      const decimal = this.current.toString().split('.')[1];
      if (decimal.length > 3) {
        return `${integer}.${decimal.substring(0, 3)}`;
      }
      return `${integer}.${decimal}`;
    }

    return this.current;
  }
  reset() {
    this.current = 0;
    this.history = [];
  }
}

export default Calculator;
