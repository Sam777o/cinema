import {DataTypes, Model} from "sequelize";
import sequelize from "../services/sequelize.js";
import Users from "./Users.js";
import Comments from "./Comments.js";
class UsersCommentsRel extends Model{

}

UsersCommentsRel.init({
    id:{
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    }

},{
    sequelize,
    tableName: 'usersCommentsRel',
    modelName: 'usersCommentsRel',
    timestamps: false,
})

UsersCommentsRel.belongsTo(Comments, {
    foreignKey: 'commentId',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    as: 'comments'
});

UsersCommentsRel.belongsTo(Users, {
    foreignKey: 'userId',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    as: 'users'
});

Users.hasMany(UsersCommentsRel, {
    foreignKey: 'userId',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    as: 'comments'
});

Comments.hasMany(UsersCommentsRel, {
    foreignKey: 'commentId',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    as: 'comments'
});
export default UsersCommentsRel
