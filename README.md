# electron-react-client
A Electron desktop application. Built with Electron and React

目标做一个类似QQ的即时通讯软件

# 设计原则
调用electron同步方法用const {remote} = window.require('electron');
调用electron异步方法用bindActionCreators
