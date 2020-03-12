/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
// import moment = require("moment");
// import { logger } from "../lib/Helper";
// import { IQOptionWrapper } from "../lib/Service/IQOptionService/IQOptionWrapper";
// import { IQOptionWs } from "../lib/Service/IQOptionService/IQOptionWs";
//
// const iqOptionClient = new IQOptionWrapper("", "");

// iqOptionClient
//     .auth()
//     .then(async ssid => {
//         const iqOptionWs = new IQOptionWs(ssid);
//         await iqOptionWs.connect();
//         await iqOptionWs.send("ssid", ssid);
//         setInterval(
//             async () =>
//                 iqOptionWs.send("subscribeMessage", {
//                     name: "get-instruments",
//                     version: "4.0",
//                     body: { type: "crypto" }
//                 }),
//             2000
//         );
//         setTimeout(async () => {
//             await iqOptionWs.send("subscribeMessage", {
//                 name: "candle-generated",
//                 params: { routingFilters: { active_id: 1, size: 5 } }
//             });
//             // await iqOptionWs.send("subscribeMessage", {"name":"get-instruments","version":"4.0","body":{"type":"cfd"}});
//             // await iqOptionWs.send("subscribeMessage", {"name":"get-instruments","version":"4.0","body":{"type":"forex"}});
//
//             // {"name":"subscribeMessage","request_id":"s_99","msg":}}
//             // {"name":"sendMessage","request_id":"2","msg":{"name":"get-currency","version":"5.0","body":{"name":"USD"}}}
//         }, 1000);

// {"name":"subscribeMessage","request_id":"s_152","msg":}}

// setInterval(async () => {
//     // {"name":"sendMessage","request_id":"212","msg":{"name":"binary-options.open-option","version":"1.0","body":{"user_balance_id":260439919,"active_id":1,"option_type_id":3,"direction":"call","expired":1583948880,"refund_value":0,"price":1.0,"value":1128175,"profit_percent":83}}}
//     // const  =  Number(String(Date.now() + 5 * 60 * 1000).slice(0, 10));
//     const m = moment().add(5, 'minutes').utcOffset(0);
//     m.set({second:0,millisecond:0});
//     const expired = m.unix();
//     // console.log();
//     const msg = {"name":"binary-options.open-option","version":"1.0","body":{"user_balance_id":260439919,"active_id":1,"option_type_id":3,"direction":"call","expired":expired,"refund_value":0,"price":100.0}};
//     await iqOptionWs.send("sendMessage", msg);
//     // logger().info(`SEND ORDER ${Date.now()}`)
// }, 1000);

//
// })
// .catch(e => logger().error(e.error));
import * as Core from "../lib"
const iqOptionApi = new Core.IQOptionApi("liie.m@excelbangkok.com", "Code11054");
iqOptionApi
    .connectAsync()
    .then(async () => {
        await Core.sleepHelper(1000);
        const candleStream = new Core.IQOptionStreamCandleGenerated(
            iqOptionApi.getIQOptionWs(),
            Core.IQOptionMarket.EURUSD,
            Core.IQOptionTime.FIVE_MINUTES
        );
        await candleStream.startStream();
        candleStream.on("data", data => Core.logger().info(JSON.stringify(data)));
        // t.on("data", () => {});
    })
    .catch((e: any) => {
        Core.logger().error(JSON.stringify(e));
    });
