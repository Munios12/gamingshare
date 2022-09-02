import { ChangeEvent, useState } from "react";

interface IReviewFormData {
  review: string;
}

export const useReviewForm = (initialForm: IReviewFormData) => {
  const [formReviewState, setFormReviewState] = useState(initialForm);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormReviewState({
      ...formReviewState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormReviewState(initialForm);
  };

  return {
    ...formReviewState,
    setFormReviewState,
    onInputChange,
    onResetForm,
  };
};
