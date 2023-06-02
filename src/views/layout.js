import { Container, Flex, Flexible, padding, View } from "@lenra/components";
import { views } from "../index.gen.js";

export default function (_data, { page/* , context */ }, context) {
  const pageView = View(page);
  // if (context) pageView.context(context);
  if (context) pageView.props({ context });
  return Flex([
    View(views.menu),
    Flexible(
      Flex([
        Container(
          pageView
        )
          .maxWidth(page === views.pages.speakerList ? 1600 : 800)
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

