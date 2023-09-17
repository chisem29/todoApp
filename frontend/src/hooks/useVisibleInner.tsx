import { useState } from "react";

const useVisibleInner = () => {
  const [indexVisible, setVisible] = useState<number>();

  const handlerVisibleInner = (index: number) => () => {
    setVisible(index);
  };

  return { indexVisible, handlerVisibleInner };
};

export default useVisibleInner;
