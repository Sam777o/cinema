import commentsSchema from "../schema/commentsSchema.js";
import {Router} from "express";
import validate from "../middlewares/validate.js";
import commentsController from "../controllers/CommentsController.js";

const router = Router()

router.post(
    '/create',
validate(commentsSchema.add, 'body'),
commentsController.createComment
)

router.patch(
    '/update',
    validate(commentsSchema.update, 'body'),
    commentsController.updateComment
)
router.delete(
    '/delete',
    validate(commentsSchema.delete, 'params'),
    commentsController.deleteComment
)
router.get(
    '/list',
    validate(commentsSchema.getAll, 'query'),
    commentsController.getComments
)

export default router
