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
    low: [],
};
exports.findUserBalanceFiat = (balances, currency, test = false) => {
    if (test) {
        return balances.filter((f) => f.type === Core.IQOptionCurrencyType.TEST)[0];
    }
    return balances.filter((f) => f.currency === currency && f.type === Core.IQOptionCurrencyType.FIAT)[0];
};
iqOptionApi
    .connectAsync()
    .then(async (profile) => {
    // OPTIONS
    // const currency = Core.IQOptionCurrency.USD;
    // const profitPercent = 87;
    const market = Core.IQOptionMarket.EURJPY;
    // const time = Core.IQOptionTime.ONE_MINUTE;
    const responseData = await iqOptionApi.getInitializationData();
    console.log(responseData);
    // const responseData2 = await iqOptionApi.getInitializationData();
    // console.log(responseData2);
    // const candleStream = new Core.IQOptionStreamCandleGenerated(
    //     iqOptionApi.getIQOptionWs(),
    //     market,
    //     time
    // );
    // const balance = findUserBalanceFiat(profile.balances, currency, true);
    // iqOptionApi.getIQOptionWs().socket().on("message", data => console.log(data));
    // await Core.sleepHelper(2000)
    // await iqOptionApi.getIQOptionWs().send(Core.IQOptionName.SEND_MESSAGE, {"name":"get-commissions","version":"1.0","body":{"instrument_type":"digital-option","user_group_id":193}});
    // await iqOptionApi.getIQOptionWs().send(Core.IQOptionName.SEND_MESSAGE, {"name":"get-active-schedule","version":"1.0","body":{"instrument_type":"digital-option","period":7}});
    // await iqOptionApi.getIQOptionWs().send(Core.IQOptionName.SEND_MESSAGE, );
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
    // const ordersCreated = await Promise.all([
    //     iqOptionApi.sendOrderBinary(
    //         Core.IQOptionMarket.EURUSD_OTC,
    //         Core.IQOptionModel.BUY,
    //         time,
    //         balance.id,
    //         profitPercent,
    //         100
    //     )
    // ]);
    // const optionCloseStream = new Core.IQOptionStreamOptionClose(
    //     iqOptionApi.getIQOptionWs(),
    //     market
    // );
    // await optionCloseStream.startStream();
    // optionCloseStream.on("data", data => console.log(data));
    // console.log(console.log(ordersCreated));
    // console.log(requestId);
    // iqOptionApi.getInstruments(market, Core.IQOptionInstrumentType.BINARY)
    let data;
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    data = await iqOptionApi.getInitializationData();
    iqOptionApi
        .getIQOptionWs()
        .socket()
        .on("message", (data) => console.log(data));
})
    .catch((e) => {
    Core.logger().error(JSON.stringify(e));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVFPcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmluL0lRT3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7R0FPRztBQUNILCtCQUErQjtBQUUvQixNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQ3BDLHlCQUF5QixFQUN6QixXQUFXLENBQ2QsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQWlCVDtJQUNBLElBQUksRUFBRSxFQUFFO0lBQ1IsS0FBSyxFQUFFLEVBQUU7SUFDVCxJQUFJLEVBQUUsRUFBRTtJQUNSLEdBQUcsRUFBRSxFQUFFO0NBQ0gsQ0FBQztBQUVJLFFBQUEsbUJBQW1CLEdBQUcsQ0FDL0IsUUFBZ0MsRUFDaEMsUUFBK0IsRUFDL0IsT0FBZ0IsS0FBSyxFQUNELEVBQUU7SUFDdEIsSUFBSSxJQUFJLEVBQUU7UUFDTixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQ2xCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQ25ELENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDUjtJQUNELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FDbEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNGLENBQUMsQ0FBQyxRQUFRLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FDM0UsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNULENBQUMsQ0FBQztBQUVGLFdBQVc7S0FDTixZQUFZLEVBQUU7S0FDZCxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQ3BCLFVBQVU7SUFDViw4Q0FBOEM7SUFDOUMsNEJBQTRCO0lBQzVCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQzFDLDZDQUE2QztJQUM3QyxNQUFNLFlBQVksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFMUIsbUVBQW1FO0lBQ25FLDhCQUE4QjtJQUM5QiwrREFBK0Q7SUFDL0QsbUNBQW1DO0lBQ25DLGNBQWM7SUFDZCxXQUFXO0lBQ1gsS0FBSztJQUVMLHlFQUF5RTtJQUN6RSxpRkFBaUY7SUFDakYsK0JBQStCO0lBQy9CLHNMQUFzTDtJQUN0TCxpTEFBaUw7SUFDakwsNEVBQTRFO0lBRTVFLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsMkRBQTJEO0lBQzNELHVDQUF1QztJQUN2Qyx5Q0FBeUM7SUFDekMsc0NBQXNDO0lBQ3RDLHFDQUFxQztJQUNyQyxpREFBaUQ7SUFDakQsbURBQW1EO0lBQ25ELGlEQUFpRDtJQUNqRCwrQ0FBK0M7SUFDL0MsdUNBQXVDO0lBQ3ZDLDBFQUEwRTtJQUMxRSx1RkFBdUY7SUFDdkYsUUFBUTtJQUNSLE1BQU07SUFFTixhQUFhO0lBRWIscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLEtBQUs7SUFDTCxpQ0FBaUM7SUFDakMscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLEtBQUs7SUFDTCw0Q0FBNEM7SUFDNUMsbUNBQW1DO0lBQ25DLDBDQUEwQztJQUMxQyxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFFBQVE7SUFDUixNQUFNO0lBQ04sZ0VBQWdFO0lBQ2hFLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsS0FBSztJQUNMLHlDQUF5QztJQUN6QywyREFBMkQ7SUFDM0QsMkNBQTJDO0lBQzNDLDBCQUEwQjtJQUMxQix5RUFBeUU7SUFDekUsSUFBSSxJQUFJLENBQUM7SUFDVCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxXQUFXO1NBQ04sYUFBYSxFQUFFO1NBQ2YsTUFBTSxFQUFFO1NBQ1IsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFO0lBQ2QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDLENBQUMifQ==