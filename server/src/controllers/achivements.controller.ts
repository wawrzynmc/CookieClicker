import { Router } from 'express';

// * -- ACHIVEMENT ROUTES
const router = Router();

router.get('/');
router.get('/user');
router.get('/:id');
router.post('/');
router.patch('/:id');
router.delete('/:id');
