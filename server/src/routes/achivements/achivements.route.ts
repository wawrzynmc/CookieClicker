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
import { currentUserMiddleware } from '../../middlewares/current-user.middleware';
import { requireAuthMiddleware } from '../../middlewares/require-auth.middleware';
import { requireAdminMiddleware } from '../../middlewares/required-admin.middleware';

// * -- ACHIVEMENT ROUTES
const router = Router();

router.get('/', getAchivementsController);
router.get('/:id', currentUserMiddleware, requireAuthMiddleware, getAchivementController);
router.get('/user/:id', currentUserMiddleware, requireAuthMiddleware, getUserAchivementsController);
router.post(
    '/',
    currentUserMiddleware,
    requireAuthMiddleware,
    requireAdminMiddleware,
    createAchivementController
);
router.patch('/:id', currentUserMiddleware, requireAuthMiddleware, updateAchivementController);
router.patch(
    '/user/:id',
    currentUserMiddleware,
    requireAuthMiddleware,
    manageUserAchivementsController
);
router.delete('/:id', currentUserMiddleware, requireAuthMiddleware, deleteAchivementController);

export { router as achivementsRouter };
