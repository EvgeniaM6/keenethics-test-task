import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { BICYCLE_STATUS } from './bicycle.model';

type FormValues = {
  id: string;
  name: string;
  type: string;
  color: string;
  wheelSize: number;
  price: number;
  description: string;
  status: BICYCLE_STATUS;
};

type TextInputProps = {
  id: keyof FormValues;
  placeholder: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export { FormValues, TextInputProps };
