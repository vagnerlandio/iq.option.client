/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

/**
 * IQ option action.
 */
export enum IQOptionAction {
    CANDLE_GENERATED = "candle-generated",
    PROFILE = "profile",
    BINARY_OPEN_OPTION = "binary-options.open-option",
    BINARY_OPTION_OPENED = "option-opened",
    BINARY_OPTION_CLOSE = "option-closed",
    BINARY_OPTION_REJECT = "option-rejected",
    GET_INSTRUMENTS = "get-instruments"
}
