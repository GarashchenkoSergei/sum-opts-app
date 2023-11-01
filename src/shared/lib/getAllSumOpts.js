export const getAllSumOpts = (n) => {
  const opts = [[[]], [[1]], [[1, 1]], [[1, 1, 1], [3]]];

  if (n <= 3) {
    return opts[n];
  }

  for (let i = 4; i <= n; i++) {
    opts.push([]);

    for (let j of [1, 3, 4]) {
      const currentNumberOpts = opts[i - j].map(s => [...s, j]);

      opts[opts.length - 1].push(...currentNumberOpts);
    }
  }

  return opts[opts.length - 1];
}
