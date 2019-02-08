import React from 'react';
import classNames from "classnames";
import IconFont from "../IconFont";

export default class InputPassword extends React.PureComponent {
    render() {
        const {prefixCls} = this.props;
        return (
            <div className={classNames(`${prefixCls}-password`)}>
                <div>
                    <input placeholder="密码" type="password"/><IconFont type="electron-keyboard"/>
                </div>
            </div>
        )
    }
}