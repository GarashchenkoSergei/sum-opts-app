export const getAllSumOpts = (n) => {
  const options = [[[]], [[1]], [[1, 1]], [[1, 1, 1], [3]]];

  if (n <= 3) {
    return options[n];
  }

  for (let i = 4; i <= n; i++) {
    const currentOptions = [];

    for (let j of [1, 3, 4]) {
      for (let prevOption of options[i - j]) {
        currentOptions.push([...prevOption, j]);
      }
    }

    options.push(currentOptions);
  }

  return options[n];
}
