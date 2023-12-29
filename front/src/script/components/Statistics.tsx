import { convertSumToStr } from '../utils';

export const Statistics = () => {
  const totalBikes = 0;
  const availableBikes = 0;
  const bookedBikes = 0;
  const averageBikeCost = 0;

  return (
    <div>
      <h4>Statistics</h4>
      <p>
        <span>Total Bikes:</span>
        <strong>{totalBikes}</strong>
      </p>
      <p>
        <span>Available Bikes:</span>
        <strong>{availableBikes}</strong>
      </p>
      <p>
        <span>Booked Bikes:</span>
        <strong>{bookedBikes}</strong>
      </p>
      <p>
        <span>Average bike cost:</span>
        <strong>{convertSumToStr(averageBikeCost)}</strong>
        <span>UAH/hr.</span>
      </p>
    </div>
  );
};
