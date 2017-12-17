//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../components/Account/Header';
//import {save_login_info_creator} from '../action';

function mapStateToProps(state) {
    return {
        //account: state.Login.account
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //handleSaveLoginInfo: bindActionCreators(save_login_info_creator, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);