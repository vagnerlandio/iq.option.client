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
    // const currency = Core.IQOptionCurrency.USD;
    // const profitPercent = 87;
    // const market = Core.IQOptionMarket.EURUSD_OTC;
    // const time = Core.IQOptionTime.ONE_MINUTE;
    // const candleStream = new Core.IQOptionStreamCandleGenerated(
    //     iqOptionApi.getIQOptionWs(),
    //     market,
    //     time
    // );
    // const balance = findUserBalanceFiat(profile.balances, currency, true);
    iqOptionApi.getIQOptionWs().socket().on("message", data => console.log(data));
    await Core.sleepHelper(2000);
    await iqOptionApi.getIQOptionWs().send(Core.IQOptionName.SEND_MESSAGE, { "name": "get-instruments", "version": "4.0", "body": { "type": "cfd" } });
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
    // iqOptionApi
    //     .getIQOptionWs()
    //     .socket()
    //     .on("message", data => console.log(data));
})
    .catch((e) => {
    Core.logger().error(JSON.stringify(e));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVFPcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmluL0lRT3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7R0FPRztBQUNILCtCQUErQjtBQUUvQixNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQ3BDLHlCQUF5QixFQUN6QixXQUFXLENBQ2QsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQWlCVDtJQUNBLElBQUksRUFBRSxFQUFFO0lBQ1IsS0FBSyxFQUFFLEVBQUU7SUFDVCxJQUFJLEVBQUUsRUFBRTtJQUNSLEdBQUcsRUFBRSxFQUFFO0NBQ0gsQ0FBQztBQUVJLFFBQUEsbUJBQW1CLEdBQUcsQ0FDL0IsUUFBZ0MsRUFDaEMsUUFBK0IsRUFDL0IsT0FBZ0IsS0FBSyxFQUNELEVBQUU7SUFDdEIsSUFBSSxJQUFJLEVBQUU7UUFDTixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQ2xCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUNqRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ1I7SUFDRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQ2xCLENBQUMsQ0FBQyxFQUFFLENBQ0EsQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUMzRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ1QsQ0FBQyxDQUFDO0FBRUYsV0FBVztLQUNOLFlBQVksRUFBRTtLQUNkLElBQUksQ0FBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLEVBQUU7SUFDbEIsVUFBVTtJQUNWLDhDQUE4QztJQUM5Qyw0QkFBNEI7SUFDNUIsaURBQWlEO0lBQ2pELDZDQUE2QztJQUU3QywrREFBK0Q7SUFDL0QsbUNBQW1DO0lBQ25DLGNBQWM7SUFDZCxXQUFXO0lBQ1gsS0FBSztJQUVMLHlFQUF5RTtJQUN6RSxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDNUIsTUFBTSxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxFQUFDLENBQUMsQ0FBQztJQUd6SSxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLDJEQUEyRDtJQUMzRCx1Q0FBdUM7SUFDdkMseUNBQXlDO0lBQ3pDLHNDQUFzQztJQUN0QyxxQ0FBcUM7SUFDckMsaURBQWlEO0lBQ2pELG1EQUFtRDtJQUNuRCxpREFBaUQ7SUFDakQsK0NBQStDO0lBQy9DLHVDQUF1QztJQUN2QywwRUFBMEU7SUFDMUUsdUZBQXVGO0lBQ3ZGLFFBQVE7SUFDUixNQUFNO0lBRU4sYUFBYTtJQUViLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixLQUFLO0lBQ0wsaUNBQWlDO0lBQ2pDLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixLQUFLO0lBQ0wsNENBQTRDO0lBQzVDLG1DQUFtQztJQUNuQywwQ0FBMEM7SUFDMUMsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxRQUFRO0lBQ1IsTUFBTTtJQUNOLGdFQUFnRTtJQUNoRSxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLEtBQUs7SUFDTCx5Q0FBeUM7SUFDekMsMkRBQTJEO0lBQzNELDJDQUEyQztJQUMzQywwQkFBMEI7SUFDMUIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsaURBQWlEO0FBQ3JELENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFO0lBQ2QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDLENBQUMifQ==