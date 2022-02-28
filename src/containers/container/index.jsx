import React, { Component } from 'react';

import Display from 'components/display/index';
import ControlPanel from 'components/controlPanel/index';

import Calculator, {
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand
} from 'utils/calculator';

import isEnd from 'utils/isEnd';

import { Wrapper } from './style';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: this.calculator.value,
      memory: null,
      operator: null,
      history: this.calculator.history
    };
  }

  calculator = new Calculator();

  setMemory = (memory, operator, firstValue) => {
    return operator !== null
      ? operator === '+'
        ? this.calculator.executeCommand(new AddCommand(memory))
        : operator === '-'
        ? this.calculator.executeCommand(new SubtractCommand(memory))
        : operator === '*'
        ? this.calculator.executeCommand(new MultiplyCommand(memory))
        : operator === '/'
        ? this.calculator.executeCommand(new DivideCommand(memory))
        : null
      : parseFloat(firstValue);
  };

  handleClick = (content) => () => {
    const { firstValue } = this.state;
    switch (content) {
      case 'C': {
        this.setState(({ firstValue }) => ({
          firstValue: isEnd(firstValue)
        }));
        break;
      }
      case 'CE': {
        this.setState({ firstValue: '0', memory: null });
        break;
      }
      case '+': {
        this.setState(({ firstValue, memory, operator }) => ({
          memory: this.setMemory(memory, operator, firstValue),
          firstValue: '0',
          operator: '+'
        }));
        break;
      }
      case '-': {
        this.setState(({ firstValue, memory, operator }) => ({
          memory: this.setMemory(memory, operator, firstValue),
          firstValue: '0',
          operator: '-'
        }));
        break;
      }
      case '*': {
        this.setState(({ firstValue, memory, operator }) => ({
          memory: this.setMemory(memory, operator, firstValue),
          firstValue: '0',
          operator: '*'
        }));
        break;
      }
      case '/': {
        this.setState(({ firstValue, memory, operator }) => ({
          memory: this.setMemory(memory, operator, firstValue),
          firstValue: '0',
          operator: '/'
        }));
        break;
      }
      case '=': {
        if (!this.state.operator) break;
        this.calculator.value = this.state.firstValue;
        this.setState(({ memory, operator }) => ({
          firstValue:
            operator === '+'
              ? (memory + parseFloat(this.calculator.value)).toString()
              : operator === '-'
              ? (memory - parseFloat(this.calculator.value)).toString()
              : operator === '*'
              ? (memory * parseFloat(this.calculator.value)).toString()
              : operator === '/'
              ? (memory / parseFloat(this.calculator.value)).toString()
              : '0',
          memory: null,
          operator: null
        }));
        break;
      }
      case '.': {
        if (firstValue.includes('.')) return;
        this.setState(({ firstValue }) => ({
          firstValue: firstValue + '.'
        }));
        break;
      }
      default: {
        firstValue[firstValue.length - 1] === '.'
          ? this.setState(({ firstValue }) => ({
              firstValue: firstValue + content
            }))
          : this.setState(({ firstValue }) => ({
              firstValue: parseFloat(parseFloat(firstValue) + content).toString()
            }));
      }
    }
  };

  render() {
    const { firstValue } = this.state;
    return (
      <Wrapper>
        <Display firstValue={firstValue} />
        <ControlPanel handleClick={this.handleClick} />
      </Wrapper>
    );
  }
}

export default Container;
