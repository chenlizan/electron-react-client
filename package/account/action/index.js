/**
 * Created by chenlizan on 2017/6/21.
 */

import {createAction} from 'redux-actions';

export const electron_request_data_creator = createAction('ELECTRON_REQUEST');
export const electron_response_data_creator = createAction('ELECTRON_RESPONSE');

export const submit_login_info_creator = createAction('SUBMIT_LOGIN_INFO');
