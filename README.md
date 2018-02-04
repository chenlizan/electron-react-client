electron-react-client
=====================
A Electron desktop application. Built with Electron and React


目标做一个类似QQ的即时通讯软件

设计原则
react调用electron方法（异步或同步）用const {remote} = window.require('electron');

electron通过redux（dispatch action）回应react所调用的异步方法

