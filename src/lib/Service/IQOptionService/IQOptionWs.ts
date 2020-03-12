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
import { IQOptionMessage } from "./IQOptionMessage";

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
    private socket!: WebSocket;

    /**
     * IQOptionMessage.
     */
    private readonly iqOptionMessage: IQOptionMessage = new IQOptionMessage();

    /**
     * Wait time to restart socket.
     */
    private readonly waitToRestart = 1000;

    /**
     * Start socket.
     */
    public connect(): Promise<void> {
        try {
            Core.logger().silly("IQOptionWs::connect");
            return new Promise((resolve, reject) => {
                this.socket = new WebSocket(`${this.endpoint}//echo/websocket`);
                this.socket.on("open", () => resolve());
                this.socket.on("message", message =>
                    this.iqOptionMessage.onMessage(message.toString())
                );
                this.socket.on("close", () => this.restartSocket());
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
        if (!this.socket) {
            return Promise.reject("Socket is not connected.");
        }
        return Promise.resolve(
            this.socket.send(
                JSON.stringify({
                    name,
                    msg
                })
            )
        );
    }

    /**
     * Is connected.
     */
    public isConnected(): boolean {
        return this.socket === undefined;
    }

    /**
     * Restart socket.
     */
    private restartSocket() {
        Core.logger().silly("IQOptionWs::restartSocket");
        setTimeout(() => this.connect(), this.waitToRestart);
    }
}
