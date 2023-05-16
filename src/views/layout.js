import { Flex, Flexible, View } from "@lenra/components";
import { views } from "../index.gen.js";

export default function (_data, { page }) {
  return Flex([
    View(views.menu),
    Flexible(
      View(page)
    ),
    View(views.navbar).props({ page }),
  ])
    .direction("vertical")
    .crossAxisAlignment("center")
}

