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
  * Strategy config.
  */
 export interface IStrategyConfig {
    /**
     * Strategy name..
     */ 
    strategy: Core.Strategy,

     /**
      * Balance available.
      */
     balanceAvailable: number,

     /**
      * Balance in currency.
      */
     balanceInCurrency: Core.StrategyCurrency,

     /**
      * Value type.
      */
     valueType: Core.StrategyValueType,

     /**
      * Value.
      */
     value: number,

     /**
      * Market.
      */
     market: string, // iq option client.

     /**
      * Percent gain.
      */
     percentGain: number,

     /**
      * Time.
      */
     time: number, // iq option client

     /**
      * Test???
      */
     test: boolean
}