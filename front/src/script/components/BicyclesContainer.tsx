import { BICYCLE_STATUS, BicycleDBData } from '../models';
import { BicycleItem } from './BicycleItem';

export const BicyclesContainer = () => {
  const bicyclesArr: BicycleDBData[] = [
    {
      _id: '658d5826c935e0bcf35c72d2',
      name: 'Motobike4',
      price: 23,
      __v: 0,
      status: BICYCLE_STATUS.BUSY,
      color: 'red',
      description: 'busy',
      id: '00',
      type: 'bike',
      wheelSize: 12,
    },
    {
      _id: '658d5826c935e0bcf35c72d1',
      name: 'Motobike4',
      price: 23,
      __v: 0,
      status: BICYCLE_STATUS.AVAILABLE,
      color: 'red',
      description: 'busy',
      id: '00',
      type: 'bike',
      wheelSize: 12,
    },
  ];

  return (
    <>
      {bicyclesArr
        .sort((bicycle1: BicycleDBData, bicycle2: BicycleDBData) =>
          bicycle1.status.localeCompare(bicycle2.status)
        )
        .map((bicycle: BicycleDBData) => {
          return <BicycleItem key={bicycle._id} bicycle={bicycle} />;
        })}
    </>
  );
};
