import { getAllSalesByProductService } from './get-all-sales-by-product.js';

export const getTotalSold = () => {
  const products = Object.values(getAllSalesByProductService());

  const allQuantity = products.reduce((quantity, product) => {
    return product.totalQuantity + quantity;
  }, 0);

  return allQuantity;
};
