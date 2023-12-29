import { useState } from 'react';
import { BICYCLE_STATUS, BicycleData } from '../models';
import { convertSumToStr } from '../utils';

export const BicycleItem = ({ bicycle }: { bicycle: BicycleData }) => {
  const { name, type, color, id, status, price } = bicycle;

  const [isShowStatuses, toggleIsShowStatuses] = useState(false);

  const toggleStatuses = () => {
    toggleIsShowStatuses(!isShowStatuses);
  };

  return (
    <div>
      <div>
        <p>
          <strong>{name}</strong>
          <span>{` - ${type} (${color})`}</span>
        </p>
        <p>{`ID: ${id}`}</p>
        <div>
          <span>STATUS:</span>
          <span>{status}</span>
          <button onClick={toggleStatuses}>V</button>
          {isShowStatuses && (
            <div>
              {Object.keys(BICYCLE_STATUS)
                .filter((stat) => stat.toLowerCase() !== status.toLowerCase())
                .map((stat) => {
                  return <button key={stat}>{stat}</button>;
                })}
            </div>
          )}
        </div>
      </div>
      <div>
        <p>{`${convertSumToStr(price)} UAH/hr.`}</p>
      </div>
      <div>
        <button>X</button>
      </div>
    </div>
  );
};
