import { useDispatch } from "react-redux";

import appDispatchT from "../shared/types/appDispatch";

const useAppDispatch: appDispatchT = useDispatch;

export default useAppDispatch;
