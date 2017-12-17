import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PhoneRegister from '../../components/Account/PhoneRegister';
import {save_register_phone_action} from '../../action';

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        handleSaveRegisterPhone: bindActionCreators(save_register_phone_action, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneRegister);