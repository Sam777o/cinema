import { DataTypes, Model } from "sequelize";
import sequelize from "../services/sequelize.js";
import md5 from 'md5'


class Users extends Model {
    static passwordHash = (password) => md5(md5(password) + 'gdryydtfj5yyrd')
}

Users.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.CHAR,
        allowNull: false,
        unique: true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        get(){
            return undefined
        }
    },
    avatar:{
        type:DataTypes.STRING(255),
        allowNull:true
    },
    token:{
        type:DataTypes.STRING(32)
    },
    status:{
        type:DataTypes.ENUM('active', 'pending', 'deleted'),
        defaultValue:'pending',
        allowNull:false,
    },
    role:{
        type:DataTypes.ENUM( 'user', 'admin'),
        defaultValue:'user',
        allowNull:false,
    }
}, {
    sequelize,
    tableName: 'users',
    modelName: 'users',
    timestamps: false,
})


export default Users;
