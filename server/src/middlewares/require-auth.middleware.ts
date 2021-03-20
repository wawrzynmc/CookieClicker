import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized.error';

// -- this middleware is basing on logic inside currentUser middleware
export const requireAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (!req.currentUser) {
        throw new NotAuthorizedError();
    }

    next();
};
