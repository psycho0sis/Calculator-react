const isEnd = (str) => {
  return str.length > 1 ? str.slice(0, -1) : '0';
};

export default isEnd;
