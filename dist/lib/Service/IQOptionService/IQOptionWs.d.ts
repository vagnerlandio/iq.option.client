import * as WebSocket from "ws";
import * as Core from "../../index";
/**
 * IqOptionWs;
 */
export declare class IQOptionWs {
    /**
     * Host..
     */
    private readonly endpoint;
    /**
     * Socket client.
     */
    private _socket;
    /**
     * Wait time to restart _socket.
     */
    private readonly waitToRestart;
    /**
     * Start _socket.
     */
    connect(): Promise<void>;
    /**
     * Send message.
     *
     * @param name
     * @param msg
     * @param requestID
     */
    send(name: Core.IQOptionName, msg: any, requestID?: number): Promise<any>;
    /**
     * Get _socket.
     */
    socket(): WebSocket;
    /**
     * Is connected.
     */
    isConnected(): boolean;
    /**
     * Restart _socket.
     */
    private restartSocket;
}
