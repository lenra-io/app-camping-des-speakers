import { sessions, speakers } from "../../../src/camping-data.js";
import { default as buildSpeaker } from "../../../src/views/pages/speaker.js";

// const schema = "https://raw.githubusercontent.com/lenra-io/components-api/beta/api/component.schema.json";

describe("speaker page", () => {
    describe("snapshot", () => {
        test.each(Object.keys(speakers))("%s", key => {
            const component = buildSpeaker([], { context: { pathParams: { key } } });
            expect(component.toJSON()).toMatchSnapshot();
        });
    });

    // TODO: ajout la validation JSON Schema 
});
