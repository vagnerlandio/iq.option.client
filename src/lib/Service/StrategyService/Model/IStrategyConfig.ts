/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as IQOptionClient from "iqoption.client";
import * as Core from "./";

/**
 * Strategy config.
 */
export interface IStrategyConfig {
    /**
     * Strategy name..
     */

    strategy: Core.Strategy;

    /**
     * Balance available.
     */
    balanceAvailable: number;

    /**
     * Balance in currency.
     */
    balanceInCurrency: IQOptionClient.IQOptionCurrency;

    /**
     * Value type.
     */
    valueType: Core.StrategyValueType;

    /**
     * Value.
     */
    value: number;

    /**
     * Market.
     */
    market: IQOptionClient.IQOptionMarket;

    /**
     * Percent gain.
     */
    percentGain: number;

    /**
     * Time.
     */
    time: IQOptionClient.IQOptionTime;

    /**
     * Test???
     */
    test: boolean;
}
