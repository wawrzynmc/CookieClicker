import { check } from 'express-validator';
import { ManageUserAchivementActions } from '../dtos/achivements.dto';

export const createAchivementValidator = [
    check('title').trim().notEmpty().withMessage('Title cannot be empty.'),
    check('description')
        .trim()
        .isLength({ min: 5 })
        .withMessage('Description must has at least 5 characters'),
    check('points').isInt({ min: 0 }).withMessage('Points have to be greater then 0'),
    check('level').isInt({ min: 0 }).withMessage('Level has to be greater then 0'),
];

export const updateAchivementValidator = [
    check('title').optional().trim().notEmpty().withMessage('Title cannot be empty.'),
    check('description')
        .optional()
        .trim()
        .isLength({ min: 5 })
        .withMessage('Description must has at least 5 characters'),
    check('points').optional().isInt({ min: 0 }),
    check('level').optional().isInt({ min: 0 }),
];

export const manageUserAchivementsValidator = [
    check('action').isIn(Object.values(ManageUserAchivementActions)).withMessage('Invalid action'),
    check('achivementsIds').isArray({ min: 1 }),
    check('achivementsIds.*').trim().isString(),
];
