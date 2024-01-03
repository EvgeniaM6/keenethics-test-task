import { TextInputProps } from '../../models';

export const NumberInput = ({ id, placeholder, register, errors }: TextInputProps) => {
  const error = errors[id];

  return (
    <div className="bicycle-form__field">
      <input
        type="number"
        id={id}
        title={placeholder}
        placeholder={placeholder}
        className={`bicycle-form__${id}`}
        {...register(id, {
          required: 'Fill the field',
        })}
      />
      {error && <div className="bicycle-form__alert">{`${error?.message}` || 'Error'}</div>}
    </div>
  );
};
