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
import { validateRequestMiddleware } from '../../middlewares/validate-request.middleware';
import {
    createAchivementValidator,
    updateAchivementValidator,
    manageUserAchivementsValidator,
} from '../../validators/achivements.validator';

// * -- ACHIVEMENT ROUTES
const router = Router();

// ---- PUBLIC ROUTES
router.get('/', getAchivementsController);
router.get('/:id', currentUserMiddleware, getAchivementController);

// ---- AUTH ROUTES
router.get('/user', currentUserMiddleware, requireAuthMiddleware, getUserAchivementsController);

// ---- AUTH && ADMIN ROUTES
router.post(
    '/',
    currentUserMiddleware,
    requireAuthMiddleware,
    requireAdminMiddleware,
    createAchivementValidator,
    validateRequestMiddleware,
    createAchivementController
);
router.patch(
    '/:id',
    currentUserMiddleware,
    requireAuthMiddleware,
    requireAdminMiddleware,
    updateAchivementValidator,
    validateRequestMiddleware,
    updateAchivementController
);
router.patch(
    '/user/:id',
    currentUserMiddleware,
    requireAuthMiddleware,
    manageUserAchivementsValidator,
    validateRequestMiddleware,
    manageUserAchivementsController
);
router.delete(
    '/:id',
    currentUserMiddleware,
    requireAuthMiddleware,
    requireAdminMiddleware,
    deleteAchivementController
);

export { router as achivementsRouter };
