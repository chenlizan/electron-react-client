// webpack.config.js
const glob = require('glob');

const webpackConfig = {
    /* 一些webpack基础配置 */
};

// 获取指定路径下的入口文件
function getEntries(globPath) {
    const files = glob.sync(globPath),
        entries = {};

    files.forEach(function(filepath) {
        // 取倒数第二层(view下面的文件夹)做包名
        var split = filepath.split('/');
        var name = split[split.length - 2];

        entries[name] = './' + filepath;
    });

    return entries;
}

var entries = getEntries('package/*/index.jsx');

Object.keys(entries).forEach(function(name) {
    // 每个页面生成一个entry，如果需要HotUpdate，在这里修改entry
})