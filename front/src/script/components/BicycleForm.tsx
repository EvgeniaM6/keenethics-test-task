import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../models';
import { NumberInput, TextInput, TextareaElem } from './inputElems';

export const BicycleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ mode: 'onChange' });

  const handleSubmitForm: SubmitHandler<FormValues> = (values: FormValues) => {
    console.log('values=', values);
    reset();
  };

  return (
    <div className="main-page__form">
      <form action="" className="bicycle-form" onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="bicycle-form__grid-2col">
          <TextInput id="name" placeholder="Name" register={register} errors={errors} />
          <TextInput id="type" placeholder="Type" register={register} errors={errors} />
        </div>
        <div className="bicycle-form__grid-2col">
          <TextInput id="color" placeholder="Color" register={register} errors={errors} />
          <NumberInput
            id="wheelSize"
            placeholder="Wheel size"
            register={register}
            errors={errors}
          />
        </div>
        <div className="bicycle-form__grid-2col">
          <NumberInput id="price" placeholder="Price" register={register} errors={errors} />
          <TextInput
            id="id"
            placeholder="ID (slug): ХХХХХХХХХХХХХ"
            register={register}
            errors={errors}
          />
        </div>
        <div className="bicycle-form__grid-1col">
          <TextareaElem
            id="description"
            placeholder="Description"
            register={register}
            errors={errors}
          />
        </div>
        <div className="bicycle-form__grid-2col">
          <button type="submit" className="bicycle-form__btn">
            {'Save'.toUpperCase()}
          </button>
          <button type="reset" className="bicycle-form__btn" onClick={reset}>
            {'Clear'.toUpperCase()}
          </button>
        </div>
      </form>
    </div>
  );
};
