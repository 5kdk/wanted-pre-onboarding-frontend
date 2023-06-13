const rem = (px, baseFontSize = 16) => {
  const remValue = px / baseFontSize;
  return `${remValue}rem`;
};

export default rem;
