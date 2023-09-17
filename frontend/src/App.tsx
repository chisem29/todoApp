import { Divider } from "@mui/material";

import store from "./store";

import ProviderTodo from "./providers/ProviderTodo";
import Layout from "./components/layout/Layout";
import Main from "./components/layout/main/Main";
import Header from "./components/layout/header/Header";
import TodoList from "./components/UI/TodoList/TodoList";

import "./App.less";

const App = () => {
  return (
    <>
      <ProviderTodo store={store}>
        <Layout>
          <Header />
          <Divider />
          <Main>
            <TodoList />
          </Main>
        </Layout>
      </ProviderTodo>
    </>
  );
};

export default App;
