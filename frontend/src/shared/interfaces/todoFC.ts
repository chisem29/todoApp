import taskI from "./task";

interface todoFCI extends taskI {
  index: number;
  visible: {
    handlerVisibleInner: (index: number) => () => void;
    indexVisible: number;
  };
  onCorrect: {
    handlerOnCorrectTask: (index: number) => () => void;
    indexCorrect: number;
  };
}

export default todoFCI;
