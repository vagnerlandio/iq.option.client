/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

/**
 * Indicator condition.
 */
export enum IndicatorCondition {
    /**
     * Condition (<).
     */
    LESS_THAN = "LESS_THAN",

    /**
     * Condition (>).
     */
    GREATER_THAN = "GREATER_THAN",

    /**
     * Condition (<=).
     */
    LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",

    /**
     * Greater (>=).
     */
    GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",

    /**
     * Condition (==).
     */
    EQUAL_TO = "EQUAL_TO",

    /**
     * Condtion (!=).
     */
    NOT_EQUAL_TO = "NOT_EQUAL_TO"
}
