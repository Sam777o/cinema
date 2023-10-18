import {Router} from "express";
import CardsController from '../controllers/CardsController';
import validate from "../middlewares/validate.js";
import cardsSchema from "../schema/cardsSchema";

const router = Router()

router.post(
    '/add',
    validate(cardsSchema.addCard, 'body'),
    CardsController.addCard
)
router.get(
    '/get:id',
    CardsController.getCard
)
router.delete(
    '/delete:id',
    CardsController.deleteCard
)
export default router
