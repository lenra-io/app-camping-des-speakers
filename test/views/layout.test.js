import { sessions, speakers } from "../../src/camping-data.js";
import { filAriane } from "../../src/views/layout.js";

// TODO: gerer les tests de methodes non exportees (rewire ne semble pas fonctionner)
describe("fil d'Ariane", () => {

    describe("snapshot", () => {
        test("agenda", () => {
            const component = filAriane("pages.agenda");
            expect(component.toJSON()).toMatchSnapshot();
        });

        test("speakerList", () => {
            const component = filAriane("pages.speakerList");
            expect(component.toJSON()).toMatchSnapshot();
        });

        test("map", () => {
            const component = filAriane("pages.map");
            expect(component.toJSON()).toMatchSnapshot();
        });

        describe("session", () => {
            test.each(Object.keys(sessions))("%s", key => {
                const component = filAriane("pages.session", { pathParams: { key } });
                expect(component.toJSON()).toMatchSnapshot();
            });
        });

        describe("speaker", () => {
            test.each(Object.keys(speakers))("%s", key => {
                const component = filAriane("pages.speaker", { pathParams: { key } });
                expect(component.toJSON()).toMatchSnapshot();
            });
        });
    });
});