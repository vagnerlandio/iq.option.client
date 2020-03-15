/// <reference types="node" />
import { Readable } from "stream";
import * as Core from "../..";
import { IIQOptionStream } from "./Interface/IIQOptionStream";
import { IQOptionWs } from "./IQOptionWs";
/**
 * Stream candle generated.
 */
export declare class IQOptionStreamOptionClose extends Readable implements IIQOptionStream {
    /**
     * Socket.
     */
    private readonly iqOptionWS;
    /**
     * Market.
     */
    private readonly market;
    /**
     * Constructor.
     *
     * @param iqOptionWS
     * @param market
     */
    constructor(iqOptionWS: IQOptionWs, market: Core.IQOptionMarket);
    /**
     * Default read
     */
    _read(): void;
    /**
     * Start stream.
     */
    startStream(): Promise<void>;
    /**
     * On message.
     *
     * @param message
     */
    private parseMessage;
}
