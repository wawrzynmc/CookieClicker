import { CustomError } from "./custom.error";

export class NotAuthorizedError extends CustomError {
	statusCode = 401;

	constructor() {
		super('Not authorized');

		// relevant if a built in class is being extended
		Object.setPrototypeOf(this, NotAuthorizedError.prototype);
	}

	serializeErrors() {
		return [{ message: 'Not authorized'}];
	}
}
