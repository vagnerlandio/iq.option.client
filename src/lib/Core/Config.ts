/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as FileSystem from "fs";
import * as Core from "..";

/**
 * Config.
 */
export abstract class Config {
    /**
     * Buid config.
     */
    public static build(): Promise<void> {
        Core.logger().silly(`Application::build`);
        return new Promise((resolve, reject) => {
            FileSystem.copyFile(
                "config.sample.json",
                "config.json",
                (err: any) => {
                    if (err) {
                        reject(err);
                    }
                    resolve();
                }
            );
        })
            .then(() => Config.loadConfig())
            .then(() => Promise.resolve())
            .catch(e => Promise.reject(e));
    }

    /**
     * Load config.
     */
    private static loadConfig(): Promise<Core.IConfig> {
        if (!Core.global.config) {
            return new Promise((resolve, reject) => {
                FileSystem.readFile(
                    "./config.json",
                    (errorMessage, fileRead) => {
                        if (errorMessage) {
                            return reject(errorMessage);
                        }
                        const parseFile = JSON.parse(fileRead.toString());
                        Core.logger().silly(
                            `${new Date().toISOString()} Bootstrap::getConfig[${JSON.stringify(
                                parseFile
                            )}]`
                        );
                        Core.global.config = parseFile;
                        return resolve(parseFile);
                    }
                );
            });
        }
        return Promise.resolve(Core.global.config);
    }
}
