import {createAction} from "redux-actions";
import {bindActionCreators} from "redux";
import {configureStore} from "../store";

const store = configureStore();

export const electron_response_dispatch =bindActionCreators(createAction('ELECTRON_RESPONSE'), store.dispatch);
