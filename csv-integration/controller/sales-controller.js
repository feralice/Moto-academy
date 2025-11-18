import { getAllSalesByProductService } from '../services/get-all-sales-by-product.js';
import { getProductBestSelling } from '../services/product-best-selling.js';
import { getTotalSold } from '../services/total-sold.js';

export const getAllSalesByProduct = (req, res) => {
  const result = getAllSalesByProductService();
  res.json(Object.values(result));
};

export const bestSellingProduct = (req, res) => {
  const result = getProductBestSelling();
  res.json(result);
};

export const totalSoldValue = (req, res) => {
  const result = getTotalSold();
  res.json({ totalSold: result });
};
