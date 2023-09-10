
import ProviderTodo from "./providers/ProviderTodo";
import Layout from "./components/layout/Layout";

import store from "./store"

import "./App.less";
import Main from "./components/layout/main/Main";

const App = () => {
  
  return (
    <>
      <ProviderTodo store={store}>
        <Layout>
          <Main />
        </Layout>
      </ProviderTodo>
    </>
  );
}

export default App;
