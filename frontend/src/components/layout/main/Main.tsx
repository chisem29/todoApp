import { FC, useState, PropsWithChildren } from "react";

import { FormGroup } from "@mui/material";

import useTodosSelector from "../../../hooks/useTodosSelector";
import useAppDispatch from "../../../hooks/useAppDispatch";

import styles from "./Main.module.less";
import useHandlerAddTask from "../../../hooks/useHandlerAddTask";
import useHandlerClearTasks from "../../../hooks/useHandlerClearTasks";

const Main: FC<PropsWithChildren> = ({ children }) => {
  const [fieldValue, setValue] = useState<string>("");
  const [fieldValue2, setValue2] = useState<string>("");

  const state = useTodosSelector();
  const dispatch = useAppDispatch();

  const handlerAdd = useHandlerAddTask(dispatch, {
    description: fieldValue,
    name: fieldValue2,
  });

  const handlerClear = useHandlerClearTasks(dispatch);

  return (
    <main className={styles.main}>
      {children}
      <div className={styles.controlTodos}>
        <FormGroup className={styles.groupControl}>
          <input
            required
            id="name"
            placeholder="Enter  task name"
            type="text"
            onChange={(e) => {
              setValue2(e.currentTarget.value);
            }}
          />
          <span />
        </FormGroup>
        <FormGroup className={styles.groupControl}>
          <textarea
            required
            id="desciption"
            placeholder="Description"
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          />
          <span />
        </FormGroup>
        <div className={styles.btnGroup}>
          <button
            type="submit"
            className={styles.addBtn}
            disabled={!(fieldValue && fieldValue2)}
            onClick={handlerAdd}
          >
            Add task
          </button>
          <button
            disabled={!state.length}
            className={styles.clearBtn}
            onClick={handlerClear}
          >
            Clear All
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
