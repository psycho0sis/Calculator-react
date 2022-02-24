import React from 'react';

import { MyButton } from 'containers/button/style';

const KeyPad = () => {
  return (
    <>
      <MyButton>9</MyButton>
      <MyButton>8</MyButton>
      <MyButton>7</MyButton>
      <MyButton>6</MyButton>
      <MyButton>5</MyButton>
      <MyButton>4</MyButton>
      <MyButton>3</MyButton>
      <MyButton>2</MyButton>
      <MyButton>1</MyButton>
      <MyButton>(</MyButton>
      <MyButton>0</MyButton>
      <MyButton>)</MyButton>
    </>
  );
};

export default KeyPad;
