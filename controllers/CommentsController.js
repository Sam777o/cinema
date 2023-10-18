import Comments from "../models/Comments";
import HttpError from "http-errors";
import Users from "../models/Users.js";

class CommentsController {

    static async createComment (req, res, next) {
        try {
            const {text, userId, date} = req.body
            const data = new Date().toISOString()
            const comment = await Comments.create({
                text,
                userId,
                date:data
            })
            console.log(comment,456465465)
            res.json({
                status:'ok',
                comment
            })
            console.log(date)
        } catch (e) {
            next(e)
        }
    }
    static  async getComments  (req, res, next) {
        try {
            const comments = Comments.findAll()
            res.json({
                status:'ok',
                comments
            })
        }catch (e){
            next(e)
        }
        const {id} = req.query


    }
    static async updateComment  (req, res, next) {
        try {
            const {text, userId} = req.body
            const [updatedRowsCount] = await Users.update(
                {
                    text: text,

                },
                {
                    where: {
                        userId: userId,
                    },
                }
            );

            if (updatedRowsCount === 0) {
                return next(HttpError(404, "Comment not found"));
            }

            res.json({
                status:'ok'
            })

        }catch (e){
            next(e)
        }
    }
    static async deleteComment  (req, res, next) {
        try {
            const {id} = req.params
         const deletedRows = await Comments.destroy({
                where:{
                    id
                }
            })
            if (deletedRows === 0) {
                throw HttpError(404);
            }
        }catch (e){
            next(e)
        }
    }
}

export default CommentsController
