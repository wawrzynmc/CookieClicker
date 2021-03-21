// -- internal imports
import { app } from './app';
import { connectMongo } from './utils/connect-mongo';

// ---- booting
const start = async () => {
    // -- check if required env variables exist
    if (!process.env.JWT_KEY) {
        throw new Error(`'JWT_KEY' env variable must be defined`);
    }

    if (!process.env.MONGO_URI) {
        throw new Error(`'MONGO_URI' env variable must be defined`);
    }

    if (!process.env.CLIENT_URI) {
        throw new Error(`'CLIENT_URI' env variable must be defined`);
    }
    
    // -- connect to mongoDB
    await connectMongo();

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
};

start();
