/**
 * IQOptionWrapper
 */
export declare class IQOptionWrapper {
    /**
     * Endpoint.
     */
    private readonly endpoint;
    /**
     * E-mail.
     */
    private readonly email;
    /**
     * Password.
     */
    private readonly password;
    /**
     * Client.
     */
    private readonly client;
    /**
     * Constructor;
     *
     * @param email
     * @param password
     */
    constructor(email: string, password: string);
    /**
     * Connect to api.
     */
    auth(): Promise<string>;
    /**
     * Http request.
     *
     * @param path
     * @param data
     */
    private request;
}
