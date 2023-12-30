import { useState } from 'react';
import { BICYCLE_STATUS, BicycleDBData, BicycleData } from '../models';
import { convertSumToStr } from '../utils';
import { useChangeStatusBicycleMutation, useDeleteBicycleMutation } from '../redux/bicycleApi';

export const BicycleItem = ({
  bicycle,
  reloadBicycles,
}: {
  bicycle: BicycleDBData;
  reloadBicycles: () => void;
}) => {
  const { _id, name, type, color, id, status, price, wheelSize, description } = bicycle;

  const [deleteBicycleInDb] = useDeleteBicycleMutation();
  const [changeBicycleInDb] = useChangeStatusBicycleMutation();

  const [firstLetter, ...letters] = status.split('');
  const statusStr: string = [firstLetter.toUpperCase(), ...letters].join('');

  const statusesArr: BICYCLE_STATUS[] = Object.values(BICYCLE_STATUS).filter(
    (stat) => stat.toLowerCase() !== status.toLowerCase()
  );

  const [isShowStatuses, toggleIsShowStatuses] = useState(false);

  const toggleStatuses = (): void => {
    toggleIsShowStatuses(!isShowStatuses);
  };

  const deleteBicycle = async () => {
    await deleteBicycleInDb(_id);
    reloadBicycles();
  };

  const changeBicycleStatus = async (stat: BICYCLE_STATUS) => {
    const { _id, name, type, color, id, price } = bicycle;
    const changedBicycle: BicycleData = {
      name,
      type,
      color,
      id,
      price,
      wheelSize,
      description,
      status: stat,
    };
    await changeBicycleInDb({ id: _id, bicycle: changedBicycle });
    toggleIsShowStatuses(false);
    reloadBicycles();
  };

  return (
    <div className={`main-page__item bicycle ${status}`}>
      <div className="bicycle__info">
        <p>
          <strong className="bicycle__name">{name.toUpperCase()}</strong>
          <span>{` - ${type.toUpperCase()} (${color.toUpperCase()})`}</span>
        </p>
        <p className="bicycle__id">{`ID: ${id}`}</p>
        <div className="bicycle__status status">
          <span className="status__title">STATUS:</span>
          <span className="status__value">{statusStr}</span>
          <button className="status__arrow" onClick={toggleStatuses} />
          {isShowStatuses && (
            <div className="status__options">
              {statusesArr.map((stat) => (
                <button
                  key={stat}
                  className="status__btn"
                  onClick={() => changeBicycleStatus(stat)}
                >
                  {stat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="bicycle__price">
        <p>{`${convertSumToStr(price)} UAH/hr.`}</p>
      </div>
      <div className="bicycle__cross">
        <button className="bicycle__cross-btn" onClick={deleteBicycle} />
      </div>
    </div>
  );
};
