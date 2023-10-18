import Films from "../models/Films";
import HttpError from "http-errors";
class FilmsController {


    static async createFilm(req, res, next)  {
        try {
            const {
                name,
                description,
                writer,
                year,
                genre,
                country,
                rating,
                age_limit,
                duration,
                trailer_path,
                ticket_status
            } = req.body
            const film = await Films.create({
                name,
                description,
                writer,
                year,
                genre,
                country,
                rating,
                age_limit,
                duration,
                trailer_path,
                ticket_status
            });
            res.json({
                film
            });

        } catch (e) {
            next(e)
        }
    }
    static async getFilms(req, res, next) {
        try {
            const films = await Films.findAll({

            });
            res.json({
                status:'ok',
                films
            });
        }catch (e){
            next(e)
        }
    }
    static async deleteFilm  (req, res, next) {
        try {
            const {id} =req.params
            const deleted = await Films.destroy({
                where: {
                    id: +id
                }
            })
            if (!deleted) {
                throw HttpError(404);
            }
            res.json({
                status:'ok'
            })
        }catch (e){
            next(e)
        }
    }
}

export default FilmsController;
