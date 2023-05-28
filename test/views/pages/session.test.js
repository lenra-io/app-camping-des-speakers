describe("buildContentChildren", () => {
    test("check for all sessions", () => {
        const sessions = require("../../../src/camping-data").sessions;
        for (const session of Object.values(sessions)) {
            const children = buildContentChildren(session.children);
            expect(children).not.toBeEmpty();
        }
    });
});