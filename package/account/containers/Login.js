/**
 * Created by chenlizan on 2017/6/18.
 */

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Login from '../views/Login';
import {electron_request_data_creator, submit_login_info_creator} from '../action/index';

function mapStateToProps(state) {
    return {
        loginInfo: state.Login.loginInfo,
        electron: state.Login.electron
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleSubmitLoginInfo: bindActionCreators(submit_login_info_creator, dispatch),
        handleElectronRequest: bindActionCreators(electron_request_data_creator, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
