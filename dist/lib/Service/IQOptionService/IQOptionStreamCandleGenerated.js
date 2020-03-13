"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        Core.logger().silly("IQOptionApi::subscribeCandle");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVFPcHRpb25TdHJlYW1DYW5kbGVHZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1NlcnZpY2UvSVFPcHRpb25TZXJ2aWNlL0lRT3B0aW9uU3RyZWFtQ2FuZGxlR2VuZXJhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQWtDO0FBQ2xDLDhCQUE4QjtBQUk5Qjs7R0FFRztBQUNILE1BQWEsNkJBQThCLFNBQVEsaUJBQVE7SUFpQnZEOzs7Ozs7T0FNRztJQUNILFlBQ0ksVUFBc0IsRUFDdEIsTUFBMkIsRUFDM0IsSUFBdUI7UUFFdkIsS0FBSyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxLQUFVLENBQUM7SUFFdkI7O09BRUc7SUFDSSxLQUFLLENBQUMsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUU7YUFDeEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUNQLElBQUksQ0FBQyxVQUFVO2FBQ1YsTUFBTSxFQUFFO2FBQ1IsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FDakU7YUFDQSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzdCLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7O09BRUc7SUFDSyxlQUFlO1FBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUNwRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDL0IsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDckQ7UUFDRCxNQUFNLE9BQU8sR0FBRztZQUNaLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQjtZQUMxQyxNQUFNLEVBQUU7Z0JBQ0osY0FBYyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUU7YUFDOUQ7U0FDSixDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUNyRSxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxZQUFZLENBQUMsT0FBZTtRQUNoQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLElBQ0ksV0FBVyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQjtZQUN6RCxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsTUFBTTtZQUN6QyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxFQUNwQztZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7Q0FDSjtBQXhGRCxzRUF3RkMifQ==