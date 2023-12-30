import { FormValues } from './form.model';

enum BICYCLE_STATUS {
  AVAILABLE = 'available',
  BUSY = 'busy',
  UNAVAILABLE = 'unavailable',
}

type BicycleData = FormValues & {
  _id: string;
  __v: number;
};

export { BICYCLE_STATUS, BicycleData };
