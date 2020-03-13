/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as Core from "../lib";
new Core.MainHandler()
    .startStrategy()
    .then()
    .catch(e => Core.logger().error(JSON.stringify(e)));
