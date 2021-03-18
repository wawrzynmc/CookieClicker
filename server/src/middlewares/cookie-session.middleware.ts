import cookieSession from "cookie-session";

export const cookieSessionMiddleware = cookieSession({
    secure: process.env.NODE_ENV !== 'development', // if true (in prod) cookie will be used only if user visit page in https
    signed: false, // disable cookie hashing
});
