/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import { Readable } from "stream";
import * as Core from "../..";
import { IIQOptionStream } from "./Interface/IIQOptionStream";
import { IQOptionWs } from "./IQOptionWs";

/**
 * Stream candle generated.
 */
export class IQOptionStreamCandleGenerated extends Readable
    implements IIQOptionStream {
    /**
     * Socket.
     */
    private readonly iqOptionWS: IQOptionWs;

    /**
     * Market.
     */
    private readonly market: Core.IQOptionMarket;

    /**
     * Time.
     */
    private readonly time: Core.IQOptionTime;

    /**
     * Constructor.
     *
     * @param iqOptionWS
     * @param market
     * @param time
     */
    public constructor(
        iqOptionWS: IQOptionWs,
        market: Core.IQOptionMarket,
        time: Core.IQOptionTime
    ) {
        super({ objectMode: true });
        this.iqOptionWS = iqOptionWS;
        this.market = market;
        this.time = time;
    }

    /**
     * Default read
     */
    public _read(): void {}

    /**
     * Start stream.
     */
    public async startStream(): Promise<void> {
        Core.logger().silly("IQOptionStreamCandleGenerated::startStream");
        return this.subscribeCandle()
            .then(() =>
                this.iqOptionWS
                    .socket()
                    .on("message", (data) => this.parseMessage(data.toString()))
            )
            .then(() => Promise.resolve())
            .catch((e) => Promise.reject(e));
    }

    /**
     * Candle subscribe.
     */
    private subscribeCandle(): Promise<void> {
        Core.logger().silly("IQOptionStreamCandleGenerated::subscribeCandle");
        if (this.iqOptionWS.isConnected()) {
            return Promise.reject("Socket is not connected.");
        }
        const message = {
            name: Core.IQOptionAction.CANDLE_GENERATED,
            params: {
                routingFilters: { active_id: this.market, size: this.time },
            },
        };
        return Promise.resolve(
            this.iqOptionWS.send(Core.IQOptionName.SUBSCRIBE_MESSAGE, message)
        );
    }

    /**
     * On message.
     *
     * @param message
     */
    private parseMessage(message: string) {
        const messageJSON = JSON.parse(message);
        if (
            messageJSON.name === Core.IQOptionAction.CANDLE_GENERATED &&
            messageJSON.msg.active_id === this.market &&
            messageJSON.msg.size === this.time
        ) {
            this.emit("data", messageJSON.msg);
        }
    }
}
