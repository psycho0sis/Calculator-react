import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { sliceResult } from 'utils/sliceResult';

import { Container, Title, Item, FlexEnd } from './style';

const getHistory = () => {
  const saved = JSON.parse(localStorage.getItem('state'));
  let initialState = saved;
  return initialState || [];
};

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: getHistory(),
      interval: null
    };
  }

  changeState = () => {
    this.setState({
      history: JSON.parse(localStorage.getItem('state'))
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
      result = history.map((item, i) => {
        return (
          <Item key={i}>{`${sliceResult(item.firstValue)} ${item.operator} ${sliceResult(
            item.memory
          )}`}</Item>
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

export default History;
