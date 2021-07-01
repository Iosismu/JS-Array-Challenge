function solution(inputArray) {
  const isBelow = (current) => current % 2 === 0;

  return inputArray.every(isBelow);
}

exports.solution = solution;
