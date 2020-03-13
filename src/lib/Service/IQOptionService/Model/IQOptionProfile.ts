/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

/**
 * IQ Option Profile.
 */
export interface IQOptionProfile {
    account_status: string;
    address: string;
    auth_two_factor: null;
    avatar: string;
    balance: number;
    balance_id: number;
    balance_type: number;
    balances: IQOptionBalance[];
    birthdate: boolean;
    bonus_total_wager: number;
    bonus_wager: number;
    cashback_level_info: IQOptionCashbackLevelInfo;
    city: string;
    client_category_id: number;
    confirmation_required: number;
    confirmed_phones: any[];
    country_id: number;
    created: number;
    currency: string;
    currency_char: string;
    currency_id: number;
    demo: number;
    deposit_count: number;
    deposit_in_one_click: boolean;
    email: string;
    finance_state: string;
    first_name: string;
    flag: string;
    forget_status: IQOptionForgetStatus;
    functions: IQOptionFunctions;
    gender: string;
    group_id: number;
    id: number;
    infeed: number;
    is_activated: boolean;
    is_islamic: boolean;
    is_vip_group: boolean;
    kyc: IQOptionKyc;
    kyc_confirmed: boolean;
    last_name: string;
    last_visit: boolean;
    locale: string;
    mask: string;
    messages: number;
    money: IQOptionMoney;
    name: string;
    nationality: string;
    need_phone_confirmation: null;
    new_email: string;
    nickname: null;
    personal_data_policy: IQOptionPersonalDataPolicy;
    phone: string;
    popup: any[];
    postal_index: string;
    public: number;
    rate_in_one_click: boolean;
    site_id: number;
    skey: string;
    socials: IQOptionSocials;
    ssid: boolean;
    tc: boolean;
    timediff: number;
    tin: string;
    tournaments_ids: null;
    trade_restricted: boolean;
    trial: boolean;
    tz: string;
    tz_offset: number;
    user_circle: string;
    user_group: string;
    user_id: number;
    welcome_splash: number;
}

export interface IQOptionBalance {
    id: number;
    user_id: number;
    type: number;
    amount: number;
    enrolled_amount: number;
    enrolled_sum_amount: number;
    hold_amount: number;
    orders_amount: number;
    auth_amount: number;
    equivalent: number;
    currency: string;
    tournament_id: null;
    tournament_name: null;
    is_fiat: boolean;
    is_marginal: boolean;
    has_deposits: boolean;
}

export interface IQOptionCashbackLevelInfo {
    enabled: boolean;
}

export interface IQOptionForgetStatus {
    status: string;
    created: null;
    expires: null;
}

export interface IQOptionFunctions {
    popup_ids: IQOptionPopupIDS;
    ext_fields: IQOptionSocials;
    is_vip_mode: number;
    is_bonus_block: number;
    is_no_currency_change: number;
    is_trading_bonus_block: number;
}

export interface IQOptionSocials {}

export interface IQOptionPopupIDS {
    "0": string;
}

export interface IQOptionKyc {
    status: number;
    isPhoneFilled: boolean;
    isPhoneNeeded: boolean;
    isProfileFilled: boolean;
    isProfileNeeded: boolean;
    isRegulatedUser: boolean;
    daysLeftToVerify: number;
    isPhoneConfirmed: boolean;
    isDocumentsNeeded: boolean;
    isDocumentsApproved: boolean;
    isDocumentsDeclined: boolean;
    isDocumentsUploaded: boolean;
    isDocumentPoaUploaded: boolean;
    isDocumentPoiUploaded: boolean;
    isDocumentsUploadSkipped: boolean;
    isPhoneConfirmationSkipped: boolean;
}

export interface IQOptionMoney {
    deposit: IQOptionDeposit;
    withdraw: IQOptionDeposit;
}

export interface IQOptionDeposit {
    min: number;
    max: number;
}

export interface IQOptionPersonalDataPolicy {
    is_call_accepted: IQOptionIsAccepted;
    is_push_accepted: IQOptionIsAccepted;
    is_email_accepted: IQOptionIsAccepted;
    is_agreement_accepted: IQOptionIsAccepted;
    is_thirdparty_accepted: IQOptionIsAccepted;
}

export interface IQOptionIsAccepted {
    status: boolean | null;
}
