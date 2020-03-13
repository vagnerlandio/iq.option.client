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
  * Indicator config.
  */
 export interface IIndicatorConfig {
     /**
      * Indicator disponible.
      */
    indicator: Core.Indicator;

    /**
     * Periods.
     */
    periods: number[],

    /**
     * Buy entry.
     */
    buyEntry: {
        /**
         * Condition.
         */
        condition: Core.IndicatorCondition,

        /**
         * Value.
         */
        value: number
    },

     /**
     * Sell entry.
     */
    sellEntry: {
        /**
         * Condition.
         */
        condition: Core.IndicatorCondition,

        /**
         * Value.
         */
        value: number
    }
}