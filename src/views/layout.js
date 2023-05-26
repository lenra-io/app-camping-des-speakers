import { Container, Flex, Flexible, padding, View } from "@lenra/components";
import { views } from "../index.gen.js";

export default function (_data, { page }) {
  return Flex([
    View(views.menu),
    Flexible(
      Flex([
        Container(
          View(page)
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

