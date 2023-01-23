import { useEffect, useState } from "react";
import { Product } from "../lib/slices/createProductSlice";

export function getFromStore<T>(
  store: (callback: (state: T) => Product[]) => Product[],
  storeCallBack: (state: T) => Product[]
) {
  const result = store(storeCallBack);
  const [state, setState] = useState<Product[]>([]);
  useEffect(() => {
    setState(result);
  }, [result]);
  return state;
}
