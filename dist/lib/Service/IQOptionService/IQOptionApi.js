"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
const bottleneck_1 = require("bottleneck");
const Core = require("../..");
const IQOptionWrapper_1 = require("./IQOptionWrapper");
const IQOptionWs_1 = require("./IQOptionWs");
/**
 * IQOption api.
 */
class IQOptionApi {
    /**
     * IQOption API.
     *
     * @param email
     * @param password
     */
    constructor(email, password) {
        /**
         * Max wait profile response.
         */
        this.maxWaitProfile = 5000;
        /**
         * Max wait profile response.
         */
        this.maxWaitToSendOrder = 5000;
        /**
         * Max wait profile response.
         */
        this.maxWaitToInitializationData = 5000;
        /**
         * Request ID.
         */
        this.requestID = 0;
        /**
         *  Queue order send.
         */
        this.orderPlacementQueue = new bottleneck_1.default({
            maxConcurrent: 1,
            minTime: 1,
        });
        Core.logger().silly("IQOptionApi::constructor");
        this.iqOptionWrapper = new IQOptionWrapper_1.IQOptionWrapper(email, password);
        this.iqOptionWs = new IQOptionWs_1.IQOptionWs();
    }
    /**
     * Connect async.
     */
    connectAsync() {
        Core.logger().silly("IQOptionApi::connectAsync");
        return this.iqOptionWrapper
            .auth()
            .then((token) => {
            return this.iqOptionWs
                .connect()
                .then(() => this.iqOptionWs.send(Core.IQOptionName.SSID, token, this.getNextRequestID()))
                .then(() => this.profileAsync())
                .catch((e) => Promise.reject(e));
        })
            .catch((e) => Promise.reject(e));
    }
    /**
     * Get iq option ws.
     */
    getIQOptionWs() {
        return this.iqOptionWs;
    }
    /**
     * Wait to get user profile.
     */
    profileAsync() {
        Core.logger().silly("IQOptionApi::profileAsync");
        return new Promise((resolve, reject) => {
            const listener = (message) => {
                const messageJSON = JSON.parse(message.toString());
                if (messageJSON.name === Core.IQOptionAction.PROFILE) {
                    this.iqOptionWs.socket().off("message", listener);
                    resolve(messageJSON.msg);
                }
            };
            this.iqOptionWs.socket().on("message", listener);
            setTimeout(() => {
                this.iqOptionWs.socket().off("message", listener);
                reject("It was not possible to receive the profile.");
            }, this.maxWaitProfile);
        });
    }
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
    sendOrderBinary(market, side, time, userBalanceId, profitPercent, amount) {
        return this.orderPlacementQueue.schedule(() => {
            Core.logger().silly(`IQOptionApi::sendOrder`, {
                market,
                side,
                time,
                amount,
            });
            const requestID = this.getNextRequestID();
            return this.iqOptionWs
                .send(Core.IQOptionName.SEND_MESSAGE, {
                name: Core.IQOptionAction.BINARY_OPEN_OPTION,
                version: "1.0",
                body: {
                    user_balance_id: userBalanceId,
                    active_id: market,
                    option_type_id: 3,
                    direction: side,
                    expired: time,
                    refund_value: 0,
                    price: amount,
                    profit_percent: profitPercent,
                },
            }, requestID)
                .then(() => {
                return new Promise((resolve, reject) => {
                    const listener = (message) => {
                        const messageJSON = JSON.parse(message.toString());
                        if (messageJSON.name ===
                            Core.IQOptionAction.BINARY_OPTION_OPENED) {
                            console.log(messageJSON, market);
                            if (messageJSON.active_id === market) {
                                this.iqOptionWs
                                    .socket()
                                    .off("message", listener);
                                resolve(messageJSON.msg);
                            }
                        }
                        if (messageJSON.name ===
                            Core.IQOptionAction.BINARY_OPTION_REJECT) {
                            console.log(messageJSON.active_id, market);
                            if (messageJSON.active_id === market) {
                                this.iqOptionWs
                                    .socket()
                                    .off("message", listener);
                                reject(messageJSON.msg);
                            }
                        }
                    };
                    this.iqOptionWs.socket().on("message", listener);
                    setTimeout(() => {
                        this.iqOptionWs.socket().off("message", listener);
                        reject("It was not possible to send order.");
                    }, this.maxWaitToSendOrder);
                });
            });
        });
    }
    /**
     * Get initialization data.
     */
    getInitializationData() {
        return this.orderPlacementQueue.schedule(() => {
            Core.logger().silly(`IQOptionApi::getInitializationData`);
            const requestID = this.getNextRequestID();
            return this.iqOptionWs
                .send(Core.IQOptionName.SEND_MESSAGE, {
                name: Core.IQOptionAction.GET_INITIALIZATION_DATA,
                version: "3.0",
                body: {},
            }, requestID)
                .then(() => {
                return new Promise((resolve, reject) => {
                    const listener = (message) => {
                        const messageJSON = JSON.parse(message.toString());
                        if (messageJSON.name ===
                            Core.IQOptionAction.INITIALIZATION_DATA) {
                            this.iqOptionWs
                                .socket()
                                .off("message", listener);
                            resolve(messageJSON.msg);
                        }
                    };
                    this.iqOptionWs.socket().on("message", listener);
                    setTimeout(() => {
                        this.iqOptionWs.socket().off("message", listener);
                        reject("No initialization data.");
                    }, this.maxWaitToInitializationData);
                });
            });
        });
    }
    /**
     * Get next request id.
     */
    getNextRequestID() {
        this.requestID++;
        return this.requestID;
    }
}
exports.IQOptionApi = IQOptionApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVFPcHRpb25BcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1NlcnZpY2UvSVFPcHRpb25TZXJ2aWNlL0lRT3B0aW9uQXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7R0FPRztBQUNILDJDQUFvQztBQUNwQyw4QkFBOEI7QUFDOUIsdURBQW9EO0FBQ3BELDZDQUEwQztBQUUxQzs7R0FFRztBQUNILE1BQWEsV0FBVztJQXVDcEI7Ozs7O09BS0c7SUFDSCxZQUFZLEtBQWEsRUFBRSxRQUFnQjtRQTVDM0M7O1dBRUc7UUFDYyxtQkFBYyxHQUFXLElBQUksQ0FBQztRQUUvQzs7V0FFRztRQUNjLHVCQUFrQixHQUFXLElBQUksQ0FBQztRQUVuRDs7V0FFRztRQUNjLGdDQUEyQixHQUFXLElBQUksQ0FBQztRQUU1RDs7V0FFRztRQUNLLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFZOUI7O1dBRUc7UUFDYyx3QkFBbUIsR0FBRyxJQUFJLG9CQUFVLENBQUM7WUFDbEQsYUFBYSxFQUFFLENBQUM7WUFDaEIsT0FBTyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7UUFTQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksWUFBWTtRQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNqRCxPQUFPLElBQUksQ0FBQyxlQUFlO2FBQ3RCLElBQUksRUFBRTthQUNOLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMs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