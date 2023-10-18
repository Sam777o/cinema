import {DataTypes, Model} from "sequelize";
import sequelize from "../services/sequelize.js";

class Cards extends Model{

}
Cards.init({
    id:{
        type:DataTypes.BIGINT.UNSIGNED,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    cardNumber:{
        type: DataTypes.STRING(16),
        allowNull:false
    },
    expiration:{
        type:DataTypes.DATE,
        allowNull:false
    },
    securityCode:{
        type:DataTypes.STRING(3),
        allowNull:false
    }
},
    {
        sequelize,
        modelName: "cards",
        tableName: "cards",
        timestamps: false
    })

export default Cards
