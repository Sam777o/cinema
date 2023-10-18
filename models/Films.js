import {DataTypes, Model} from "sequelize";
import sequelize from "../services/sequelize";
import Comments from "./Comments.js";

class Films extends Model {

}

Films.init(
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING
        },
        writer: {
            type: DataTypes.STRING
        },
        year: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        ageLimit: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        duration: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        trailerPath: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ticketStatus: {
            type: DataTypes.ENUM("available", "reserved", "selected"),
            default: 'available'
        },
        photo:{
            type:DataTypes.STRING,
            allowNull:false
        },
        language:{
            type:DataTypes.STRING(20),
            allowNull:false,
        }
    },
    {
        sequelize,
        modelName: "films",
        tableName: "films",
        timestamps: false
    }
);
Comments.belongsTo(Films, {
    foreignKey: 'commentId',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    as: 'films'
});
Films.hasMany(Comments, {
    foreignKey: 'commentId',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    as: 'comments'
});

export default Films;
