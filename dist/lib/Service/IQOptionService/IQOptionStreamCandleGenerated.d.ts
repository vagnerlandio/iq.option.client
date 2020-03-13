/// <reference types="node" />
import { Readable } from "stream";
import * as Core from "../..";
import { IIQOptionStream } from "./Interface/IIQOptionStream";
import { IQOptionWs } from "./IQOptionWs";
/**
 * Stream candle generated.
 */
export declare class IQOptionStreamCandleGenerated extends Readable implements IIQOptionStream {
    /**
     * Socket.
     */
    private readonly iqOptionWS;
    /**
     * Market.
     */
    private readonly market;
    /**
     * Time.
     */
    private readonly time;
    /**
     * Constructor.
     *
     * @param iqOptionWS
     * @param market
     * @param time
     */
    constructor(iqOptionWS: IQOptionWs, market: Core.IQOptionMarket, time: Core.IQOptionTime);
    /**
     * Default read
     */
    _read(): void;
    /**
     * Start stream.
     */
    startStream(): Promise<void>;
    /**
     * Candle subscribe.
     */
    private subscribeCandle;
    /**
     * On message.
     *
     * @param message
     */
    private parseMessage;
}
