/**
 * Created by chenlizan on 2017/9/6.
 */

require("babel-polyfill");

require('babel-register')({
    presets: ['es2015', 'stage-0']
});

require('./app');
