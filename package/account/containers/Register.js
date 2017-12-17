import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import register from '../../components/Account/Register';
import {submit_register_info_action} from '../../action';

function mapStateToProps(state) {
    return {
        electron: state.Home.electron,
        registerInfo: state.Account.registerInfo,
        registerPhone: state.Account.registerPhone
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleSubmitRegisterInfo: bindActionCreators(submit_register_info_action, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(register);