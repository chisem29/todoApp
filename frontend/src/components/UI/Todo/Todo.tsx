import { FC, useState } from "react";

import { FormGroup } from "@mui/material";

import todoFCI from "../../../shared/interfaces/todoFC";

import useHandlerToogleTask from "../../../hooks/useHandlerToogleTask";
import useHandlerDeleteTask from "../../../hooks/useHandlerDeleteTask";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useTodosSelector from "../../../hooks/useTodosSelector";
import useHandlerCorrectTask from "../../../hooks/useHandlerCorrectTask";

import styles from "./Todo.module.less";

const Todo: FC<todoFCI> = ({
  index,
  name,
  complete,
  description,
  visible: { indexVisible, handlerVisibleInner },
  onCorrect: { indexCorrect, handlerOnCorrectTask },
}) => {
  const state = useTodosSelector();
  const dispatch = useAppDispatch();

  const handlerDelete = useHandlerDeleteTask(dispatch);
  const handlerToogleTask = useHandlerToogleTask(dispatch);
  const handlerCorrectTask = useHandlerCorrectTask(dispatch);

  const [valueName, setName] = useState(name);
  const [valueDesc, setDesc] = useState(description);

  return (
    <li
      className={
        styles.task +
        " " +
        (index === indexVisible ? styles.visibleItemAll : "")
      }
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
        {indexCorrect !== index ? (
          <>
            <h1>{name}</h1>
            <p>{description}</p>
          </>
        ) : (
          <>
            <input
              defaultValue={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
              type="text"
            />
            <input
              defaultValue={description}
              onChange={(e) => {
                setDesc(e.currentTarget.value);
              }}
              type="text"
            />
          </>
        )}
      </div>
      <button className={styles.deleteBtn} onClick={handlerDelete({ name })}>
        <img src="https://img.icons8.com/?size=1x&id=68064&format=png" />
      </button>
      <button
        className={styles.correctBtn}
        onClick={
          index !== indexCorrect
            ? handlerOnCorrectTask(index)
            : handlerCorrectTask(
                { description: valueDesc, name: valueName, index },
                handlerOnCorrectTask
              )
        }
      >
        <img src="https://img.icons8.com/?size=50&id=8192&format=png" />
      </button>
    </li>
  );
};

export default Todo;
