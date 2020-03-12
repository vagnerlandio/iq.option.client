import * as WebSocket from "ws";
import * as Core from "../..";
import {IQOptionMessage} from "./IQOptionMessage";
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
     * Get connection.
     */
    public getConnection(): WebSocket {
        return this.socket;
    }

    /**
     * Restart socket.
     */
    private restartSocket() {
        setTimeout(() => this.connect(), this.waitToRestart);
    }

    /**
     * Send message.
     *
     * @param name
     * @param msg
     */
    // public send(name: string, msg: any): Promise<any> {
    //     if (!this.socket) {
    //         return Promise.reject("Socket is not connected.");
    //     }
    //     return Promise.resolve(
    //         this.socket.send(
    //             JSON.stringify({
    //                 name,
    //                 msg
    //             })
    //         )
    //     );
    // }
}
