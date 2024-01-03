import { FormValues } from './form.model';

enum BICYCLE_STATUS {
  AVAILABLE = 'available',
  BUSY = 'busy',
  UNAVAILABLE = 'unavailable',
}

type BicycleData = Omit<FormValues, 'price' | 'wheelSize' | 'status'> & {
  price: number;
  wheelSize: number;
  status: BICYCLE_STATUS;
};

type BicycleDBData = BicycleData & {
  _id: string;
  __v: number;
};

export { BICYCLE_STATUS, BicycleData, BicycleDBData };
