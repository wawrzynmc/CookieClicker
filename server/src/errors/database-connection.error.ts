import { CustomError } from "./custom.error";

export class DatabaseConnectionError extends CustomError {
	statusCode = 500;
	reason = 'Error connecting to database';

	constructor() {
		super('Error connecting to db');

		// relevant if a built in class is being extended
		Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
	}

	serializeErrors() {
		return [{ message: this.reason }];
	}
}
