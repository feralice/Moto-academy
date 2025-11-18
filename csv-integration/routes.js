import express from 'express';
import { bestSellingProduct, getAllSalesByProduct, totalSoldValue } from './controller/sales-controller.js';

const router = express.Router();

router.get('/product/sales', getAllSalesByProduct);
router.get('/product/best-selling', bestSellingProduct);
router.get('/product/total-sold', totalSoldValue);

export default router;
