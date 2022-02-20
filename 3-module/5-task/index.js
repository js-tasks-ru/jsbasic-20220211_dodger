function getMinMax(str) {
  const result = {
    min: Infinity,
    max: -Infinity
  };

  str.split(' ')
  .forEach(str => {
    const number = parseFloat(str);

    if (typeof number !== 'number') { return; }

    result.min = result.min > number ? number : result.min;
    result.max = result.max < number ? number : result.max;
  });

  return result;
}
