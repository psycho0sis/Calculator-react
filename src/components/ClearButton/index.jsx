import React from 'react';

import { storage } from 'utils/calculator';

import { Button } from './style';

export const ClearButton = () => {
  const clearHistory = () => {
    localStorage.removeItem('history');
    storage.length = 0;
  };

  return <Button onClick={clearHistory}>Clear All History</Button>;
};
