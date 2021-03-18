import * as dotenv from 'dotenv';
import * as path from 'path';
import cookieSession from "cookie-session";

// -- config env path
dotenv.config({ path: path.join(__dirname, '../.env') });

export const cookieSessionMiddleware = cookieSession({
    secure: process.env.NODE_ENV !== 'development', // if true (in prod) cookie will be used only if user visit page in https
    signed: false, // disable cookie hashing
});
