export const createPortfolios = (alts) => {
  const calcPercent = (num, percentage) => num * (percentage / 100);
  const diff = 100 - alts;
  const stocks = calcPercent(diff, 60);
  const bonds = calcPercent(diff, 40);
  const output = { alts, stocks, bonds };
  return output;
};
