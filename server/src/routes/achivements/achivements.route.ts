import { Router } from 'express';
import {
    manageUserAchivementsController,
    getAchivementController,
    getAchivementsController,
    getUserAchivementsController,
    updateAchivementController,
    deleteAchivementController,
    createAchivementController,
} from '../../controllers/achivements.controller';
import { requireAuthMiddleware } from '../../middlewares/require-auth.middleware';

// * -- ACHIVEMENT ROUTES
const router = Router();

router.get('/', getAchivementsController);
router.get('/:id', requireAuthMiddleware, getAchivementController);
router.get('/user/:id', requireAuthMiddleware, getUserAchivementsController);
router.post('/', requireAuthMiddleware, createAchivementController);
router.patch('/:id', requireAuthMiddleware, updateAchivementController);
router.patch('/user/:id', requireAuthMiddleware, manageUserAchivementsController);
router.delete('/:id', requireAuthMiddleware, deleteAchivementController);

export { router as achivementsRouter };