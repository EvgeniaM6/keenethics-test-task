import Bicycle from './Bicycle';
import { BICYCLE_STATUS, BicycleData } from '../models';

class BicycleService {
  async create(bicycleData: BicycleData) {
    return await Bicycle.create(bicycleData);
  }

  async getAll() {
    return await Bicycle.find();
  }

  async getAllAvailable() {
    return await Bicycle.find({ status: BICYCLE_STATUS.AVAILABLE });
  }

  async getAllBooked() {
    return await Bicycle.find({ status: BICYCLE_STATUS.BUSY });
  }

  async getById(id: string) {
    return await Bicycle.findById(id);
  }

  async update(id: string, dataToUpdate: Partial<BicycleData>) {
    return await Bicycle.findByIdAndUpdate(id, dataToUpdate, { new: true });
  }

  async delete(id: string) {
    return await Bicycle.findByIdAndDelete(id);
  }
}

export default new BicycleService();
