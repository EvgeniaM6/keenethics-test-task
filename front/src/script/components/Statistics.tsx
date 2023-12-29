import { convertSumToStr } from '../utils';

export const Statistics = () => {
  const totalBikes = 0;
  const availableBikes = 0;
  const bookedBikes = 0;
  const averageBikeCost = 0;

  return (
    <div className="main-page__stats stats">
      <h4 className="stats__title">{'Statistics'.toUpperCase()}</h4>
      <p className="stats__string">
        <span>Total Bikes:</span>
        <strong className="stats__value">{` ${totalBikes}`}</strong>
      </p>
      <p className="stats__string">
        <span>Available Bikes :</span>
        <strong className="stats__value">{` ${availableBikes}`}</strong>
      </p>
      <p className="stats__string">
        <span>Booked Bikes:</span>
        <strong className="stats__value">{` ${bookedBikes}`}</strong>
      </p>
      <p className="stats__string">
        <span>Average bike cost:</span>
        <strong className="stats__value">{` ${convertSumToStr(averageBikeCost)} `}</strong>
        <span>UAH/hr.</span>
      </p>
    </div>
  );
};
