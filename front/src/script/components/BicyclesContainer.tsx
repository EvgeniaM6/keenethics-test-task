import { BicycleDBData } from '../models';
import { useGetAllBicyclesQuery } from '../redux/bicycleApi';
import { BicycleItem } from './BicycleItem';

export const BicyclesContainer = () => {
  const { data = [] } = useGetAllBicyclesQuery('');

  return (
    <>
      {[...data]
        .sort((bicycle1: BicycleDBData, bicycle2: BicycleDBData) =>
          bicycle1.status.localeCompare(bicycle2.status)
        )
        .map((bicycle: BicycleDBData) => {
          return <BicycleItem key={bicycle._id} bicycle={bicycle} />;
        })}
    </>
  );
};
