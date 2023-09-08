import { useTheme } from "@mui/material";

import ProviderTodo from "./providers/ProviderTodo";
import Layout from "./components/layout/Layout";

import store from "./store"

import "./App.less";

const App = () => {

  const  { palette : {mode}} = useTheme();
  
  return (
    <>
      <ProviderTodo store={store}>
        <Layout>
          <h1>{mode}</h1>
        </Layout>
      </ProviderTodo>
    </>
  );
}

export default App;
