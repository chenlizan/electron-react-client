/**
 * Created by chenlizan on 2017/6/21.
 */

import {createAction} from 'redux-actions';

export const electron_dispatch_action = createAction('ELECTRON_DISPATCH');

export const submit_data_sync_action = createAction('SUBMIT_DATA_SYNC');

/**
 * Account
 */
export const save_forget_phone_action = createAction('SAVE_FORGET_PHONE');

export const save_register_phone_action = createAction('SAVE_REGISTER_PHONE');

export const submit_change_password_action = createAction('SUBMIT_CHANGE_PASSWORD');

export const submit_login_info_action = createAction('SUBMIT_LOGIN_INFO');

export const submit_register_info_action = createAction('SUBMIT_REGISTER_INFO');

export const change_password_visible = createAction('CHANGE_PASSWORD_VISIBLE');

export const change_user_email = createAction('CHANGE_USER_EMAIL');

export const change_user_password = createAction('CHANGE_USER_PASSWORD');
