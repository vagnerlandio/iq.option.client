/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as Core from "./";

/**
 * Monitor handler.
 */
export class MainHandler {
    /**
     * Start monitor.
     */
    public startStrategy(): Promise<void> {
        Core.logger().info(`${Core.timestampHelper()} IQOptionBot started`);
        // return Core.build(this.environment).then(() => {
        //     return Core.Bootstrap.loadServices(this.environment).then(() => {
        //         return Promise.resolve(Core.StrategyBuild.build());
        //     });
        // });
        return Promise.resolve();
    }
}
