import { check } from 'express-validator';

export const signupValidator = [
    check('email').normalizeEmail().isEmail().withMessage('Invalid email address.'),
    check('password').trim().notEmpty().withMessage('Invalid password'),
];

export const signinValidator = [
    check('email').normalizeEmail().isEmail().withMessage('Invalid email address.'),
    check('password').trim().notEmpty().withMessage('Invalid password'),
];
