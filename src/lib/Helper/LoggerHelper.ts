/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as Winston from "winston";

/**
 * Logger helper.
 */
class LoggerHelper {
    /**
     * Load service.
     */
    public static load(): Winston.Logger {
        if (LoggerHelper.logger === undefined) {
            const transports = {
                console: new Winston.transports.Console({
                    level: process.env.LOG_LEVEL || "silly",
                    format: Winston.format.combine(
                        Winston.format.colorize(),
                        Winston.format.simple()
                    ),
                }),
            };
            LoggerHelper.logger = Winston.createLogger({
                transports: [transports.console],
            });
        }
        return LoggerHelper.logger;
    }

    /**
     * Public attribute logger.
     */
    private static logger: Winston.Logger;
}
export const logger = (): Winston.Logger => LoggerHelper.load();
