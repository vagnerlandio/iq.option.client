/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

/**
 * Strategy.
 */
export enum Strategy{
    /**
     * Simple continuos trade.
     */
    SIMPLE = 'simple',

    /**
     * Strategy Gerge Soros.
     */
    SOROS = 'soros',

    /**
     * Strategy Martingale.
     */
    MARTINGALE = 'martingale'
}