import { check } from 'express-validator';

export const signupValidator = [
    check('email').normalizeEmail().isEmail().withMessage('Invalid email address.'),
    check('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must has at least 4 characters'),
];

export const signinValidator = [
    check('email').normalizeEmail().isEmail().withMessage('Invalid email address.'),
    check('password').trim().notEmpty().withMessage('Invalid password'),
];
