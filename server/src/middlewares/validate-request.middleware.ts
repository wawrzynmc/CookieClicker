import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

// -- internal imports
import { RequestValidationError } from '../errors/request-validation.error';

export const validateRequestMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // ---- body validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
    }

    next();
};
