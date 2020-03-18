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
const IQOptionExpired_1 = require("./IQOptionExpired");
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
         *  Queue order send.
         */
        this.orderPlacementQueue = new bottleneck_1.default({
            maxConcurrent: 1,
            minTime: 1
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
            .then(token => {
            return this.iqOptionWs
                .connect()
                .then(() => this.iqOptionWs.send(Core.IQOptionName.SSID, token))
                .then(() => this.profileAsync())
                .catch(e => Promise.reject(e));
        })
            .catch(e => Promise.reject(e));
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
            this.iqOptionWs.socket().on("message", message => {
                const messageJSON = JSON.parse(message.toString());
                if (messageJSON.name === Core.IQOptionAction.PROFILE) {
                    resolve(messageJSON.msg);
                }
            });
            setTimeout(() => reject("It was not possible to receive the profile."), this.maxWaitProfile);
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
    sendOrderBinary(market, side, time, userBalanceId, profitPercent, amount) {
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
                    option_type_id: 3,
                    direction: side,
                    expired: IQOptionExpired_1.iqOptionExpired(time),
                    refund_value: 0,
                    price: amount,
                    profit_percent: profitPercent
                }
            })
                .then(() => {
                return new Promise((resolve, reject) => {
                    this.iqOptionWs.socket().on("message", message => {
                        const messageJSON = JSON.parse(message.toString());
                        if (messageJSON.name ===
                            Core.IQOptionAction.BINARY_OPTION_OPENED) {
                            resolve(messageJSON.msg);
                        }
                        if (messageJSON.name ===
                            Core.IQOptionAction.BINARY_OPTION_REJECT) {
                            reject(messageJSON.msg);
                        }
                    });
                    setTimeout(() => reject("It was not possible to send order."), this.maxWaitToSendOrder);
                });
            });
        });
    }
    getInstruments(market, instrumentType) {
        return this.orderPlacementQueue.schedule(() => {
            Core.logger().silly(`IQOptionApi::getInstruments`);
            return this.iqOptionWs
                .send(Core.IQOptionName.SEND_MESSAGE, {
                name: Core.IQOptionAction.GET_INSTRUMENTS,
                version: "1.0",
                body: {
                    type: instrumentType
                }
            });
        });
        // {"name":"sendMessage","request_id":"35","msg":{"name":"get-instruments","version":"4.0","body":{"type":"cfd"}}}
    }
}
exports.IQOptionApi = IQOptionApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVFPcHRpb25BcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1NlcnZpY2UvSVFPcHRpb25TZXJ2aWNlL0lRT3B0aW9uQXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7R0FPRztBQUNILDJDQUFvQztBQUNwQyw4QkFBOEI7QUFDOUIsdURBQW9EO0FBQ3BELHVEQUFvRDtBQUNwRCw2Q0FBMEM7QUFFMUM7O0dBRUc7QUFDSCxNQUFhLFdBQVc7SUE2QnBCOzs7OztPQUtHO0lBQ0gsWUFBWSxLQUFhLEVBQUUsUUFBZ0I7UUFsQzNDOztXQUVHO1FBQ2MsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFFdkM7O1dBRUc7UUFDYyx1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFZM0M7O1dBRUc7UUFDYyx3QkFBbUIsR0FBRyxJQUFJLG9CQUFVLENBQUM7WUFDbEQsYUFBYSxFQUFFLENBQUM7WUFDaEIsT0FBTyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7UUFTQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksWUFBWTtRQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNqRCxPQUFPLElBQUksQ0FBQyxlQUFlO2FBQ3RCLElBQUksRUFBRTthQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVU7aUJBQ2pCLE9BQU8sRUFBRTtpQkFDVCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQ1AsSUFBSSxDQUFDLFVBQVUs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