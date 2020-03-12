/**
 * Default stream interface.
 */
export interface IIQOptionStream {
    /**
     * Start stream.
     */
    startStream(): Promise<void>;
}
