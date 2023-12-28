import Router from 'express';
import BicycleController from './bicycle/BicycleController';

const router = Router();

router.post('/', BicycleController.create);
router.get('/', BicycleController.getAll);
router.get('/:id', BicycleController.getById);
router.put('/:id', BicycleController.update);
router.delete('/:id', BicycleController.delete);

export default router;
