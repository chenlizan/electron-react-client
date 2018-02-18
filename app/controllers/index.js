import accountController from './accountController';

export default (app) => {
    app['API'] = {};
    app.API['accountController'] = accountController;
}
