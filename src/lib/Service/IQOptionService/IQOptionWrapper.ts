/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import axios, { AxiosInstance } from "axios";
import * as http from "http";
import * as https from "https";
import * as qs from "querystring";
import * as Core from "../..";

/**
 * IQOptionWrapper
 */
export class IQOptionWrapper {
    /**
     * Endpoint.
     */
    private readonly endpoint: string = "https://auth.iqoption.com";

    /**
     * E-mail.
     */
    private readonly email: string;

    /**
     * Password.
     */
    private readonly password: string;

    /**
     * Client.
     */
    private readonly client: AxiosInstance;

    /**
     * Constructor;
     *
     * @param email
     * @param password
     */
    public constructor(email: string, password: string) {
        Core.logger().silly("IQOptionWrapper::constructor");
        this.email = email;
        this.password = password;
        this.client = axios.create({
            httpAgent: new http.Agent({ keepAlive: true }),
            httpsAgent: new https.Agent({ keepAlive: true }),
        });
    }

    /**
     * Connect to api.
     */
    public auth(): Promise<string> {
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
    private request(path: string, data?: any) {
        Core.logger().silly("IQOptionWrapper::request");
        const options: any = {};
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
