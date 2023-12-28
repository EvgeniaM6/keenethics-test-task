import Bicycle from './Bicycle';
import { BicycleData } from '../models';

class BicycleService {
  async create({ name, price }: { name: string; price: number }) {
    return await Bicycle.create({ name, price });
  }

  async getAll() {
    return await Bicycle.find();
  }

  async getById(id: string) {
    return await Bicycle.findById(id);
  }

  async update(id: string, dataToUpdate: Partial<BicycleData>) {
    return await Bicycle.findByIdAndUpdate(id, dataToUpdate);
  }

  async delete(id: string) {
    return await Bicycle.findByIdAndDelete(id);
  }
}

export default new BicycleService();
