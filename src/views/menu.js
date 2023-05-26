import { Container, Flex, colors, padding, Image, Flexible, Text } from "@lenra/components";

export default function (_data, _props) {
  return Container(
    Flex([
      Container(
        Image("logo-characters.png")
      )
        .height(60),

    ])
      .mainAxisAlignment("center")
      .crossAxisAlignment("center")
      .padding({ bottom: 4 })
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
    .padding(padding.symmetric(32, 0))
}

