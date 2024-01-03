import { TextInputProps } from '../../models';

export const TextareaElem = ({ id, placeholder, register, errors }: TextInputProps) => {
  const error = errors[id];
  const minSymbols = 5;

  return (
    <div className="bicycle-form__field">
      <textarea
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
      ></textarea>
      {error && <div className="bicycle-form__alert">{`${error?.message}` || 'Error'}</div>}
    </div>
  );
};
