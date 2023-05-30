import { View } from "@lenra/components";
import { views } from "./index.gen.js";

export const lenraRoutes = [
    {
        path: "/",
        view: View(views.layout).props({ page: views.pages.agenda }),
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
        view: View(views.layout).props({ page: views.pages.speakers }),
    },
    {
        path: "/map",
        view: View(views.layout).props({ page: views.pages.map }),
    }
]