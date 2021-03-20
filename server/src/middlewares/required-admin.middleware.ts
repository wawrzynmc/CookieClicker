import { NextFunction, Request, Response, Router } from 'express';
import { User, UserRoles } from '../models/user.model';
import mongoose from 'mongoose';
import { NotAuthorizedError } from '../errors/not-authorized.error';

export const requireAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.currentUser?.role;

    if (userRole !== UserRoles.ADMIN) {
        throw new NotAuthorizedError();
    }

    next();
};
