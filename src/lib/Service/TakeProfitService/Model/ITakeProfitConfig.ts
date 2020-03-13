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
 * Take profit config.
 */
export interface ITakeProfitConfig {
    /**
     * Types.
     */
    type: Core.TakeProfitType;

    /**
     * Value.
     */
    value: number;

    /**
     * Trailing.
     */
    trailing?: boolean;
}
