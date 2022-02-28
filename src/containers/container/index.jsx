import React, { Component } from 'react';

import Display from 'components/display/index';
import ControlPanel from 'components/controlPanel/index';

import Calculator from 'utils/calculator';

import { Wrapper } from './style';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: '',
      secondValue: '',
      sign: '',
      finish: false,
      history: this.calculator.history
    };
  }

  calculator = new Calculator();

  handleClick = (e) => {
    switch (e.target.value) {
      case 'C': {
        this.setState(({ firstValue }) => ({
          firstValue: firstValue.slice(0, -1)
        }));
        break;
      }
      case 'CE': {
        this.setState({ firstValue: '', secondValue: '', sign: '', finish: false });
        break;
      }
      case '+': {
        this.setState(({ firstValue, sign }) => ({
          firstValue: firstValue + e.target.value,
          sign: sign + e.target.value
        }));
        break;
      }
      default: {
        this.setState(({ firstValue }) => ({
          firstValue: firstValue.concat(e.target.value)
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
