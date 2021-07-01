function solution(inputArray) {
  const num = inputArray
    .map((je) => je ** 2)
    .filter((three) => three % 3 === 1)
    .reduce((a, b) => a + b);

  return num;
}

exports.solution = solution;
