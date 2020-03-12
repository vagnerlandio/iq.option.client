/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import moment = require("moment");
import { IQOptionTime } from "./Model";

/**
 * IQOption Expired.
 *
 * @param time
 */
export const iqOptionExpired = (time: IQOptionTime): number => {
    const m = moment()
        .add(time, "minutes")
        .utcOffset(0);
    m.set({ second: 0, millisecond: 0 });
    return m.unix();
};
