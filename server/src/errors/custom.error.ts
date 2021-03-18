export abstract class CustomError extends Error {
	abstract statusCode: number;

	constructor(message: string) {
		super(message);

		// relevant if a built in class is being extended
		Object.setPrototypeOf(this, CustomError.prototype);
	}

	abstract serializeErrors(): { message: string; field?: string }[];
}
