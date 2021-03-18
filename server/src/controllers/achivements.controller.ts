import { Request, Response, NextFunction } from 'express';

export const getAchivementsController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.send('Return all achivements');
};

export const getAchivementController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.send('Return achivement');
};

export const getUserAchivementsController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.send('Return all achivements');
};

export const createAchivementController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.send('Achivement created');
};

export const manageUserAchivementsController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.send('User achivements added');
};

export const updateAchivementController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.send('Achivement updated');
};

export const deleteAchivementController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.send('Achivement deleted');
};