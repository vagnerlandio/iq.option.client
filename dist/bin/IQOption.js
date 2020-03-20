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
        .on("message", data => console.log(data));
})
    .catch((e) => {
    Core.logger().error(JSON.stringify(e));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVFPcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmluL0lRT3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7R0FPRztBQUNILCtCQUErQjtBQUUvQixNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQ3BDLHlCQUF5QixFQUN6QixXQUFXLENBQ2QsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQWlCVDtJQUNBLElBQUksRUFBRSxFQUFFO0lBQ1IsS0FBSyxFQUFFLEVBQUU7SUFDVCxJQUFJLEVBQUUsRUFBRTtJQUNSLEdBQUcsRUFBRSxFQUFFO0NBQ0gsQ0FBQztBQUVJLFFBQUEsbUJBQW1CLEdBQUcsQ0FDL0IsUUFBZ0MsRUFDaEMsUUFBK0IsRUFDL0IsT0FBZ0IsS0FBSyxFQUNELEVBQUU7SUFDdEIsSUFBSSxJQUFJLEVBQUU7UUFDTixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQ2xCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUNqRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ1I7SUFDRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQ2xCLENBQUMsQ0FBQyxFQUFFLENBQ0EsQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUMzRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ1QsQ0FBQyxDQUFDO0FBRUYsV0FBVztLQUNOLFlBQVksRUFBRTtLQUNkLElBQUksQ0FBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLEVBQUU7SUFDbEIsVUFBVTtJQUNWLDhDQUE4QztJQUM5Qyw0QkFBNEI7SUFDNUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDMUMsNkNBQTZDO0lBQzdDLE1BQU0sWUFBWSxHQUFHLE1BQU0sV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUUxQixtRUFBbUU7SUFDbkUsOEJBQThCO0lBQzlCLCtEQUErRDtJQUMvRCxtQ0FBbUM7SUFDbkMsY0FBYztJQUNkLFdBQVc7SUFDWCxLQUFLO0lBRUwseUVBQXlFO0lBQ3pFLGlGQUFpRjtJQUNqRiwrQkFBK0I7SUFDL0Isc0xBQXNMO0lBQ3RMLGlMQUFpTDtJQUNqTCw0RUFBNEU7SUFFNUUsZUFBZTtJQUNmLG9DQUFvQztJQUNwQywyREFBMkQ7SUFDM0QsdUNBQXVDO0lBQ3ZDLHlDQUF5QztJQUN6QyxzQ0FBc0M7SUFDdEMscUNBQXFDO0lBQ3JDLGlEQUFpRDtJQUNqRCxtREFBbUQ7SUFDbkQsaURBQWlEO0lBQ2pELCtDQUErQztJQUMvQyx1Q0FBdUM7SUFDdkMsMEVBQTBFO0lBQzFFLHVGQUF1RjtJQUN2RixRQUFRO0lBQ1IsTUFBTTtJQUVOLGFBQWE7SUFFYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsS0FBSztJQUNMLGlDQUFpQztJQUNqQyxxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsS0FBSztJQUNMLDRDQUE0QztJQUM1QyxtQ0FBbUM7SUFDbkMsMENBQTBDO0lBQzFDLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsUUFBUTtJQUNSLE1BQU07SUFDTixnRUFBZ0U7SUFDaEUsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixLQUFLO0lBQ0wseUNBQXlDO0lBQ3pDLDJEQUEyRDtJQUMzRCwyQ0FBMkM7SUFDM0MsMEJBQTBCO0lBQzFCLHlFQUF5RTtJQUN6RSxJQUFJLElBQUksQ0FBQztJQUNULElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELFdBQVc7U0FDTixhQUFhLEVBQUU7U0FDZixNQUFNLEVBQUU7U0FDUixFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFO0lBQ2QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDLENBQUMifQ==