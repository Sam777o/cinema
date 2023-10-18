import {DataTypes, Model} from "sequelize";
import sequelize from "../services/sequelize.js";
class Comments extends Model {

}

Comments.init(
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        text: {
            type: DataTypes.STRING(255),
        },
        answerCount: {
            type: DataTypes.BIGINT,
            defaultValue: 0,
            allowNull:false
        },
        rating: {
            type: DataTypes.TINYINT
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }

    },
    {
        sequelize,
        modelName:'comments',
        tableName:'comments',
        timestamps:false
    })


export default Comments
