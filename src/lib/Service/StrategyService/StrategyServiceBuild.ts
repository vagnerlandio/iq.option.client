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
 * Strategy build.
 */
export abstract class StrategyServiceBuild {
    /**
     * Build.
     */
    public static build(): Promise<void> {
        return Promise.all([
            Core.IndicatorServiceBuild.build(),
            Core.StopLossServiceBuild.build(),
            Core.TakeProfitServiceBuild.build()
        ])
            .then(() => Promise.resolve())
            .catch(e => Promise.reject(e));
    }

    /**
     * Have a strategy?
     */
    public static haveAStrategy(): boolean {
        return Core.global.config.conditions.length > 0;
    }
}
