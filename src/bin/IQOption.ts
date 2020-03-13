/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as Core from "../lib";

const iqOptionApi = new Core.IQOptionApi(
    "liie.m@excelbangkok.com",
    "Code11054"
);

const candles: {
    /**
     * Open.
     */
    open: number[];
    /**
     * Close.
     */
    close: number[];
    /**
     * High.
     */
    high: number[];
    /**
     * Low.
     */
    low: number[];
} = {
    open: [],
    close: [],
    high: [],
    low: []
} as any;

export const findUserBalanceFiat = (
    balances: Core.IQOptionBalance[],
    currency: Core.IQOptionCurrency,
    test: boolean = false
): Core.IQOptionBalance => {
    if (test) {
        return balances.filter(
            f => f.type === Core.IQOptionCurrencyType.TEST
        )[0];
    }
    return balances.filter(
        f =>
            f.currency === currency && f.type === Core.IQOptionCurrencyType.FIAT
    )[0];
};

iqOptionApi
    .connectAsync()
    .then(async profile => {
        // OPTIONS
        const currency = Core.IQOptionCurrency.USD;
        const profitPercent = 76;
        const market = Core.IQOptionMarket.EURUSD;
        const time = Core.IQOptionTime.FIVE_MINUTES;

        const candleStream = new Core.IQOptionStreamCandleGenerated(
            iqOptionApi.getIQOptionWs(),
            market,
            time
        );

        const balance = findUserBalanceFiat(profile.balances, currency, true);

        // START STREAM
        // await candleStream.startStream();
        // candleStream.on("data", (data: Core.IQOptionCandle) => {
        //     candles.open.unshift(data.open);
        //     candles.close.unshift(data.close);
        //     candles.high.unshift(data.max);
        //     candles.low.unshift(data.min);
        //     candles.open = candles.open.slice(0, 100);
        //     candles.close = candles.close.slice(0, 100);
        //     candles.open = candles.open.slice(0, 100);
        //     candles.low = candles.low.slice(0, 100);
        //     if (candles.close.length > 50) {
        //         Core.logger().silly(`RSI: ${talib.RSI(candles.close, 17)[0]}`);
        //         // Core.logger().silly(`MACD: ${talib.MACD(candles.close, 12, 26, 9).macd}`)
        //     }
        // });

        // SEND ORDER

        // await iqOptionApi.sendOrderBinary(
        //     Core.IQOptionMarket.EURUSD,
        //     Core.IQOptionModel.BUY,
        //     time,
        //     balance.id,
        //     profitPercent,
        //     100
        // );
        // console.log('REQUEST ORDER 2')
        // await iqOptionApi.sendOrderBinary(
        //     Core.IQOptionMarket.EURUSD,
        //     Core.IQOptionModel.BUY,
        //     time,
        //     balance.id,
        //     profitPercent,
        //     100
        // );
        const ordersCreated = await Promise.all([
            iqOptionApi.sendOrderBinary(
                Core.IQOptionMarket.EURUSD,
                Core.IQOptionModel.BUY,
                time,
                balance.id,
                profitPercent,
                100
            ),
            iqOptionApi.sendOrderBinary(
                Core.IQOptionMarket.EURUSD,
                Core.IQOptionModel.BUY,
                time,
                balance.id,
                profitPercent,
                100
            )
        ]);
        console.log(console.log(ordersCreated));
        // console.log(requestId);
        // iqOptionApi
        //     .getIQOptionWs()
        //     .socket()
        //     .on("message", data => console.log(data));
    })
    .catch((e: any) => {
        Core.logger().error(JSON.stringify(e));
    });
