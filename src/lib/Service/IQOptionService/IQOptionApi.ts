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
     * Subscribe candle.
     *
     * @param market
     * @param time
     */
    public subscribeCandle(
        market: Core.IQOptionMarket,
        time: Core.IQOptionTime
    ): Promise<void> {
        Core.logger().silly("IQOptionApi::subscribeCandle");
        if (this.iqOptionWs.isConnected()) {
            return Promise.reject("Socket is not connected.");
        }
        const message = {
            name: Core.IQOptionAction.CANDLE_GENERATED,
            params: { routingFilters: { active_id: market, size: time } }
        };
        return Promise.resolve(
            this.iqOptionWs.send(Core.IQOptionName.SUBSCRIBE_MESSAGE, message)
        );
    }
}
