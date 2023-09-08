import { PropsWithChildren, FC } from "react";
import { Provider } from "react-redux";

import providerTodoI from "../shared/interfaces/providerTodo";

const ProviderTodo: FC<PropsWithChildren<providerTodoI>> = ({
  store,
  children,
}) => {
  return <Provider {...{ store }}>{children}</Provider>;
};

export default ProviderTodo;
