import Cards from "../models/Cards.js";
import Users from "../models/Users.js";
import HttpError from "http-errors";

class CardsController{
    static async addCard(req,res,next){
        try{
            const {cardNumber,expiration,securityCode} = req.body

            const data =  await Cards.create({
                cardNumber,
                expiration,
                securityCode,
                include:[{model: Users,as:'user'}]
            })
            res.json(data)
        }catch (e) {
            next(e)
        }

    }
    static async getCard(req,res,next){
        try {
            const {id} =req.params

            await Cards.findByPk({
                include: [{model: Users,as : 'userId'}]
            },{
                where : {
                    id: +id
                }})
        }catch (e) {
            next(e)
        }
    }
    static async deleteCard(req,res,next){
        try {
            const {id} = req.params
            const deleted = await Cards.destroy({
                where: {
                    id : +id
                }
            })
            if (!deleted) {
                throw HttpError(404);
            }
        }catch (e) {
            next(e)
        }
    }
}

export default CardsController
