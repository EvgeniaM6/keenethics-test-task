import Express from 'express';
import BicycleService from './BicycleService';

class BicycleController {
  async create(req: Express.Request, res: Express.Response) {
    try {
      const { id, name, type, color, wheelSize, price, description, status } = req.body;
      const bicycle = await BicycleService.create({
        id,
        name,
        type,
        color,
        wheelSize,
        price,
        description,
        status,
      });
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

  async getAllAmount(req: Express.Request, res: Express.Response) {
    try {
      const bicyclesArr = await BicycleService.getAll();
      res.json({ amount: bicyclesArr.length });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllAvailableAmount(req: Express.Request, res: Express.Response) {
    try {
      const bicyclesArr = await BicycleService.getAllAvailable();
      res.json({ amount: bicyclesArr.length });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllBookedAmount(req: Express.Request, res: Express.Response) {
    try {
      const bicyclesArr = await BicycleService.getAllBooked();
      res.json({ amount: bicyclesArr.length });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAveragePrice(req: Express.Request, res: Express.Response) {
    try {
      const bicyclesArr = await BicycleService.getAll();
      const bicyclesAmount = bicyclesArr.length;

      if (bicyclesAmount === 0) {
        res.json({ averagePrice: 0 });
        return;
      }

      const sumBicyclePrice = bicyclesArr.reduce((acc, bicycle) => (acc += bicycle.price), 0);
      const averagePrice = sumBicyclePrice / bicyclesAmount;
      res.json({ averagePrice });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new BicycleController();
