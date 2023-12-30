import { BicycleDBData } from '../models';
import { BicycleItem } from './BicycleItem';

export const BicyclesContainer = ({ bicyclesArr }: { bicyclesArr: BicycleDBData[] }) => {
  return (
    <>
      {[...bicyclesArr]
        .sort((bicycle1: BicycleDBData, bicycle2: BicycleDBData) =>
          bicycle1.status.localeCompare(bicycle2.status)
        )
        .map((bicycle: BicycleDBData) => {
          return <BicycleItem key={bicycle._id} bicycle={bicycle} />;
        })}
    </>
  );
};
