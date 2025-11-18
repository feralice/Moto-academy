import { getAllSales } from './load-data.js';

export const getAllSalesByProductService = () => {
  const sales = getAllSales();
  const total = {};

  for (const sale of sales) {
    if (!total[sale.product]) {
      total[sale.product] = {
        product: sale.product,
        totalQuantity: 0,
      };
    }

    total[sale.product].totalQuantity += Number(sale.quantity);
  }

  return total;
};
