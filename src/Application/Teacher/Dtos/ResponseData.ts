

export class ResponseData<T> {

    public readonly data: T | null;
    public readonly Errors: string[];
    public readonly StatusCode: number;

    constructor(data: T | null, statusCode: number = 200, errors: string[] = []) {
        this.data = data;
        this.StatusCode = statusCode;
        this.Errors = errors;
    }

    public static Success<T>(data: T | null, statusCode: number = 200): ResponseData<T> {
        return new ResponseData<T>(data, statusCode);
    }

    public static Error<T>(errors: string[], statusCode?: number): ResponseData<T>;
    public static Error<T>(error: string, statusCode?: number): ResponseData<T>;
    
    public static Error<T>(errorOrErrors: string | string[], statusCode: number = 400): ResponseData<T> {
        const errors = Array.isArray(errorOrErrors) ? errorOrErrors : [errorOrErrors];
        return new ResponseData<T>(null, statusCode, errors);
    }
}