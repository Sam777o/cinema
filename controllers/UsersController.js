import Users from "../models/Users";
import HttpError from "http-errors";
import Mail from "../services/Mail.js";
import { v4 as uuidV4 } from 'uuid';
import {where} from "sequelize";

class UsersController{
    static async createUser(req, res, next){
        try {
            const {
                firstName,
                lastName,
                email,
                password,
            } = req.body
            const hash = Users.passwordHash(password)
            const activationToken = uuidV4()
            const token = activationToken.replaceAll('-','')
            console.log(token,111)
            const user = await Users.create({
                firstName,
                lastName,
                email,
                password: hash,
                avatar: 'rere',
                token,
                status: 'pending'
            })
            await Mail.send(email, 'Account Activation', 'activation', {
                firstName,
                lastName,
                token,
                email})

            res.json({
                status:'ok',
                user
            })
        }catch (e){
            next(e)
        }
    }

    static deleteUser = async (req,res,next) =>{
        try {
            const { id } = req.params;
            const deletedRows = await Users.update(
                {
                    status:'deleted'
                },
                {
                where: {
                    id: +id
                }
            });

            if (deletedRows === 0) {
                throw HttpError(404);
            }

            res.json({
                status: 'ok'
            });
        }catch (e){
            next(e)
        }
}
    static updateUser = async (req, res, next) => {
        try {
            const { id } = req.params;
            const { firstName, lastName, password, avatar } = req.body;

            let hash ;
            if (password) {
                 hash = Users.passwordHash(password);
            }

            const [updatedRowsCount] = await Users.update(
                {
                    firstName: firstName,
                    lastName: lastName,
                    password: hash,
                    avatar: avatar,
                },
                {
                    where: {
                        id: +id,
                    },
                }
            );

            if (updatedRowsCount === 0) {
                return next(HttpError(404, "User not found"));
            }

            res.json({
                status: 'ok',
            });
        } catch (error) {
            next(error);
        }
    };
    static async getUser(req,res,next){
        try {
            const {id} = req.params
            const user = await  Users.findByPk({},{
                where: {id : +id}
            })
            res.json({
                user
            })
        }catch (e) {
            next(e)
        }
    }
    static async getAll(req,res,next){
        try {

            const {page,limit} = req.query
            const {count, rows} = await Users.findAndCountAll({
                limit,
                offset: page,

            })

            res.json({
                  users: rows,
                  total:count,

            })
        }catch (e) {
            next(e)
        }
    }
    static async activateUser(req,res,next){
        try{
            const {token} = req.query
            await Users.update({
                status: 'active'
            },{
                where: {
                    token
                }
            })
        }catch (e) {
            next(e)
        }
    }


}
export default UsersController
