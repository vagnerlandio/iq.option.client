/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as talib from "ta-lib";
import * as Core from "../lib";

const iqOptionApi = new Core.IQOptionApi(
    "liie.m@excelbangkok.com",
    "Code11054"
);

const candles: {
    /**
     * Open.
     */
    open: number[],
    /**
     * Close.
     */
    close: number[],
    /**
     * High.
     */
    high: number[],
    /**
     * Low.
     */
    low:  number[]
} = {
    open: [],
    close: [],
    high: [],
    low: []
} as any;

iqOptionApi
    .connectAsync()
    .then(async () => {
        await Core.sleepHelper(1000);
        const candleStream = new Core.IQOptionStreamCandleGenerated(
            iqOptionApi.getIQOptionWs(),
            Core.IQOptionMarket.EURUSD,
            Core.IQOptionTime.FIVE_MINUTES
        );

        // START STEAM
        await candleStream.startStream();
        candleStream.on("data", (data: Core.IQOptionCandle) => {
            candles.open.unshift(data.open);
            candles.close.unshift(data.close);
            candles.close.unshift(data.close);
            candles.close.unshift(data.close);
            candles.open = candles.open.slice(0, 100);
            candles.close = candles.close.slice(0, 100);
            candles.close = candles.close.slice(0, 100);
            candles.close = candles.close.slice(0, 100);
            if (candles.close.length > 50) {
                Core.logger().silly(`RSI: ${talib.RSI(candles.close, 17)[0]}`)
                // Core.logger().silly(`MACD: ${talib.MACD(candles.close, 12, 26, 9).macd}`)
            }
        });
        // SEND ORDER
        await iqOptionApi.sendOrderBinary(Core.IQOptionMarket.EURUSD, Core.IQOptionModel.BUY, Core.IQOptionTime.ONE_MINUTE, 100);
    })
    .catch((e: any) => {
        Core.logger().error(JSON.stringify(e));
    });
