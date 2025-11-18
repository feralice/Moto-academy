import csvParser from 'csv-parser';
import fs from 'fs';

let SALES = [];

export const loadData = () => {
  const result = [];

  fs.createReadStream('./data.csv')
    .pipe(csvParser())
    .on('data', (data) => {
      result.push(data);
    })
    .on('end', () => {
      SALES = result;
      console.log('Data loaded');
      console.table(SALES);
    });
};

export const getAllSales = () => {
  return SALES;
};
