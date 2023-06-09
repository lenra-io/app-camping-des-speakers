import { Actionable, Container, Flex, Flexible, Image, padding, Text, Wrap } from "@lenra/components";
import { sponsors, sponsorsCatorgories } from "../../camping-data.js";

export default function (_data, _props) {
    return Flex(
        sponsorsCatorgories.map(renderCategory)
    )
        .direction("vertical")
        .spacing(32)
}

function renderCategory({ category, sponsorKeys }) {
    return Flex([
        Flex([
            Image(`sponsor_${category}.png`)
                .width(120)
                .fit("contain")
                .filterQuality("high"),
            Flexible(
                Text(`Sponsors ${category}`)
                    .style({
                        fontSize: 32,
                        fontWeight: "bold",
                    })
            )
        ])
            .crossAxisAlignment("center"),
        Wrap(
            sponsorKeys
                .map(key => sponsors[key])
                .map(sponsorCard)
        )
            .spacing(32)
            .alignment("start")
            .crossAxisAlignment("center")
            .runAlignment("center")
            .runSpacing(16)
    ])
        .direction("vertical")
        .spacing(16)
}

function sponsorCard(sponsor) {
    return Actionable(
        Container.card(
            Flex([
                Text(sponsor.attributes.title)
                    .style({
                        fontSize: 24,
                        fontWeight: "bold",
                    }),
                Container(
                    Image(sponsor.attributes.logoURL)
                        .fit("contain")
                        .filterQuality("high")
                        .width(220)
                        .height(220)
                )
                    .padding(padding.symmetric(32, 16))
            ])
                .direction("vertical")
                .crossAxisAlignment("start")
        )
    )
        .onPressed("@lenra:navTo", { path: sponsor.attributes.url })
}