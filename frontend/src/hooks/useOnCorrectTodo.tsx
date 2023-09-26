import { useState } from "react";

const useOnCorrectTodo = (initIndex: number) => {
  const [indexCorrect, setIndex] = useState<number>(initIndex);

  const handlerOnCorrectTask = (index: number) => () => {
    setIndex(index);
  };

  return { indexCorrect, handlerOnCorrectTask };
};

export default useOnCorrectTodo;
