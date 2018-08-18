require("babel-polyfill");

require('babel-register')({
    presets: [['env', {'targets': {'electron': '2.0'}}], 'stage-0']
});

require('./app');
