import * as Core from "../..";
import { IQOptionWs } from "./IQOptionWs";
/**
 * IQOption api.
 */
export declare class IQOptionApi {
    /**
     * Max wait profile response.
     */
    private readonly maxWaitProfile;
    /**
     * Max wait profile response.
     */
    private readonly maxWaitToSendOrder;
    /**
     * Request ID.
     */
    private requestID;
    /**
     * IQ option wrapper.
     */
    private readonly iqOptionWrapper;
    /**
     * IQ Option WS.
     */
    private readonly iqOptionWs;
    /**
     *  Queue order send.
     */
    private readonly orderPlacementQueue;
    /**
     * IQOption API.
     *
     * @param email
     * @param password
     */
    constructor(email: string, password: string);
    /**
     * Connect async.
     */
    connectAsync(): Promise<Core.IQOptionProfile>;
    /**
     * Get iq option ws.
     */
    getIQOptionWs(): IQOptionWs;
    /**
     * Wait to get user profile.
     */
    profileAsync(): Promise<Core.IQOptionProfile>;
    /**
     * Send order.
     *
     * @param market
     * @param side
     * @param time
     * @param userBalanceId
     * @param profitPercent
     * @param amount
     */
    sendOrderBinary(market: Core.IQOptionMarket, side: Core.IQOptionModel, time: Core.IQOptionTime, userBalanceId: number, profitPercent: number, amount: number): Promise<Core.IQOptionOptionOpened>;
    /**
     * Get instruments.
     *
     * @param market
     * @param instrumentType
     */
    getInstruments(market: Core.IQOptionMarket, instrumentType: Core.IQOptionInstrumentType): Promise<any>;
    /**
     * Get initialization data.
     */
    getInitializationData(): Promise<unknown>;
    /**
     * Get next request id.
     */
    getNextRequestID(): number;
}
