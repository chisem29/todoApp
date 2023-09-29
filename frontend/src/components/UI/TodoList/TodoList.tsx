import { FC } from "react";

import styles from "./Todolist.module.less";

import useTodosSelector from "../../../hooks/useTodosSelector";
import useVisibleInner from "../../../hooks/useVisibleInner";
import useOnCorrectTodo from "../../../hooks/useOnCorrectTodo";

import Todo from "../Todo/Todo";

const TodoList: FC = () => {
  const state = useTodosSelector();

  const visible = useVisibleInner(-1);
  const onCorrect = useOnCorrectTodo(-1)

  return (
    <>
      {!state.length ? (
        <h4 className={styles.emptyMessage}> Empty. {"  "} Add tasks </h4>
      ) : (
        <ul className={styles.listTasks}>
          {state.map(({ description, complete, name }, index) => (
            <Todo {...{description, complete, name, index, visible, onCorrect }}/>
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
