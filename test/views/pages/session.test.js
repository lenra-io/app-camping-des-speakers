import { sessions, speakers } from "../../../src/camping-data.js";
import { default as buildSession } from "../../../src/views/pages/session.js";

// const schema = "https://raw.githubusercontent.com/lenra-io/components-api/beta/api/component.schema.json";

describe("session page", () => {
    describe("snapshot", () => {
        test.each(Object.keys(sessions))("%s", key => {
            const component = buildSession([], { context: { pathParams: { key } } });
            expect(component.toJSON()).toMatchSnapshot();
        });
    });

    // TODO: ajout la validation JSON Schema 
});
