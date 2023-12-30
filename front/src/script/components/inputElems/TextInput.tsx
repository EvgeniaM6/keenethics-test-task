import { BicycleDBData, TextInputProps } from '../../models';
import { useGetAllBicyclesQuery } from '../../redux/bicycleApi';

export const TextInput = ({ id, placeholder, register, errors }: TextInputProps) => {
  const { data } = useGetAllBicyclesQuery('');

  const error = errors[id];
  const minSymbols = 5;

  return (
    <div className="bicycle-form__field">
      <input
        type="text"
        id={id}
        title={placeholder}
        placeholder={placeholder}
        className={`bicycle-form__${id}`}
        {...register(id, {
          required: 'Fill the field',
          minLength: {
            value: minSymbols,
            message: `Minimum ${minSymbols} symbols`,
          },
          validate: (value: string) => {
            if (id !== 'id' || !data) return true;
            const foundIndexSameId = (data as BicycleDBData[]).findIndex(
              (bicycle: BicycleDBData) => bicycle.id === value
            );
            return foundIndexSameId === -1 || 'This id already exists. Enter another';
          },
        })}
      />
      {error && <div className="bicycle-form__alert">{`${error?.message}` || 'Error'}</div>}
    </div>
  );
};
