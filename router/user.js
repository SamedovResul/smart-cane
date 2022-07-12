import express from "express";
import {userGet,userPost} from '../controller/userController.js'

const router = express.Router()


router.post('/', userPost);
router.get('/', userGet);

export default router