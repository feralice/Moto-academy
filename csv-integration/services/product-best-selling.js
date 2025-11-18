import { getAllSalesByProductService } from './get-all-sales-by-product.js';

export const getProductBestSelling = () => {
  const products = Object.values(getAllSalesByProductService());

  if (products.length === 0) return null;

  const bestSelling = products.reduce((maxQuantity, current) => {
    return current.totalQuantity > maxQuantity.totalQuantity ? current : maxQuantity;
  });

  const maxQuantity = bestSelling.totalQuantity;

  const bestProducts = products.filter((p) => p.totalQuantity === maxQuantity);

  return {
    totalQuantity: maxQuantity,
    products: bestProducts.map((p) => p.product),
  };
};
