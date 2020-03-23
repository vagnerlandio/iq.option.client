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
const WebSocket = require("ws");
const Core = require("../../index");
/**
 * IqOptionWs;
 */
class IQOptionWs {
    constructor() {
        /**
         * Host..
         */
        this.endpoint = "wss://iqoption.com";
        /**
         * Wait time to restart _socket.
         */
        this.waitToRestart = 1000;
    }
    /**
     * Start _socket.
     */
    connect() {
        try {
            Core.logger().silly("IQOptionWs::connect");
            return new Promise((resolve, reject) => {
                this._socket = new WebSocket(`${this.endpoint}//echo/websocket`);
                this._socket.on("open", () => resolve());
                this._socket.on("close", () => this.restartSocket());
            });
        }
        catch (e) {
            return Promise.reject();
        }
    }
    /**
     * Send message.
     *
     * @param name
     * @param msg
     * @param requestID
     */
    send(name, msg, requestID) {
        Core.logger().silly("IQOptionWs::send");
        if (!this._socket) {
            return Promise.reject("Socket is not connected.");
        }
        const message = {
            name,
            msg,
        };
        if (requestID) {
            message.request_id = requestID;
        }
        return Promise.resolve(this._socket.send(JSON.stringify(message)));
    }
    /**
     * Get _socket.
     */
    socket() {
        return this._socket;
    }
    /**
     * Is connected.
     */
    isConnected() {
        return this._socket === undefined;
    }
    /**
     * Restart _socket.
     */
    restartSocket() {
        Core.logger().silly("IQOptionWs::restartSocket");
        setTimeout(() => this.connect(), this.waitToRestart);
    }
}
exports.IQOptionWs = IQOptionWs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVFPcHRpb25Xcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvU2VydmljZS9JUU9wdGlvblNlcnZpY2UvSVFPcHRpb25Xcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7O0dBT0c7QUFDSCxnQ0FBZ0M7QUFDaEMsb0NBQW9DO0FBRXBDOztHQUVHO0FBQ0gsTUFBYSxVQUFVO0lBQXZCO1FBQ0k7O1dBRUc7UUFDYyxhQUFRLEdBQVcsb0JBQW9CLENBQUM7UUFPekQ7O1dBRUc7UUFDYyxrQkFBYSxHQUFHLElBQUksQ0FBQztJQW1FMUMsQ0FBQztJQWpFRzs7T0FFRztJQUNJLE9BQU87UUFDVixJQUFJO1lBQ0EsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxTQUFTLENBQ3hCLEdBQUcsSUFBSSxDQUFDLFFBQVEsa0JBQWtCLENBQ3JDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixPQUFPLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxJQUFJLENBQ1AsSUFBdUIsRUFDdkIsR0FBUSxFQUNSLFNBQWtCO1FBRWxCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsTUFBTSxPQUFPLEdBQVE7WUFDakIsSUFBSTtZQUNKLEdBQUc7U0FDTixDQUFDO1FBQ0YsSUFBSSxTQUFTLEVBQUU7WUFDWCxPQUFPLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUNsQztRQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7T0FFRztJQUNJLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7T0FFRztJQUNLLGFBQWE7UUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ2pELFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDSjtBQWpGRCxnQ0FpRkMifQ==