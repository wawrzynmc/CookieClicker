import { Router } from 'express';

// -- internal imports
import {
    currentUserController,
    signinController,
    signoutController,
    signupController,
} from '../../controllers/users.controller';
import { currentUserMiddleware } from '../../middlewares/current-user.middleware';
import { validateRequestMiddleware } from '../../middlewares/validate-request.middleware';
import { signinValidator, signupValidator } from '../../validators/users.validator';

// * -- USER ROUTES
const router = Router();

router.get('/', currentUserMiddleware, currentUserController)
router.post('/signup', signupValidator, validateRequestMiddleware, signupController);
router.post('/signin', signinValidator, validateRequestMiddleware, signinController);
router.post('/signout', signoutController);
// rotuter.post('/:id/achivements')

export { router as usersRouter };
