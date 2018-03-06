import {DataTypes} from 'sequelize';

export default (sequelize) => {
    sequelize.define('friend',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            userId: { //用户UUID
                type: DataTypes.UUID,
                allowNull: false
            },
            friendId: { //好友UUID
                type: DataTypes.UUID,
                allowNull: false
            },
            user: { //好友账号
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            phone: { //用户手机号
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            nickName: { //用户昵称
                type: DataTypes.STRING,
                allowNull: true
            },
            note: { //备注
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            autoIncrement: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true,
            timestamps: true
        }
    );
}
