import { useState } from "react";
//{max: 10, min: 0, initial: 0}
export const useCounter = (configObj, step) => {
  const [value, setValue] = useState(configObj.initial);

  const increment = () => {
    if (value < configObj.max) {
      setValue((current) => current + step);
    }
  };

  const decrement = () => {
    if (value > configObj.min) {
      setValue((current) => current - step);
    }
  };

  const reset = () => {
    setValue(configObj.initial);
  };

  const set = (newValue) => {
    if (newValue >= configObj.max) {
      alert(`O valor máximo é ${configObj.max}`);
      setValue(configObj.max);
    } else if (newValue <= configObj.min) {
      alert(`O valor mínimo é ${configObj.min}`);
      setValue(configObj.min);
    } else {
      setValue(newValue);
    }
  };

  return { value, increment, decrement, reset, set };
};
