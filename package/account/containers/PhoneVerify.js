import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PhoneVerify from '../../components/Account/PhoneVerify';
import {save_forget_phone_action} from '../../action';

function mapStateToProps() {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleForgetPhone: bindActionCreators(save_forget_phone_action, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneVerify);