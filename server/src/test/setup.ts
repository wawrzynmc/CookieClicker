import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';

// -- internal imports
import { app } from '../app';

// * -- SETTINGS
let mongo: any;

beforeAll(async () => {
    // -- connect to the db
    process.env.JWT_KEY = 'secret-key';
    process.env.NODE_ENV = 'development';

    mongo = new MongoMemoryServer();
    const mongoUri = await mongo.getUri();

    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

beforeEach(async () => {
    // -- clear the db
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
        await collection.deleteMany({});
    }
});

afterAll(async () => {
    // -- stop the db connection
    await mongo.stop();
    await mongoose.connection.close();
});

// * -- HELPER FUNCTIONALITIES

// -- define helper functionalities interfaces
declare global {
    namespace NodeJS {
        interface Global {
            signup(): Promise<string[]>;
        }
    }
}

// -- create global helper functions
global.signup = async () => {
    const email = 'test@test.com';
    const password = 'password';

    const response = await request(app)
        .post('/api/v1/users/signup')
        .send({
            email,
            password,
        })
        .expect(201);

    const cookie = response.get('Set-Cookie');

    return cookie;
};
