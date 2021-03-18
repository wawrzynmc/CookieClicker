import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { json } from 'body-parser';
import 'express-async-errors';


// -- internal imports
import { corsMiddleware } from './middlewares/cors.middleware';
import { morganMiddleware } from './middlewares/morgan.middleware';
import { NotFoundError } from './errors/not-found.error';
import { errorHandler } from './middlewares/error-handler.middleware';
import { cookieSessionMiddleware } from './middlewares/cookie-session.middleware';
import { usersRouter } from './routes/users/users.route';
import { achivementsRouter } from './routes/achivements/achivements.route';
// import { currentUserRouter } from './routes/current-user';

// -- config env path
dotenv.config({ path: path.join(__dirname, '.env') });

// * -- app
const app: express.Application = express();

// * -- middlewares
app.use(json());
app.use(morganMiddleware);
app.use(corsMiddleware);
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
