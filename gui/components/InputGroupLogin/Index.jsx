import React from 'react';
import PropTypes from 'prop-types';
import InputAccount from './InputAccount';
import InputPassword from './InputPassword';
import styles from './assets/InputGroupLogin.less';

export default class Index extends React.Component {

    render(){

        const accountList = [
            {
                account: "903949",
                name: "陈明亮",
                image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            },
            {
                account: "444067326",
                name: "本拉登",
                image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            },
            {
                account: "616028858",
                name: "一直很贵，除了今天少时诵诗书所所所所所所所",
                image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            },
            {
                account: "124458019",
                name: "熊高",
                image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            },

        ];

        return (
                <div className={styles['InputGroupLogin']}>
                    <InputAccount data={accountList} />
                    <InputPassword />
                </div>
            )
    }
}