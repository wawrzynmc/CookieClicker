import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { json } from 'body-parser';
import cors from 'cors';
import 'express-async-errors';

// -- internal imports
import { morganMiddleware } from './middlewares/morgan.middleware';
import { NotFoundError } from './errors/not-found.error';
import { errorHandler } from './middlewares/error-handler.middleware';
import { cookieSessionMiddleware } from './middlewares/cookie-session.middleware';
import { usersRouter } from './routes/users/users.route';
import { achivementsRouter } from './routes/achivements/achivements.route';

// -- config env path
dotenv.config({ path: path.join(__dirname, '.env') });

// * -- app
const app: express.Application = express();

// * -- middlewares
app.use(json());
app.use(morganMiddleware);
app.use(cors({
    origin: process.env.CLIENT_URI,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true
}));
app.use(cookieSessionMiddleware);

// * -- routes
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/achivements', achivementsRouter);

app.all('*', (req: Request, res: Response) => {
    throw new NotFoundError();
});

// ---- error handler
app.use(errorHandler);

export { app };
