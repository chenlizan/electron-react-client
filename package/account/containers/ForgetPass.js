import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ForgetPass from '../../components/Account/ForgetPass';
import {submit_change_password_action} from '../../action';

function mapStateToProps(state) {
    return {
        forgetPhone: state.Account.forgetPhone,
        electron:state.Home.electron
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleSubmitChangPassword: bindActionCreators(submit_change_password_action, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPass);