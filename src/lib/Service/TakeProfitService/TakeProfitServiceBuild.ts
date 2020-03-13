/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as Core from "../..";

/**
 * Take profit build.
 */
export abstract class TakeProfitServiceBuild {
    /**
     * Build.
     */
    public static build(): Promise<void> {
        Core.logger().silly(`${Core.timestampHelper()} TakeProfitServiceBuild`);
        if (!this.hasTakeProfit()) {
            return Promise.resolve();
        }
        return Promise.resolve();
    }

    /**
     * Has take profit.
     */
    public static hasTakeProfit(): boolean {
        return Core.global.config.takeProfit !== undefined;
    }
}
