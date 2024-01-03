import Router from 'express';
import BicycleController from './bicycle/BicycleController';

const router = Router();

router.get('/', BicycleController.getStats);

export default router;
