import { DataApi } from "@lenra/app";
import { View } from "@lenra/app";
import { Favorite } from "./classes/Favorite.js";

export const lenra = {
    routes: [
        {
            path: "/",
            view: View("layout").props({
                page: "pages.agenda",
                find: {
                    coll: DataApi.collectionName(Favorite),
                    query: { user: "@me" },
                }
            })
                .find(Favorite, {}),
        },
        {
            path: "/sessions/:key",
            view: View("layout")
                .props({
                    page: "pages.session",
                    find: {
                        coll: DataApi.collectionName(Favorite),
                        query: { user: "@me" },
                    }
                })
                .context({
                    "pathParams": true
                }),
        },
        {
            path: "/speakers",
            view: View("layout").props({ page: "pages.speakerList", maxWidth: 1600 }),
        },
        {
            path: "/speakers/:key",
            view: View("layout")
                .props({
                    page: "pages.speaker",
                })
                .context({
                    "pathParams": true
                }),
        },
        {
            path: "/map",
            view: View("layout").props({ page: "pages.map", maxWidth: 1044 }),
        }
    ]
};