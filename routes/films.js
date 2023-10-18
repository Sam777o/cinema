import {Router} from "express";
import FilmsController from '../controllers/FilmsController';
import validate from "../middlewares/validate.js";
import filmSchema from "../schema/filmsSchema.js";

const router = Router()

router.post(
    '/create',
    validate(filmSchema.create, 'body'),
    FilmsController.createFilm
)
router.delete(
    '/delete:id',
    validate(filmSchema.delete, 'params'),
    FilmsController.deleteFilm
)
// router.put(
//     '/update',
//     validate(filmSchema.update,['body,params']),
//     FilmsController.updateFilm
// )
// router.get(
//     '/get:id',
//     validate(filmSchema.get,'body,params'),
//     FilmsController.getSingleFilm,
// )
router.get(
    '/list',
    validate(filmSchema.getAll,'query'),
    FilmsController.getFilms
)

export default router
