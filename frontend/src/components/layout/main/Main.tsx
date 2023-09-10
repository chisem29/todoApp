import { FC, useCallback, useState } from "react";

import { Button, Input } from "@mui/material"

import useTodosSelector from "../../../hooks/useTodosSelector";
import useAppDispatch from "../../../hooks/useAppDispatch";
import { addTask } from "../../../store/slices/todosSlice";

const Main: FC = () => {

  const [fieldValue, setValue] = useState<string>('')

  const state = useTodosSelector();
  const dispatch = useAppDispatch();

  const handlerAdd = useCallback((value : string) => { dispatch(addTask({ desciption : value}))}, [])

  return (
    <>
    <Input type="text" onChange={(e) => {setValue(e.currentTarget.value as string)}}/>
    <Button variant="outlined" onClick={() => handlerAdd(fieldValue)}>Add task</Button>
    <ul>
      {state.map(({ desciption }, index) => (
        <li key={index}>task №{desciption}</li>
      ))}
    </ul>
    </>
  );
};

export default Main;
