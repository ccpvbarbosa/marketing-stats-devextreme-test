import { createPortfolios } from "./utils";

const exposures = [0, 20, 30, 40, 50, 60, 70];

export const data = {
  portfolios: exposures.map((e) => createPortfolios(e)),
  years: [
    {
      year: 2,
      portfolios: exposures.map((e) => createPortfolios(e)),
      returns: [5.25, 7.8, 9.08, 10.34, 11.58, 12.82, 14.04],
      volatility: [13.18, 10.69, 9.58, 8.59, 7.78, 7.2, 6.93]
    },
    {
      year: 3,
      portfolios: exposures.map((e) => createPortfolios(e)),
      returns: [9.27, 10.86, 11.64, 12.4, 13.14, 13.88, 14.59],
      volatility: [11.85, 9.68, 8.71, 7.86, 7.17, 6.69, 6.47]
    },
    {
      year: 5,
      portfolios: exposures.map((e) => createPortfolios(e)),
      returns: [7.48, 8.44, 8.89, 9.34, 9.77, 10.19, 10.6],
      volatility: [10.22, 8.38, 7.58, 6.9, 6.36, 6.02, 5.91]
    }
  ]
};

export const chartDataSource = data.years; // [{return: number, volatility: number}]
export const range_AnnualizedReturn = data.years
  .map((year) => year.returns)
  .flat()
  .sort((a, b) => a - b);
export const range_Volatility = data.years
  .map((year) => year.volatility)
  .flat()
  .sort((a, b) => a - b);
