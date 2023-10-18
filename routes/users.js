import {Router} from "express";
import UsersController from "../controllers/UsersController";
import validate from "../middlewares/validate";
import usersSchema from "../schema/usersSchema";
const router = Router()

router.post(
    '/create',
    validate(usersSchema.create, 'body'),
    UsersController.createUser
)
router.delete(
    '/delete/:id',
    validate(usersSchema.delete, 'params'),
    UsersController.deleteUser
)

router.put(
    '/update/:id',
    validate(usersSchema.update, ['params', 'body']),
    UsersController.updateUser
)

router.get(
    '/get/:id',
    validate(usersSchema.get, 'params'),
    UsersController.getUser
)
router.get(
    '/list',
    validate(usersSchema.getAll, 'query'),
    UsersController.getAll
)
export default router
