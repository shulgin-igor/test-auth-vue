export class ServerError extends Error {
    constructor(code) {
        super();
        this.code = code;
    }
}
