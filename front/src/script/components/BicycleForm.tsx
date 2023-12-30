import { SubmitHandler, useForm } from 'react-hook-form';
import { BICYCLE_STATUS, BicycleData, FormValues } from '../models';
import { NumberInput, TextInput, TextareaElem } from './inputElems';
import { useAppDispatch, useAppSelector } from '../hooks';
import { resetBicycleFormValues, setBicycleFormValues } from '../store/bicycleFormSlice';
import { useAddBicycleMutation } from '../redux/bicycleApi';

export const BicycleForm = ({ reloadBicycles }: { reloadBicycles: () => void }) => {
  const defaultValues = useAppSelector((state) => state.bicycleForm);
  const dispatch = useAppDispatch();
  const [addBicycle] = useAddBicycleMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ mode: 'onChange', defaultValues });

  const handleSubmitForm: SubmitHandler<FormValues> = async (values: FormValues) => {
    const newBicycle: BicycleData = {
      ...values,
      status: BICYCLE_STATUS.AVAILABLE,
      wheelSize: Number(values.wheelSize),
      price: Number(values.price),
    };

    await addBicycle(newBicycle);
    reset();
    dispatch(resetBicycleFormValues());
    reloadBicycles();
  };

  const handleChangeForm: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent) => {
    const { value, id: field } = e.target as HTMLInputElement;
    dispatch(setBicycleFormValues({ ...defaultValues, [field]: value }));
  };

  return (
    <div className="main-page__form">
      <form
        className="bicycle-form"
        onSubmit={handleSubmit(handleSubmitForm)}
        onChange={handleChangeForm}
      >
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
