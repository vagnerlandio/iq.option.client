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
class IQOptionStreamOptionClose extends stream_1.Readable {
    /**
     * Constructor.
     *
     * @param iqOptionWS
     * @param market
     */
    constructor(iqOptionWS, market) {
        super({ objectMode: true });
        this.iqOptionWS = iqOptionWS;
        this.market = market;
    }
    /**
     * Default read
     */
    _read() { }
    /**
     * Start stream.
     */
    async startStream() {
        Core.logger().silly("IQOptionStreamOptionClose::startStream");
        if (this.iqOptionWS.isConnected()) {
            return Promise.reject("Socket is not connected.");
        }
        this.iqOptionWS
            .socket()
            .on("message", (data) => this.parseMessage(data.toString()));
        return Promise.resolve();
    }
    /**
     * On message.
     *
     * @param message
     */
    parseMessage(message) {
        const messageJSON = JSON.parse(message);
        if (messageJSON.name === Core.IQOptionAction.BINARY_OPTION_CLOSE &&
            messageJSON.msg.active_id === this.market) {
            this.emit("data", messageJSON.msg);
        }
    }
}
exports.IQOptionStreamOptionClose = IQOptionStreamOptionClose;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVFPcHRpb25TdHJlYW1PcHRpb25DbG9zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvU2VydmljZS9JUU9wdGlvblNlcnZpY2UvSVFPcHRpb25TdHJlYW1PcHRpb25DbG9zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7O0dBT0c7QUFDSCxtQ0FBa0M7QUFDbEMsOEJBQThCO0FBSTlCOztHQUVHO0FBQ0gsTUFBYSx5QkFBMEIsU0FBUSxpQkFBUTtJQVluRDs7Ozs7T0FLRztJQUNILFlBQW1CLFVBQXNCLEVBQUUsTUFBMkI7UUFDbEUsS0FBSyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxLQUFVLENBQUM7SUFFdkI7O09BRUc7SUFDSSxLQUFLLENBQUMsV0FBVztRQUNwQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7UUFDOUQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQy9CLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxDQUFDLFVBQVU7YUFDVixNQUFNLEVBQUU7YUFDUixFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakUsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxZQUFZLENBQUMsT0FBZTtRQUNoQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLElBQ0ksV0FBVyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQjtZQUM1RCxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUMzQztZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7Q0FDSjtBQXpERCw4REF5REMifQ==