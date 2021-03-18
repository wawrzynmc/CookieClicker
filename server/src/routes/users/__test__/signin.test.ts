import request from 'supertest';
import { app } from '../../app';

it('returns a 400 with invalid email', async () => {
	await request(app)
		.post('/api/users/signin')
		.send({
			email: 'invalid@email',
			password: 'password',
		})
		.expect(400);
});

it('returns a 400 with invalid password', async () => {
	await request(app)
		.post('/api/users/signin')
		.send({
			email: 'test@test.com',
			password: 'p',
		})
		.expect(400);
});

it('returns a 400 with missing email and password', async () => {
	await request(app)
		.post('/api/users/signin')
		.send({
			email: 'test@test.com',
		})
		.expect(400);

	await request(app)
		.post('/api/users/signin')
		.send({
			password: 'password',
		})
		.expect(400);
});

it('returns a 400 when a email that does not exist is supplied', async () => {
	await request(app)
		.post('/api/users/signin')
		.send({
			email: 'wrong@test.com',
			password: 'password',
		})
		.expect(400);
});

it('returns a 400 when an incorrect password is supplied', async () => {
	await request(app)
		.post('/api/users/signup')
		.send({
			email: 'test@test.com',
			password: 'password',
		})
		.expect(201);

	await request(app)
		.post('/api/users/signin')
		.send({
			email: 'test@test.com',
			password: 'wrongpassword',
		})
		.expect(400);
});

it('responds with a cookie when given valid credentials', async () => {
	await request(app)
		.post('/api/users/signup')
		.send({
			email: 'test@test.com',
			password: 'password',
		})
		.expect(201);

	const response = await request(app)
		.post('/api/users/signin')
		.send({
			email: 'test@test.com',
			password: 'password',
		})
		.expect(200);

	expect(response.get('Set-Cookie')).toBeDefined();
});
