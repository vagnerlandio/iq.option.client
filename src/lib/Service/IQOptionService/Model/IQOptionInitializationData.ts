/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
export interface IQOptionInitializationData {
    binary: IQOptionBinary;
    turbo: IQOptionTurbo;
    currency: string;
    is_buyback: number;
    signals_history: any[];
    groups: { [key: string]: string };
}

export interface IQOptionBinary {
    actives: { [key: string]: IQOptionBinaryActive };
    list: any[];
}

export interface IQOptionBinaryActive {
    name: string;
    group_id: number;
    image: string;
    description: string;
    exchange: string;
    minimal_bet: number;
    maximal_bet: number;
    top_traders_enabled: boolean;
    id: number;
    precision: number;
    option: IQOptionPurpleOption;
    sum: boolean | number;
    enabled: boolean;
    deadtime: number;
    schedule: number[][];
    minmax: IQOptionMinmax;
    start_time: number;
    provider: IQOptionProvider;
    is_buyback: number;
    is_suspended: boolean;
}

export interface IQOptionMinmax {
    min: number;
    max: number;
}

export interface IQOptionPurpleOption {
    profit: IQOptionProfit;
    exp_time: number;
    bet_close_time: { [key: string]: IQOptionPurpleBetCloseTime };
    count: number;
    special: any[] | { [key: string]: IQOptionSpecialValue };
    start_time: number;
}

export interface IQOptionPurpleBetCloseTime {
    enabled: boolean;
    title: boolean | IQOptionTitleEnum;
}

export enum IQOptionTitleEnum {
    FrontEndOfMonth = "front.End of month",
    FrontEndOfWeek = "front.End of week",
}

export interface IQOptionProfit {
    commission: number;
    refund_min: number;
    refund_max: number;
}

export interface IQOptionSpecialValue {
    enabled: boolean;
    title: IQOptionTitleEnum;
}

export enum IQOptionProvider {
    Feed = "feed",
    Otc = "OTC",
}

export interface IQOptionTurbo {
    actives: { [key: string]: IQOptionTurboActive };
    list: any[];
}

export interface IQOptionTurboActive {
    name: string;
    group_id: number;
    image: string;
    description: string;
    exchange: string;
    minimal_bet: number;
    maximal_bet: number;
    top_traders_enabled: boolean;
    id: number;
    precision: number;
    option: IQOptionFluffyOption;
    sum: boolean | number;
    enabled: boolean;
    deadtime: number;
    schedule: number[][];
    minmax: IQOptionMinmax;
    start_time: number;
    provider: IQOptionProvider;
    is_buyback: number;
    is_suspended: boolean;
}

export interface IQOptionFluffyOption {
    profit: IQOptionProfit;
    exp_time: number;
    bet_close_time: { [key: string]: IQOptionFluffyBetCloseTime };
    count: number;
    special: any[];
    start_time: number;
}

export interface IQOptionFluffyBetCloseTime {
    enabled: boolean;
    title: boolean;
}
