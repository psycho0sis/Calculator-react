import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MyError } from './style';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <MyError>Opps...we got a mistake</MyError>
        </>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element
};

export default ErrorBoundary;
