import accountController from './accountController';
import contactController from './contactController';

export default (app) => {
    app['API'] = {};
    app.API['accountController'] = accountController;
    app.API['contactController'] = contactController;
}
