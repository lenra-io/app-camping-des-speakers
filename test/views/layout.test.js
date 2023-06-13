import { sessions, speakers } from "../../src/camping-data.js";
import { views } from "../../src/index.gen.js";
import { filAriane } from "../../src/views/layout.js";

// TODO: gerer les tests de methodes non exportees (rewire ne semble pas fonctionner)
describe("fil d'Ariane", () => {

    describe("snapshot", () => {
        test("agenda", () => {
            const component = filAriane(views.pages.agenda.toJSON());
            expect(component.toJSON()).toMatchSnapshot();
        });

        test("speakerList", () => {
            const component = filAriane(views.pages.speakerList);
            expect(component.toJSON()).toMatchSnapshot();
        });

        test("map", () => {
            const component = filAriane(views.pages.map);
            expect(component.toJSON()).toMatchSnapshot();
        });

        describe("session", () => {
            test.each(Object.keys(sessions))("%s", key => {
                const component = filAriane(views.pages.session, { pathParams: { key } });
                expect(component.toJSON()).toMatchSnapshot();
            });
        });

        describe("speaker", () => {
            test.each(Object.keys(speakers))("%s", key => {
                const component = filAriane(views.pages.speaker, { pathParams: { key } });
                expect(component.toJSON()).toMatchSnapshot();
            });
        });
    });
});