import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';

export const morganMiddleware = morgan('dev');

