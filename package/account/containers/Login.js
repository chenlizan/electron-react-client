/**
 * Created by chenlizan on 2017/6/18.
 */

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Login from '../components/Login';
import {electron_request_data_creator, submit_login_info_creator} from '../action/index';

function mapStateToProps(state) {
    return {
        account: state.Login.account
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleSubmitLoginInfo: bindActionCreators(submit_login_info_creator, dispatch),
        handleElectronRequest: bindActionCreators(electron_request_data_creator, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
