import { Container, Flex, Flexible, padding, View } from "@lenra/components";
import { views } from "../index.gen.js";

export default function (_data, { page/* , context */, find, maxWidth }, context) {
  if (!maxWidth) maxWidth = 800;
  const pageView = View(page);
  // if (context) pageView.context(context);
  if (context) pageView.props({ context });
  if (find) pageView.find(find);
  return Flex([
    View(views.menu),
    Flexible(
      Flex([
        Container(
          pageView
        )
          .maxWidth(maxWidth)
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

