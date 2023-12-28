enum BICYCLE_STATUS {
  AVAILABLE = 'available',
  BUSY = 'busy',
  UNAVAILABLE = 'unavailable',
}

type BicycleData = {
  id: string;
  name: string;
  type: string;
  color: string;
  wheelSize: number;
  price: number;
  description: string;
  status: BICYCLE_STATUS;
};

export { BICYCLE_STATUS, BicycleData };
