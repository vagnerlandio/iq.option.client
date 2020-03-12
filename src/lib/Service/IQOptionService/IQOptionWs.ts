/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as WebSocket from "ws";
import * as Core from "../../index";

/**
 * IqOptionWs;
 */
export class IQOptionWs {
    /**
     * Host..
     */
    private readonly endpoint: string = "wss://iqoption.com";

    /**
     * Socket client.
     */
    private _socket!: WebSocket;

    /**
     * Wait time to restart _socket.
     */
    private readonly waitToRestart = 1000;

    /**
     * Start _socket.
     */
    public connect(): Promise<void> {
        try {
            Core.logger().silly("IQOptionWs::connect");
            return new Promise((resolve, reject) => {
                this._socket = new WebSocket(
                    `${this.endpoint}//echo/websocket`
                );
                this._socket.on("open", () => resolve());
                this._socket.on("close", () => this.restartSocket());
            });
        } catch (e) {
            return Promise.reject();
        }
    }

    /**
     * Send message.
     *
     * @param name
     * @param msg
     */
    public send(name: Core.IQOptionName, msg: any): Promise<any> {
        Core.logger().silly("IQOptionWs::send");
        if (!this._socket) {
            return Promise.reject("Socket is not connected.");
        }
        return Promise.resolve(
            this._socket.send(
                JSON.stringify({
                    name,
                    msg
                })
            )
        );
    }

    /**
     * Get _socket.
     */
    public socket() {
        return this._socket;
    }

    /**
     * Is connected.
     */
    public isConnected(): boolean {
        return this._socket === undefined;
    }

    /**
     * Restart _socket.
     */
    private restartSocket() {
        Core.logger().silly("IQOptionWs::restartSocket");
        setTimeout(() => this.connect(), this.waitToRestart);
    }
}
