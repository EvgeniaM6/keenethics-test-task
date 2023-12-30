import { useState } from 'react';
import { BICYCLE_STATUS, BicycleDBData } from '../models';
import { convertSumToStr } from '../utils';
import { useDeleteBicycleMutation } from '../redux/bicycleApi';

export const BicycleItem = ({
  bicycle,
  reloadBicycles,
}: {
  bicycle: BicycleDBData;
  reloadBicycles: () => void;
}) => {
  const { _id, name, type, color, id, status, price } = bicycle;

  const [deleteBicycleInDb] = useDeleteBicycleMutation();

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
                <button key={stat} className="status__btn">
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
