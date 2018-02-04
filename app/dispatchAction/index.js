import {createAction} from "redux-actions";
import {bindActionCreators} from "redux";
import {configureStore} from "../store";

const store = configureStore();
export const electron_dispatch = bindActionCreators(createAction('ELECTRON_DISPATCH'), store.dispatch);
