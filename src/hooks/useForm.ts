import { type } from "@testing-library/user-event/dist/type";
import { ChangeEvent, useEffect, useState } from "react";

interface ILoginFormData {
  email: string;
  password: string;
  displayName?: string;
  isFormValid?: boolean;
  displayNameValid?: boolean;
  emailValid?: boolean;
  passwordValid?: boolean;
}

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
