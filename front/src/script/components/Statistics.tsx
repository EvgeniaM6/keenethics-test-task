import { StatsData } from '../models';
import { convertSumToStr } from '../utils';
import { Loading } from './Loading';

export const Statistics = ({
  stats,
  isLoading,
}: {
  stats: StatsData | undefined;
  isLoading: boolean;
}) => {
  return (
    <div className="main-page__stats stats">
      <h4 className="stats__title">{'Statistics'.toUpperCase()}</h4>
      <p className="stats__string">
        <span>Total Bikes:</span>
        <strong className="stats__value">{` ${stats?.total || 0}`}</strong>
      </p>
      <p className="stats__string">
        <span>Available Bikes :</span>
        <strong className="stats__value">{` ${stats?.available || 0}`}</strong>
      </p>
      <p className="stats__string">
        <span>Booked Bikes:</span>
        <strong className="stats__value">{` ${stats?.booked || 0}`}</strong>
      </p>
      <p className="stats__string">
        <span>Average bike cost:</span>
        <strong className="stats__value">{` ${convertSumToStr(stats?.averagePrice || 0)} `}</strong>
        <span>UAH/hr.</span>
      </p>
      {isLoading && <Loading />}
    </div>
  );
};
