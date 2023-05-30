import { Container, Flex, Image, Text, Wrap, borderRadius } from "@lenra/components";
import { speakers } from "../../camping-data.js";

export default function (_data, _props) {
    const sortedSpeakers = Object.values(speakers).sort((a, b) => a.attributes.name.localeCompare(b.attributes.name));
    return Wrap(
        sortedSpeakers.map(speaker =>
            Container.card(
                Flex([
                    Flex([
                        Text(speaker.attributes.name)
                            .style({
                                fontSize: 20,
                                fontWeight: "bold",
                            }),
                        Text(speaker.attributes.company ?? ""),
                    ])
                        .direction("vertical")
                        .crossAxisAlignment("stretch"),
                    Container(
                        Image(speaker.attributes.photoURL ?? "")
                            .width(150)
                            .height(150)
                            .fit("cover")
                            .filterQuality("high")
                            .loadingPlaceholder(Text("Loading image..."))
                            .errorPlaceholder(Text("Failed to load image")),
                    )
                        .width(150)
                        .height(150)
                        .borderRadius(borderRadius.all(75))
                        // TODO: manage clip Behaviour, see https://github.com/lenra-io/lenra_cli/issues/270
                        .alignment("center"),
                    Container(
                        // Manage socials
                        Flex(
                            speaker.attributes.socials?.map(social =>
                                // TODO: manage link
                                Flex([
                                    Image(`socials/${social.icon}.png`)
                                        .width(14)
                                        .height(14)
                                        .filterQuality("high"),
                                    Text(social.name)
                                        .style({
                                            fontSize: 14,
                                        }),
                                ])
                                    .spacing(4)
                                    .crossAxisAlignment("center")
                            )
                        )
                            .spacing(8)
                    )
                        .height(24)
                        .alignment("center"),
                ])
                    .direction("vertical")
                    .mainAxisAlignment("spaceBetween")
                    .crossAxisAlignment("center")
                    .fillParent(true)
            )
                .width(276)
                .height(276)
        )
    )
        .runAlignment("spaceAround")
        .spacing(32)
        .runSpacing(32)
}

