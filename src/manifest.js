import { Container, Flex, Flexible, View, ViewImpl, padding } from "@lenra/components";
import { views } from "./index.gen.js";

export const lenraRoutes = [
    {
        path: "/",
        view: layout(
            View(views.pages.agenda.toJSON())
        ),
    },
    {
        path: "/sessions/:key",
        view: layout(
            View(views.pages.session)
                .context({
                    "pathParams": true
                })
        ),
    },
    {
        path: "/speakers",
        view: layout(
            View(views.pages.speakers)
        ),
    },
    {
        path: "/map",
        view: layout(
            View(views.pages.map)
        ),
    }
]

/**
 * 
 * @param {ViewImpl} pageView 
 * @returns 
 */
function layout(pageView) {
    const page = pageView.toJSON().name;
    return Flex([
        View(views.menu),
        Flexible(
            Flex([
                Container(
                    pageView
                )
                    .maxWidth(800)
            ])
                .direction("vertical")
                .padding(padding.symmetric(32, 16))
                .crossAxisAlignment("center")
                .scroll(true)
        ),
        View(views.navbar).props({ page }),
    ])
        .direction("vertical")
        .crossAxisAlignment("stretch")
}