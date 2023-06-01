import { DataApi } from "@lenra/app-server";
import { View } from "@lenra/components";
import { Favorite } from "./classes/Favorite.js";
import { views } from "./index.gen.js";

export const lenraRoutes = [
    {
        path: "/",
        view: View(views.layout).props({
            page: views.pages.agenda,
            find: {
                coll: DataApi.collectionName(Favorite),
                query: { user: "@me" },
            }
        })
            .data(DataApi.collectionName(Favorite), {}),
    },
    {
        path: "/sessions/:key",
        view: View(views.layout)
            .props({
                page: views.pages.session,
            })
            .context({
                "pathParams": true
            }),
    },
    {
        path: "/speakers",
        view: View(views.layout).props({ page: views.pages.speakerList }),
    },
    {
        path: "/speakers/:key",
        view: View(views.layout)
            .props({
                page: views.pages.speaker,
            })
            .context({
                "pathParams": true
            }),
    },
    {
        path: "/map",
        view: View(views.layout).props({ page: views.pages.map }),
    }
]