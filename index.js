import React, { useContext } from 'react';

import { NameContext, AgeContext } from './ProviderComponent';

export const ConsumerComponent = () => {
  const nameContext = useContext(NameContext);
  const ageContext = useContext(AgeContext);
  return (
    <div>
      Name: {name}, Age: {age}
    </div>
  );
};
