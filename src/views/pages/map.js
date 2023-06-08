import { Actionable, Container, Flex, Flexible, Image, padding, Text, Wrap } from "@lenra/components";
import { sponsors } from "../../camping-data.js";

const sponsorsValues = Object.values(sponsors);
const sponsorsCatorgories =
    [4096, 2048, 512]
        .map(category => ({
            category,
            sponsors: sponsorsValues
                .filter(sponsor => sponsor.attributes.category === category)
                .sort((a, b) => a.attributes.title.localeCompare(b.attributes.title))
        }));

export default function (_data, _props) {
    return Flex(
        sponsorsCatorgories.map(renderCategory)
    )
        .direction("vertical")
        .spacing(32)
}

function renderCategory({ category, sponsors }) {
    return Flex([
        Flex([
            Image(`sponsor_${category}.png`)
                .width(150)
                .fit("contain")
                .filterQuality("high"),
            Text(`Sponsors ${category}`)
                .style({
                    fontSize: 40,
                    fontWeight: "bold",
                })
        ])
            .crossAxisAlignment("center"),
        Wrap(
            sponsors.map(sponsorCard)
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