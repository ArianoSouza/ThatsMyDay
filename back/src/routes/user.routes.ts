// src/routes/user.routes.ts
import { Router } from 'express';
import * as UserController from '../controllers/user.controller';

const router = Router();


router.post('/login', UserController.login);
router.get('/user/home', UserController.getAllTodayActivities)
router.post('/user/newActivitie', UserController.addNewActivitie)
router.delete('/user/deleteActivitie', UserController.removeActivitie)

export default router;