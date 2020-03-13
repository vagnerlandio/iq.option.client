"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
const Winston = require("winston");
/**
 * Logger helper.
 */
class LoggerHelper {
    /**
     * Load service.
     */
    static load() {
        if (LoggerHelper.logger === undefined) {
            const transports = {
                console: new Winston.transports.Console({
                    level: process.env.LOG_LEVEL || "silly",
                    format: Winston.format.combine(Winston.format.colorize(), Winston.format.simple())
                })
            };
            LoggerHelper.logger = Winston.createLogger({
                transports: [transports.console]
            });
        }
        return LoggerHelper.logger;
    }
}
exports.logger = () => LoggerHelper.load();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VySGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9IZWxwZXIvTG9nZ2VySGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7R0FPRztBQUNILG1DQUFtQztBQUVuQzs7R0FFRztBQUNILE1BQU0sWUFBWTtJQUNkOztPQUVHO0lBQ0ksTUFBTSxDQUFDLElBQUk7UUFDZCxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ25DLE1BQU0sVUFBVSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO29CQUNwQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksT0FBTztvQkFDdkMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUMxQixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUN6QixPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUMxQjtpQkFDSixDQUFDO2FBQ0wsQ0FBQztZQUNGLFlBQVksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztnQkFDdkMsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQzthQUNuQyxDQUFDLENBQUM7U0FDTjtRQUNELE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDO0NBTUo7QUFDWSxRQUFBLE1BQU0sR0FBRyxHQUFtQixFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDIn0=