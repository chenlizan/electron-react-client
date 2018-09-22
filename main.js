require("babel-polyfill");

require('babel-register')({
    presets: [['env', {'targets': {'electron': '3.0'}}], 'stage-0']
});

require('./app');
