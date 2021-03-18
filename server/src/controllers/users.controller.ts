import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// -- internal imports
import { signinDto, signupDto } from '../dtos/users.dto';
import { BadRequestError } from '../errors/bad-request.error';
import { User } from '../models/user.model';
import { Password } from '../utils/password';

// * -- CONTROLLERS
export const currentUserController = async (req: Request, res: Response, next: NextFunction) => {
    res.send({ currentUser: req.currentUser || null });
};

export const signupController = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body as signupDto;

    // -- check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new BadRequestError('User with that email already exists');
    }

    // -- create user
    const user = User.build({ email, password });
    await user.save();

    // -- generate JWT
    const userJwt = jwt.sign(
        {
            id: user.id,
            email: user.email,
        },
        process.env.JWT_KEY!
    );

    // -- store JWT in session object
    req.session = {
        jwt: userJwt,
    };

    res.status(201).send(user);
};

export const signinController = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body as signinDto;

    // -- check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        throw new BadRequestError('Invalid credentials');
    }

    // -- compare password
    const passwordsMatch = await Password.compare(existingUser.password, password);
    if (!passwordsMatch) {
        throw new BadRequestError('Invalid credentials');
    }

    // -- generate JWT
    const userJwt = jwt.sign(
        {
            id: existingUser.id,
            email: existingUser.email,
        },
        process.env.JWT_KEY!
    );

    // -- store JWT in session object
    req.session = {
        jwt: userJwt,
    };

    res.status(200).send(existingUser);
};

export const signoutController = async (req: Request, res: Response, next: NextFunction) => {
    // -- null cookie
    req.session = null;

    res.send({});
};
