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
 * Stop loss build.
 */
export abstract class StopLossServiceBuild {
    /**
     * Build.
     */
    public static build(): Promise<void> {
        Core.logger().silly(`${Core.timestampHelper()} StopLossServiceBuild`);
        if (!this.hasStopLoss()) {
            return Promise.resolve();
        }
        const stopLossService = new Core.StopLossService();
        return Promise.all([
            Core.EventManager.registerEvent(
                Core.StopLossEvent.STOP_LOSS_OBSERVABLE,
                () => stopLossService.stopLossObservable()
            )
        ])
            .then(() => Promise.resolve())
            .catch(e => Promise.reject(e));
    }

    /**
     * Has stop loss.
     */
    public static hasStopLoss(): boolean {
        return Core.global.config.stopLoss !== undefined;
    }
}
