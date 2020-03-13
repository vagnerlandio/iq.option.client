import * as Core from "../../index";
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
     * @param amount
     */
    sendOrderBinary(market: Core.IQOptionMarket, side: Core.IQOptionModel, time: Core.IQOptionTime, userBalanceId: number, profitPercent: number, amount: number): Promise<Core.IQOptionOptionOpened>;
}