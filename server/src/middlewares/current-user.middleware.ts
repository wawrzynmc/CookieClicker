import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserRoles } from '../models/user.model';

interface UserPayload {
    id: string;
    email: string;
    role: UserRoles;
}

// -- extend existing Request type by creating the same interface
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}

// -- that middleware is connected with require-auth
export const currentUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session?.jwt) {
        return next();
    }

    try {
        const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
        req.currentUser = payload;
    } catch (err) {}

    next();
};
