import request from 'supertest';
import { app } from '../../../app';

// -- consts
const signupURI = '/api/v1/users/signup';

// * --------------------- TESTS ---------------------
describe('successful requests', () => {
    it('returns a 201 after successful signup', async () => {
        await request(app)
            .post(signupURI)
            .send({
                email: 'test@test.com',
                password: 'password',
            })
            .expect(201);
    });
});

describe('unsuccessful requests', () => {
    it('returns a 400 - invalid email has been provided', async () => {
        await request(app)
            .post(signupURI)
            .send({
                email: 'invalid@email',
                password: 'password',
            })
            .expect(400);
    });

    it('returns a 400 - invalid password has been provided', async () => {
        await request(app)
            .post(signupURI)
            .send({
                email: 'test@test.com',
                password: 'p',
            })
            .expect(400);
    });

    it('returns a 400 - missing email and password', async () => {
        await request(app)
            .post(signupURI)
            .send({
                email: 'test@test.com',
            })
            .expect(400);

        await request(app)
            .post(signupURI)
            .send({
                password: 'password',
            })
            .expect(400);
    });

    it('returns a 400 - disallows emails duplication', async () => {
        await request(app)
            .post(signupURI)
            .send({
                email: 'test@test.com',
                password: 'password',
            })
            .expect(201);

        await request(app)
            .post(signupURI)
            .send({
                email: 'test@test.com',
                password: 'password',
            })
            .expect(400);
    });
});
