import { ChangeEvent, useState } from "react";
import { ILoginFormData } from "./useFormInterfaces";

export const useForm = (initialForm: ILoginFormData) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
