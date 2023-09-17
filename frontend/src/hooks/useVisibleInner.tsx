import { useState } from "react";

const useVisibleInner = (initIndex : number) => {
  const [indexVisible, setVisible] = useState<number>(initIndex);

  const handlerVisibleInner = (index: number) => () => {
    setVisible(index);
  };

  return { indexVisible, handlerVisibleInner };
};

export default useVisibleInner;
