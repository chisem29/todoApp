import store from "../../store";
type appDispatchT = () => typeof store.dispatch;
export default appDispatchT;
