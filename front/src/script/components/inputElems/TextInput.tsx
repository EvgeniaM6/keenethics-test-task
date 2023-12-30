import { TextInputProps } from '../../models';

export const TextInput = ({ id, placeholder, register, errors }: TextInputProps) => {
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
        })}
      />
      {error && <div className="bicycle-form__alert">{`${error?.message}` || 'Error'}</div>}
    </div>
  );
};
