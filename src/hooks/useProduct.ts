import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}
export const useProduct = ({
  initialValues,
  product,
  onChange,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    const newValue = Math.min(
      Math.max(counter + value, 0),
      initialValues?.maxCount || Math.max(counter + value)
    );

    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };
  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
    isMounted.current = true;
  }, [value]);

  return {
    counter,
    increaseBy,
    isMaxCountReached:
      !!initialValues?.maxCount && initialValues?.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset,
  };
};
