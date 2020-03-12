import * as Core from "../..";
import { IQOptionWrapper } from "./IQOptionWrapper";

export class IQOptionApi {
    /**
     * IQ option wrapper.
     */
    private readonly iqOptionWrapper: IQOptionWrapper;

    /**
     * IQOption API.
     *
     * @param email
     * @param password
     */
    constructor(email: string, password: string) {
        this.iqOptionWrapper = new IQOptionWrapper(email, password);
    }

    /**
     * Connect async.
     */
    public connectAsync(): Promise<void> {
        return this.iqOptionWrapper
            .auth()
            .then()
            .then(() => {})
            .catch(e => Promise.reject(e));
    }
}
