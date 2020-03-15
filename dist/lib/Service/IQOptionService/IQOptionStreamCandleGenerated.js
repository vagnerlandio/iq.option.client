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
const stream_1 = require("stream");
const Core = require("../..");
/**
 * Stream candle generated.
 */
class IQOptionStreamCandleGenerated extends stream_1.Readable {
    /**
     * Constructor.
     *
     * @param iqOptionWS
     * @param market
     * @param time
     */
    constructor(iqOptionWS, market, time) {
        super({ objectMode: true });
        this.iqOptionWS = iqOptionWS;
        this.market = market;
        this.time = time;
    }
    /**
     * Default read
     */
    _read() { }
    /**
     * Start stream.
     */
    async startStream() {
        Core.logger().silly("IQOptionStreamCandleGenerated::startStream");
        return this.subscribeCandle()
            .then(() => this.iqOptionWS
            .socket()
            .on("message", data => this.parseMessage(data.toString())))
            .then(() => Promise.resolve())
            .catch(e => Promise.reject(e));
    }
    /**
     * Candle subscribe.
     */
    subscribeCandle() {
        Core.logger().silly("IQOptionStreamCandleGenerated::subscribeCandle");
        if (this.iqOptionWS.isConnected()) {
            return Promise.reject("Socket is not connected.");
        }
        const message = {
            name: Core.IQOptionAction.CANDLE_GENERATED,
            params: {
                routingFilters: { active_id: this.market, size: this.time }
            }
        };
        return Promise.resolve(this.iqOptionWS.send(Core.IQOptionName.SUBSCRIBE_MESSAGE, message));
    }
    /**
     * On message.
     *
     * @param message
     */
    parseMessage(message) {
        const messageJSON = JSON.parse(message);
        if (messageJSON.name === Core.IQOptionAction.CANDLE_GENERATED &&
            messageJSON.msg.active_id === this.market &&
            messageJSON.msg.size === this.time) {
            this.emit("data", messageJSON.msg);
        }
    }
}
exports.IQOptionStreamCandleGenerated = IQOptionStreamCandleGenerated;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVFPcHRpb25TdHJlYW1DYW5kbGVHZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1NlcnZpY2UvSVFPcHRpb25TZXJ2aWNlL0lRT3B0aW9uU3RyZWFtQ2FuZGxlR2VuZXJhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7R0FPRztBQUNILG1DQUFrQztBQUNsQyw4QkFBOEI7QUFJOUI7O0dBRUc7QUFDSCxNQUFhLDZCQUE4QixTQUFRLGlCQUFRO0lBaUJ2RDs7Ozs7O09BTUc7SUFDSCxZQUNJLFVBQXNCLEVBQ3RCLE1BQTJCLEVBQzNCLElBQXVCO1FBRXZCLEtBQUssQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUssS0FBVSxDQUFDO0lBRXZCOztPQUVHO0lBQ0ksS0FBSyxDQUFDLFdBQVc7UUFDcEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sSUFBSSxDQUFDLGVBQWUsRUFBRTthQUN4QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQ1AsSUFBSSxDQUFDLFVBQVU7YUFDVixNQUFNLEVBQUU7YUFDUixFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUNqRTthQUNBLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDN0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRztJQUNLLGVBQWU7UUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1FBQ3RFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUMvQixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUNyRDtRQUNELE1BQU0sT0FBTyxHQUFHO1lBQ1osSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCO1lBQzFDLE1BQU0sRUFBRTtnQkFDSixjQUFjLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTthQUM5RDtTQUNKLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQ3JFLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLFlBQVksQ0FBQyxPQUFlO1FBQ2hDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsSUFDSSxXQUFXLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCO1lBQ3pELFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxNQUFNO1lBQ3pDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQ3BDO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztDQUNKO0FBekZELHNFQXlGQyJ9