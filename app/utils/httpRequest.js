import promise from "bluebird";
import {statusInfo} from 'error-status-helper';
import request from 'request';

let TOKEN = '';

const httpRequest = (url, method = "GET", data = {}, contentType = 'application/json; charset=utf-8') => {
    return new promise((resolve, reject) => {
        request({
            headers: {
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
                "Authorization": 'Bearer ' + TOKEN
            },
            url: url,
            method: method,
            body: data,
            json: true
        }, function (error, response, body) {
            if (error) {//网络错误，api无法连接
                const error = {};
                error.body = statusInfo.Network_Error;
                error.status = 500;
                error.statusMessage = 'Network error';
                return reject(error);
            }
            else {//非网络错误，api逻辑或者程序报错
                if (response.statusCode === 200) {
                    if (body.result && body.result.token)
                        TOKEN = body.result.token;
                    return resolve(body);
                }
                else {
                    let error = {};
                    error.body = response.body;
                    error.error = true;
                    error.message = response.statusMessage;
                    error.status = response.statusCode;
                    return reject(error);
                }
            }
        });
    });
};

export const apiHttpRequest = (url, method, data) => {
    return httpRequest('http://localhost:4000' + url, method, data);
};
