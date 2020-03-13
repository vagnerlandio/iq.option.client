// jest.mock("../../src/shared/tools/logger.ts");

import { IQOptionWrapper } from "../src/lib/Service/IQOptionService/IQOptionWrapper";

describe("IqOptionApi", () => {
    describe("IqOptionClient", () => {
        test("Should return authenticate user", async done => {
            const iqOptionClient = new IQOptionWrapper("", "");
            done();
        });
    });
});
