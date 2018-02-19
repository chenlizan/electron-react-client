import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {routes} from './routes/index'
import {configureStore} from './store';
import './stylesheets/index.css';
import '../../../node_modules/antd/dist/antd.min.css';
import '../../assets/style/iconfont.css'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root')
);
