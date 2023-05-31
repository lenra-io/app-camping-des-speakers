import { Actionable, Flex, Flexible, Text, View, Wrap } from "@lenra/components";
import { days, rooms, sessions, speakers } from "../../camping-data.js";
import { views } from "../../index.gen.js";
import { buildContentChildren } from "../../utils/contentDescriber.js";

export default function (_data, /* _props,  */{ context: { pathParams } }) {
    const session = sessions[pathParams.key];
    return Flex([
        header(session),
        ...body(session),
        ...speakerList(session),
    ])
        .direction("vertical")
        .spacing(16)
        .crossAxisAlignment("stretch")
}

/**
 * @param {Session} session 
 * @returns 
 */
function header(session) {
    return Flex([
        Text(session.attributes.title)
            .style({
                fontSize: 24,
                fontWeight: "bold",
            }),
        Text(`${days[session.attributes.day].long} ${session.attributes.time} - ${session.attributes.duration}`),
        Text(rooms[session.attributes.room].name),
    ])
        .direction("vertical")
}

/**
 * @param {Session} session 
 * @returns 
 */
function body(session) {
    const children = buildContentChildren(session.children);
    if (children.length > 1)
        return [Flex(children).direction("vertical").spacing(8)];
    return children;
}

/**
 * @param {Session} session 
 * @returns 
 */
function speakerList(session) {
    const cards = session.attributes.speakers
        .filter(speaker => speaker in speakers)
        .map(speaker => View(views.pages.agenda.speaker).props({ speaker }));
    if (cards.length > 1)
        return [Wrap(cards).spacing(16)];
    return cards;
}
