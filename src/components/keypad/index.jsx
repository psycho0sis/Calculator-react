import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'containers/button/index';

class KeyPad extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleClick } = this.props;
    return (
      <>
        <Button value="9" handleClick={handleClick} />
        <Button value="8" handleClick={handleClick} />
        <Button value="7" handleClick={handleClick} />
        <Button value="6" handleClick={handleClick} />
        <Button value="5" handleClick={handleClick} />
        <Button value="4" handleClick={handleClick} />
        <Button value="3" handleClick={handleClick} />
        <Button value="2" handleClick={handleClick} />
        <Button value="1" handleClick={handleClick} />
        <Button value="(" handleClick={handleClick} />
        <Button value="0" handleClick={handleClick} />
        <Button value=")" handleClick={handleClick} />
      </>
    );
  }
}

KeyPad.propTypes = {
  handleClick: PropTypes.func
};

export default KeyPad;
