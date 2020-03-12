/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as Core from "../../index";
import { IQOptionWrapper } from "./IQOptionWrapper";
import { IQOptionWs } from "./IQOptionWs";
import {iqOptionExpired} from "./IQOptionExpired";

/**
 * IQOption api.
 */
export class IQOptionApi {
    /**
     * IQ option wrapper.
     */
    private readonly iqOptionWrapper: IQOptionWrapper;

    /**
     * IQ Option WS.
     */
    private readonly iqOptionWs: IQOptionWs;

    /**
     * IQOption API.
     *
     * @param email
     * @param password
     */
    constructor(email: string, password: string) {
        Core.logger().silly("IQOptionApi::constructor");
        this.iqOptionWrapper = new IQOptionWrapper(email, password);
        this.iqOptionWs = new IQOptionWs();
    }

    /**
     * Connect async.
     */
    public connectAsync(): Promise<void> {
        Core.logger().silly("IQOptionApi::connectAsync");
        return this.iqOptionWrapper
            .auth()
            .then(token => {
                return this.iqOptionWs
                    .connect()
                    .then(() =>
                        this.iqOptionWs.send(Core.IQOptionName.SSID, token)
                    )
                    .then(() => Promise.resolve())
                    .catch(e => Promise.reject(e));
            })
            .catch(e => Promise.reject(e));
    }

    /**
     * Get iq option ws.
     */
    public getIQOptionWs(): IQOptionWs {
        return this.iqOptionWs;
    }

    /**
     * Send order.
     *
     * @param market
     * @param side
     * @param time
     * @param amount
     */
    public sendOrderBinary(
        market: Core.IQOptionMarket,
        side: Core.IQOptionModel,
        time: Core.IQOptionTime,
        amount: number
    ): Promise<void> {
        Core.logger().info(`IQOptionApi::sendOrder`, {market, side, time, amount});
        return this.iqOptionWs.send(Core.IQOptionName.SEND_MESSAGE, {
            user_balance_id: 86332727, // todo
            active_id: market,
            option_type_id: 3, // todo
            direction: side,
            expired: iqOptionExpired(time),
            refund_value: 0, // todo
            price: amount,
            profit_percent: 55 // todo
        });
    }
}
