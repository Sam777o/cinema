import {Router} from "express";
import films from './films';
import users from './users';
import comments from "./comments";

const router = Router();

router.use('/films', films);
router.use('/users', users);
router.use('/comments',comments)

export default router
