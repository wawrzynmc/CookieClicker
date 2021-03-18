import { check } from 'express-validator';

export const signupValidator = [
    check('email').normalizeEmail().isEmail().withMessage('Invalid email address.'),
    check('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must be between 4 and 20 characters'),
];

export const signinValidator = [
    check('email').normalizeEmail().isEmail().withMessage('Invalid email address.'),
    check('password').trim().notEmpty().withMessage('Invalid password'),
];
