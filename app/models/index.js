import fs from 'fs';
import Sequelize from 'sequelize';

if (!require('fs').existsSync(fs.realpathSync(process.cwd()) + '/db'))
    require('fs').mkdirSync(fs.realpathSync(process.cwd()) + '/db');

const sequelize = new Sequelize('core', 'core', '123456', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    storage: fs.realpathSync(process.cwd()) + '/db/database.sqlite'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

require('./friend').default.bind(null, sequelize)();

sequelize.sync();

export default sequelize;
