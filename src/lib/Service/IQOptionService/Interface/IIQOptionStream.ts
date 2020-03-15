/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

/**
 * Default stream interface.
 */
export interface IIQOptionStream {
    /**
     * Start stream.
     */
    startStream(): Promise<void>;
}
