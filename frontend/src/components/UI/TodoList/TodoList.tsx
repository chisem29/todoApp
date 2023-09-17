import { FC } from "react";

import { FormGroup, useMediaQuery } from "@mui/material";

import useHandlerDeleteTask from "../../../hooks/useHandlerDeleteTask";
import useHandlerToogleTask from "../../../hooks/useHandlerToogleTask";

import styles from "./Todolist.module.less";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useTodosSelector from "../../../hooks/useTodosSelector";
import useVisibleInner from "../../../hooks/useVisibleInner";

const TodoList: FC = () => {
  const state = useTodosSelector();
  const dispatch = useAppDispatch();

  const handlerDelete = useHandlerDeleteTask(dispatch);
  const handlerToogleTask = useHandlerToogleTask(dispatch);

  const isLessThanTabletSize = useMediaQuery("(max-width:768px)");

  const { indexVisible, handlerVisibleInner } = useVisibleInner();

  return (
    <ul className={styles.listTasks}>
      {state.map(({ description, complete, name }, index) => (
        <li
          className={index === indexVisible ? styles.visibleItemAll : ""}
          key={index}
        >
          <FormGroup className={styles.completeTask}>
            <input
              type="checkbox"
              id="complete"
              onChange={handlerToogleTask({ description, complete, name })}
              defaultChecked={complete}
            />
            <label id="complete">
              {" "}
              <img src="https://img.icons8.com/?size=1x&id=8FZJBNvt3gGe&format=png" />
            </label>
          </FormGroup>
          <div
            onClick={handlerVisibleInner(
              index === indexVisible ? state.length + 1 : index
            )}
            className={
              styles.taskInner +
              " " +
              (index === indexVisible ? styles.visibleAll : "")
            }
          >
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
          <button onClick={handlerDelete({ name })}>
            Del {!isLessThanTabletSize ? <>Task</> : ""}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
