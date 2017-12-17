/**
 * Created by chenlizan on 2017/6/18.
 */

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Login from '../../components/Account/Login';
import {submit_login_info_action} from '../../action';

function mapStateToProps(state) {
    return {
        electron: state.Home.electron
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleSubmitLoginInfo: bindActionCreators(submit_login_info_action, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);