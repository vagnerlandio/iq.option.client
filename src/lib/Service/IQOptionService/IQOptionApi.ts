/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import Bottleneck from "bottleneck";
import * as Core from "../..";
import { iqOptionExpired } from "./IQOptionExpired";
import { IQOptionWrapper } from "./IQOptionWrapper";
import { IQOptionWs } from "./IQOptionWs";

/**
 * IQOption api.
 */
export class IQOptionApi {
    /**
     * Max wait profile response.
     */
    private readonly maxWaitProfile = 5000;

    /**
     * Max wait profile response.
     */
    private readonly maxWaitToSendOrder = 5000;

    /**
     * IQ option wrapper.
     */
    private readonly iqOptionWrapper: IQOptionWrapper;

    /**
     * IQ Option WS.
     */
    private readonly iqOptionWs: IQOptionWs;

    /**
     *  Queue order send.
     */
    private readonly orderPlacementQueue = new Bottleneck({
        maxConcurrent: 1,
        minTime: 1
    });

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
    public connectAsync(): Promise<Core.IQOptionProfile> {
        Core.logger().silly("IQOptionApi::connectAsync");
        return this.iqOptionWrapper
            .auth()
            .then(token => {
                return this.iqOptionWs
                    .connect()
                    .then(() =>
                        this.iqOptionWs.send(Core.IQOptionName.SSID, token)
                    )
                    .then(() => this.profileAsync())
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
     * Wait to get user profile.
     */
    public profileAsync(): Promise<Core.IQOptionProfile> {
        Core.logger().silly("IQOptionApi::profileAsync");
        return new Promise((resolve, reject) => {
            this.iqOptionWs.socket().on("message", message => {
                const messageJSON = JSON.parse(message.toString());
                if (messageJSON.name === Core.IQOptionAction.PROFILE) {
                    resolve(messageJSON.msg);
                }
            });
            setTimeout(
                () => reject("It was not possible to receive the profile."),
                this.maxWaitProfile
            );
        });
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
        userBalanceId: number,
        profitPercent: number,
        amount: number
    ): Promise<Core.IQOptionOptionOpened> {
        return this.orderPlacementQueue.schedule(() => {
            Core.logger().silly(`IQOptionApi::sendOrder`, {
                market,
                side,
                time,
                amount
            });
            return this.iqOptionWs
                .send(Core.IQOptionName.SEND_MESSAGE, {
                    name: Core.IQOptionAction.BINARY_OPEN_OPTION,
                    version: "1.0",
                    body: {
                        user_balance_id: userBalanceId,
                        active_id: market,
                        option_type_id: 3, // todo
                        direction: side,
                        expired: iqOptionExpired(time),
                        refund_value: 0, // todo
                        price: amount,
                        profit_percent: profitPercent
                    }
                })
                .then(() => {
                    return new Promise((resolve, reject) => {
                        this.iqOptionWs.socket().on("message", message => {
                            const messageJSON = JSON.parse(message.toString());
                            if (
                                messageJSON.name ===
                                Core.IQOptionAction.BINARY_OPTION_OPENED
                            ) {
                                resolve(messageJSON.msg);
                            }
                            if (
                                messageJSON.name ===
                                Core.IQOptionAction.BINARY_OPTION_REJECT
                            ) {
                                reject(messageJSON.msg);
                            }
                        });
                        setTimeout(
                            () => reject("It was not possible to send order."),
                            this.maxWaitToSendOrder
                        );
                    });
                });
        });
    }

    public getInstruments(market: Core.IQOptionMarket, instrumentType: Core.IQOptionInstrumentType) {
        return this.orderPlacementQueue.schedule(() => {
            Core.logger().silly(`IQOptionApi::getInstruments`);
            return this.iqOptionWs
                .send(Core.IQOptionName.SEND_MESSAGE, {
                    name: Core.IQOptionAction.GET_INSTRUMENTS,
                    version: "1.0",
                    body: {
                        type: instrumentType
                    }
                })
        });
        // {"name":"sendMessage","request_id":"35","msg":{"name":"get-instruments","version":"4.0","body":{"type":"cfd"}}}
    }
}
