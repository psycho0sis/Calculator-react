import React from 'react';

import { Button } from './style';

const ClearButton = () => {
  const clearHistory = () => {
    localStorage.removeItem('history');
    window.location.reload();
  };

  return <Button onClick={clearHistory}>Clear All History</Button>;
};

export default ClearButton;
