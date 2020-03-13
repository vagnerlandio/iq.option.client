/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as Core from "..";

/**
 * Config.
 */
export interface Config {
    /**
     * Strategy.
     */
    strategy: Core.IStrategyConfig,

    /**
     * Conditions.
     */
    conditions: Core.IIndicatorConfig[],

    /**
     * Stop loss default configuration.
     */
    stopLoss?: Core.IStopLossConfig, 

    /**
     * Take profit default configuration.
     */
    takeProfit?: Core.ITakeProfitConfig
}