import { Container, Flex, colors, padding, Icon, Actionable } from "@lenra/components";
import { views } from "../index.gen.js";

const navButtons = [
  {
    icon: "calendar_today",
    path: "/",
    pages: [views.pages.agenda],
  },
  {
    icon: "group",
    path: "/speakers",
    pages: [views.pages.speakers],
  },
  {
    icon: "map",
    path: "/map",
    pages: [views.pages.map],
  },
  /* {
    icon: "sun",
    path: "/meteo",
    pages: [],
  } */
];

export default function (_data, { page }) {
  return Container(
    Flex(
      navButtons.map(({ icon, path, pages }) =>
        Actionable(
          Container(
            Icon(icon)
              .color(colors.Colors.white)
          )
            .padding(padding.all(20))
            .color(pages.includes(page) ? colors.opacity(colors.Colors.white, 0.2) : colors.Colors.transparentMask)
        )
        .onPressed("@lenra:navTo", { path })
      )
    )
      .fillParent(true)
      .mainAxisAlignment("center")
  )
    .color(colors.Colors.black)
    .boxShadow({
      blurRadius: 8,
      color: 0x1A000000,
      offset: {
        dx: 0,
        dy: 1
      }
    })
    .padding(padding.symmetric(16, 0))
}

