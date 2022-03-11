import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { sliceResult } from 'utils/sliceResult';

import { Container, Title, Item, FlexEnd } from './style';

export class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: JSON.parse(localStorage.getItem('history')) || [],
      interval: null
    };
  }

  changeState = () => {
    this.setState({
      history: JSON.parse(localStorage.getItem('history'))
    });
  };

  componentDidMount() {
    let interval = setInterval(this.changeState, 1000);
    this.setState({ interval: interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  showHistory = (history) => {
    let result = [];
    if (history) {
      result = history.map(({ firstValue, operator, memory }, i) => {
        return (
          <Item key={i}>
            {`${sliceResult(firstValue)} 
            ${operator}
            ${sliceResult(memory)}`}
          </Item>
        );
      });
    }
    return result;
  };

  render() {
    const { history } = this.state;
    const items = this.showHistory(history);

    return (
      <Container id="history">
        <Title>History</Title>
        <FlexEnd>{items}</FlexEnd>
      </Container>
    );
  }
}

History.propTypes = {
  history: PropTypes.array
};
