import { Actionable, Container, Flex, Flexible, Image, Text, Wrap, colors } from "@lenra/app";
import { sessions, speakers } from "../../camping-data.js";
import { buildContentChildren } from "../../utils/contentDescriber.js";

export default function (_data, /* _props,  */{ context: { pathParams } }) {
    const speaker = speakers[pathParams.key];
    return Flex([
        header(speaker),
        ...body(speaker),
        ...sessionList(speaker),
    ])
        .direction("vertical")
        .spacing(16)
        .crossAxisAlignment("stretch")
}

/**
 * @param {Speaker} speaker 
 * @returns 
 */
function header(speaker) {
    const children = [
        Text(speaker.attributes.name)
            .style({
                fontSize: 24,
                fontWeight: "bold",
            })
    ];
    if (speaker.attributes.company) {
        children.push(Text(speaker.attributes.company)
            .style({
                fontSize: 20,
                fontWeight: "bold",
            }));
    }
    const flex = Flex(children)
        .direction("vertical")
    if (speaker.attributes.photoURL) {
        return Wrap([
            Image(speaker.attributes.photoURL)
                .width(100)
                .height(100),
            flex
        ])
            .spacing(16)
            .alignment("center")
            .crossAxisAlignment("center")
            .runAlignment("center")
            .runSpacing(16);
    }
    return flex;
}

/**
 * @param {Speaker} speaker 
 * @returns 
 */
function body(speaker) {
    const children = buildContentChildren(speaker.children);
    if (children.length > 1)
        return [Flex(children).direction("vertical").spacing(8)];
    return children;
}

/**
 * @param {Speaker} speaker 
 * @returns 
 */
function sessionList(speaker) {
    const elements = Object.values(sessions)
        .filter(session => session.attributes.speakers.includes(speaker.attributes.key))
        .sort((a, b) => a.attributes.day - b.attributes.day || a.attributes.time.localeCompare(b.attributes.time))
        .map(session =>
            Actionable(
                Flex([
                    Text("•"),
                    Flexible(Text(session.attributes.title)),
                ])
                    .spacing(8)
                    .crossAxisAlignment("center")
            )
                .onPressed("@lenra:navTo", { path: `/sessions/${session.attributes.key}` })
        );
    if (elements.length === 0) return [];
    return [
        Container(
            Text("")
        )
            .color(colors.Colors.black)
            .height(1),
        Text("Séances")
            .style({
                fontSize: 20,
                fontWeight: "bold",
            }),
        Flex(elements)
            .spacing(16)
            .direction("vertical")
    ];
}
