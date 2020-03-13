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
 * Indicator build.
 */
export abstract class IndicatorServiceBuild {
    /**
     * Build.
     */
    public static build(): Promise<void> {
        Core.logger().silly(
            `${Core.timestampHelper()} IndicatorServiceBuild build`
        );
        if (!this.haveIndicator()) {
            return Promise.reject("Indicator is not set.");
        }
        return Promise.resolve();
    }

    /**
     * Have indicator,
     */
    public static haveIndicator(): boolean {
        return Core.global.config.conditions.length > 0;
    }
}
