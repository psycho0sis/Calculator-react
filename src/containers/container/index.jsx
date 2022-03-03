import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Display from 'components/Display/index';
import ControlPanel from 'components/ControlPanel/index';

import Calculator, {
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  RemainderCommand
} from 'utils/calculator';

import isEnd from 'utils/isEnd';

import { Wrapper } from './style';
import ErrorBoundary from 'components/ErrorBoundary/index';

class Container extends Component {
  state = {
    firstValue: '0',
    operator: null
  };

  calculator = new Calculator();

  handleClick = (content) => {
    const { firstValue } = this.state;

    switch (content) {
      case 'C': {
        this.setState(({ firstValue }) => ({
          firstValue: isEnd(firstValue)
        }));
        break;
      }
      case 'CE': {
        this.calculator.reset();
        this.setState({ firstValue: '0' });
        break;
      }
      case '+': {
        this.setState({
          operator: '+',
          firstValue: ''
        });
        break;
      }
      case '-': {
        this.setState({
          operator: '-',
          firstValue: ''
        });
        break;
      }
      case '*': {
        this.setState({
          operator: '*',
          firstValue: ''
        });
        break;
      }
      case '/': {
        this.setState({
          operator: '/',
          firstValue: ''
        });
        break;
      }
      case '%': {
        this.setState({
          operator: '%',
          firstValue: ''
        });
        break;
      }
      case '+/-': {
        this.calculator.setCurrent(parseFloat(firstValue) * -1);
        this.setState({
          firstValue: (parseFloat(firstValue) * -1).toString()
        });
        break;
      }
      case '=': {
        const { operator, firstValue } = this.state;
        if (!this.state.operator) break;

        if (operator === '+') {
          this.calculator.execute(new AddCommand(firstValue));
        } else if (operator === '-') {
          this.calculator.execute(new SubtractCommand(firstValue));
        } else if (operator === '*') {
          this.calculator.execute(new MultiplyCommand(firstValue));
        } else if (operator === '/') {
          this.calculator.execute(new DivideCommand(firstValue));
        } else if (operator === '%') {
          this.calculator.execute(new RemainderCommand(firstValue));
        }

        this.setState({ operator: null, firstValue: this.calculator.getValue() });
        break;
      }

      case '.': {
        if (firstValue.toString().includes('.')) return;
        this.setState(({ firstValue }) => ({
          firstValue: firstValue + '.'
        }));

        break;
      }
      default: {
        if (!this.state.operator) {
          this.calculator.setCurrent(this.state.firstValue + content);
        }

        this.setState(({ firstValue }) => ({
          firstValue: parseFloat(firstValue + content).toString()
        }));
      }
    }
  };

  render() {
    const { firstValue } = this.state;
    const memory = this.calculator.getValue();

    return (
      <Wrapper>
        <ErrorBoundary>
          <Display firstValue={firstValue} memory={memory} />
        </ErrorBoundary>
        <ControlPanel handleClick={this.handleClick} />
      </Wrapper>
    );
  }
}

Container.propTypes = {
  onChangeHistory: PropTypes.func
};

export default Container;
