import { Request, Response, NextFunction } from 'express';
import { signinDto, signupDto } from '../dtos/users.dto';

export const currentUserController = async (req: Request, res: Response, next: NextFunction) => {
    res.send({currentUser: req.currentUser || null})
};

export const signupController = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body as signupDto;

    res.send('Signup');
};

export const signinController = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body as signinDto;

    res.send('Signin');
};

export const signoutController = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Signout');
};
