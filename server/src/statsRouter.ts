import Router from 'express';
import BicycleController from './bicycle/BicycleController';

const router = Router();

router.get('/number', BicycleController.getAllAmount);
router.get('/number/available', BicycleController.getAllAvailableAmount);
router.get('/number/booked', BicycleController.getAllBookedAmount);
router.get('/price/average', BicycleController.getAveragePrice);

export default router;
