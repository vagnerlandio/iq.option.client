/*
 * Copyright (C) 2019 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
// import * as Core from ".";

// /**
//  * Monitor handler.
//  */
// export class MainHandler {
//     /**
//      * Environment.
//      */
//     private readonly environment: Core.IEnvironment;

//     /**
//      * Monitor constructor.
//      *
//      * @param environment
//      */
//     public constructor(environment: Core.IEnvironment) {
//         this.environment = environment;
//     }

//     /**
//      * Start monitor.
//      */
//     public start(): Promise<void> {
//         Core.logger().info(`${Core.timestampHelper()} api xcap start.`);
//         return Core.build(this.environment)
//             .then(() => Core.Config.loadConfig())
//             .then(() => Core.MongoDBBuild.build())
//             .then(() => Core.MailBuild.build())
//             .then(() => new Core.Server().start())
//             .catch(e => Promise.reject(e));
//     }
// }
