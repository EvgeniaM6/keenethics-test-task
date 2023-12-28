import Express from 'express';
import BicycleService from './BicycleService';

class BicycleController {
  async create(req: Express.Request, res: Express.Response) {
    try {
      const { name, price } = req.body;
      const bicycle = await BicycleService.create({ name, price });
      res.status(201).json(bicycle);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req: Express.Request, res: Express.Response) {
    try {
      const bicycles = await BicycleService.getAll();
      res.json(bicycles);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getById(req: Express.Request, res: Express.Response) {
    try {
      const { id } = req.params;
      const bicycle = await BicycleService.getById(id);
      res.json(bicycle);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req: Express.Request, res: Express.Response) {
    try {
      const { id } = req.params;
      const bicycle = await BicycleService.update(id, req.body);
      res.json(bicycle);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req: Express.Request, res: Express.Response) {
    try {
      const { id } = req.params;
      const bicycle = await BicycleService.delete(id);
      res.status(204).json(bicycle);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new BicycleController();
