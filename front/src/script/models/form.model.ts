import { FieldErrors, UseFormRegister } from 'react-hook-form';

type FormValues = {
  id: string;
  name: string;
  type: string;
  color: string;
  wheelSize: string;
  price: string;
  description: string;
};

type TextInputProps = {
  id: keyof FormValues;
  placeholder: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export { FormValues, TextInputProps };
