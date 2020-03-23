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
const axios_1 = require("axios");
const http = require("http");
const https = require("https");
const qs = require("querystring");
const Core = require("../..");
/**
 * IQOptionWrapper
 */
class IQOptionWrapper {
    /**
     * Constructor;
     *
     * @param email
     * @param password
     */
    constructor(email, password) {
        /**
         * Endpoint.
         */
        this.endpoint = "https://auth.iqoption.com";
        Core.logger().silly("IQOptionWrapper::constructor");
        this.email = email;
        this.password = password;
        this.client = axios_1.default.create({
            httpAgent: new http.Agent({ keepAlive: true }),
            httpsAgent: new https.Agent({ keepAlive: true }),
        });
    }
    /**
     * Connect to api.
     */
    auth() {
        Core.logger().silly("IQOptionWrapper::auth");
        return this.request("api/v1.0/login", {
            email: this.email,
            password: this.password,
        })
            .then((r) => r.data.ssid)
            .catch((e) => Promise.reject(e));
    }
    /**
     * Http request.
     *
     * @param path
     * @param data
     */
    request(path, data) {
        Core.logger().silly("IQOptionWrapper::request");
        const options = {};
        options.method = "POST";
        options.baseURL = this.endpoint;
        options.url = path;
        options.headers = {
            "Content-type": "application/x-www-form-urlencoded",
            Accept: "application/json",
        };
        options.data = qs.stringify(data);
        return this.client
            .request(options)
            .then((response) => Promise.resolve(response.data))
            .catch((e) => Promise.reject(e.response.data));
    }
}
exports.IQOptionWrapper = IQOptionWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVFPcHRpb25XcmFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9TZXJ2aWNlL0lRT3B0aW9uU2VydmljZS9JUU9wdGlvbldyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsaUNBQTZDO0FBQzdDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0Isa0NBQWtDO0FBQ2xDLDhCQUE4QjtBQUU5Qjs7R0FFRztBQUNILE1BQWEsZUFBZTtJQXFCeEI7Ozs7O09BS0c7SUFDSCxZQUFtQixLQUFhLEVBQUUsUUFBZ0I7UUExQmxEOztXQUVHO1FBQ2MsYUFBUSxHQUFXLDJCQUEyQixDQUFDO1FBd0I1RCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDOUMsVUFBVSxFQUFFLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUNuRCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxJQUFJO1FBQ1AsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtZQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUM7YUFDRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3hCLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLE9BQU8sQ0FBQyxJQUFZLEVBQUUsSUFBVTtRQUNwQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDaEQsTUFBTSxPQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNuQixPQUFPLENBQUMsT0FBTyxHQUFHO1lBQ2QsY0FBYyxFQUFFLG1DQUFtQztZQUNuRCxNQUFNLEVBQUUsa0JBQWtCO1NBQzdCLENBQUM7UUFDRixPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsT0FBTyxJQUFJLENBQUMsTUFBTTthQUNiLE9BQU8sQ0FBQyxPQUFPLENBQUM7YUFDaEIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDSjtBQXhFRCwwQ0F3RUMifQ==