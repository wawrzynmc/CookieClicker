import express, { Request, Response } from 'express';
import morgan from 'morgan';
import { json } from 'body-parser';
import 'express-async-errors';

// import { errorHandler, NotFoundError } from '@kw-ticketing-app/common';

// -- internal imports
import { corsMiddleware } from './middlewares/cors.middleware';
import { morganMiddleware } from './middlewares/morgan.middleware';
import { NotFoundError } from './errors/not-found.error';
import { errorHandler } from './middlewares/error-handler.middleware';
import { cookieSessionMiddleware } from './middlewares/cookie-session.middleware';
import { userRouter } from './routes/users.route';
// import { currentUserRouter } from './routes/current-user';

// * -- app
const app: express.Application = express();

// * -- middlewares
app.use(json());
app.use(morganMiddleware);
app.use(corsMiddleware);
app.use(cookieSessionMiddleware);

// * -- routes
app.use('/api/users', userRouter);

app.all('*', (req: Request, res: Response) => {
    throw new NotFoundError();
});

// ---- error handler
app.use(errorHandler);

export { app };
