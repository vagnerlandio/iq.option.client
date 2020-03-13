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
const Core = require("../lib");
const iqOptionApi = new Core.IQOptionApi("liie.m@excelbangkok.com", "Code11054");
const candles = {
    open: [],
    close: [],
    high: [],
    low: []
};
exports.findUserBalanceFiat = (balances, currency, test = false) => {
    if (test) {
        return balances.filter(f => f.type === Core.IQOptionCurrencyType.TEST)[0];
    }
    return balances.filter(f => f.currency === currency && f.type === Core.IQOptionCurrencyType.FIAT)[0];
};
iqOptionApi
    .connectAsync()
    .then(async (profile) => {
    // OPTIONS
    const currency = Core.IQOptionCurrency.USD;
    const profitPercent = 76;
    const market = Core.IQOptionMarket.EURUSD;
    const time = Core.IQOptionTime.FIVE_MINUTES;
    const candleStream = new Core.IQOptionStreamCandleGenerated(iqOptionApi.getIQOptionWs(), market, time);
    const balance = exports.findUserBalanceFiat(profile.balances, currency, true);
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
        iqOptionApi.sendOrderBinary(Core.IQOptionMarket.EURUSD, Core.IQOptionModel.BUY, time, balance.id, profitPercent, 100),
        iqOptionApi.sendOrderBinary(Core.IQOptionMarket.EURUSD, Core.IQOptionModel.BUY, time, balance.id, profitPercent, 100)
    ]);
    console.log(console.log(ordersCreated));
    // console.log(requestId);
    // iqOptionApi
    //     .getIQOptionWs()
    //     .socket()
    //     .on("message", data => console.log(data));
})
    .catch((e) => {
    Core.logger().error(JSON.stringify(e));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVFPcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmluL0lRT3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7R0FPRztBQUNILCtCQUErQjtBQUUvQixNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQ3BDLHlCQUF5QixFQUN6QixXQUFXLENBQ2QsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQWlCVDtJQUNBLElBQUksRUFBRSxFQUFFO0lBQ1IsS0FBSyxFQUFFLEVBQUU7SUFDVCxJQUFJLEVBQUUsRUFBRTtJQUNSLEdBQUcsRUFBRSxFQUFFO0NBQ0gsQ0FBQztBQUVJLFFBQUEsbUJBQW1CLEdBQUcsQ0FDL0IsUUFBZ0MsRUFDaEMsUUFBK0IsRUFDL0IsT0FBZ0IsS0FBSyxFQUNELEVBQUU7SUFDdEIsSUFBSSxJQUFJLEVBQUU7UUFDTixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQ2xCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUNqRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ1I7SUFDRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQ2xCLENBQUMsQ0FBQyxFQUFFLENBQ0EsQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUMzRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ1QsQ0FBQyxDQUFDO0FBRUYsV0FBVztLQUNOLFlBQVksRUFBRTtLQUNkLElBQUksQ0FBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLEVBQUU7SUFDbEIsVUFBVTtJQUNWLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7SUFDM0MsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQzFDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO0lBRTVDLE1BQU0sWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLDZCQUE2QixDQUN2RCxXQUFXLENBQUMsYUFBYSxFQUFFLEVBQzNCLE1BQU0sRUFDTixJQUFJLENBQ1AsQ0FBQztJQUVGLE1BQU0sT0FBTyxHQUFHLDJCQUFtQixDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXRFLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsMkRBQTJEO0lBQzNELHVDQUF1QztJQUN2Qyx5Q0FBeUM7SUFDekMsc0NBQXNDO0lBQ3RDLHFDQUFxQztJQUNyQyxpREFBaUQ7SUFDakQsbURBQW1EO0lBQ25ELGlEQUFpRDtJQUNqRCwrQ0FBK0M7SUFDL0MsdUNBQXVDO0lBQ3ZDLDBFQUEwRTtJQUMxRSx1RkFBdUY7SUFDdkYsUUFBUTtJQUNSLE1BQU07SUFFTixhQUFhO0lBRWIscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLEtBQUs7SUFDTCxpQ0FBaUM7SUFDakMscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLEtBQUs7SUFDTCxNQUFNLGFBQWEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDcEMsV0FBVyxDQUFDLGVBQWUsQ0FDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUN0QixJQUFJLEVBQ0osT0FBTyxDQUFDLEVBQUUsRUFDVixhQUFhLEVBQ2IsR0FBRyxDQUNOO1FBQ0QsV0FBVyxDQUFDLGVBQWUsQ0FDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUN0QixJQUFJLEVBQ0osT0FBTyxDQUFDLEVBQUUsRUFDVixhQUFhLEVBQ2IsR0FBRyxDQUNOO0tBQ0osQ0FBQyxDQUFDO0lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEMsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlEQUFpRDtBQUNyRCxDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtJQUNkLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDIn0=