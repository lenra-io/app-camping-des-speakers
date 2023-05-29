import { sessions, speakers, sponsors } from "../../src/camping-data.js";
import { buildContentChildren } from "../../src/utils/contentDescriber.js";

describe("buildContentChildren", () => {
    test.each(Object.entries(sessions))("check sessions %s", (_key, session) => {
        const children = buildContentChildren(session.children);
        expect(children).toBeDefined();
    });
});

describe("buildContentChildren", () => {
    test.each(Object.entries(speakers))("check speaker %s", (_key, session) => {
        const children = buildContentChildren(session.children);
        expect(children).toBeDefined();
    });
});

describe("buildContentChildren", () => {
    test.each(Object.entries(sponsors))("check sponsor %s", (_key, session) => {
        const children = buildContentChildren(session.children);
        expect(children).toBeDefined();
    });
});